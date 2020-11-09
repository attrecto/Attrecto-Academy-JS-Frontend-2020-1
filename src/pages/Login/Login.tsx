import React, { FC } from "react";
import TextField from "../../components/textField/TextField";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import { AuthService } from "../../service/auth.service";
import { CredentialsModel } from "../../models/credentials.model";

const authService = new AuthService();

interface LoginProps {
  setToken: (token: string | null) => void;
}

const Login: FC<LoginProps> = ({ setToken }) => {
  const onSubmit = async (values: CredentialsModel) => {
    try {
      const { token } = await authService.login(values);

      setToken(token);
    } catch {
      setToken(null);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <Formik
                initialValues={{ email: "", password: "" } as CredentialsModel}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required(),
                  password: Yup.string().required(),
                })}
                onSubmit={onSubmit}
              >
                <Form>
                  <Field component={TextField} name="email" label="Email" />
                  <Field
                    component={TextField}
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <Button className="btn-block" type="submit">
                    Sign in
                  </Button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
