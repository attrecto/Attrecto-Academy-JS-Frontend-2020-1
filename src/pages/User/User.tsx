import { RouteComponentProps } from "react-router";
import { UserModel } from "../../models/user.model";
import React, { Component } from "react";
import { UsersService } from "../../service/users.service";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextField from "../../components/textField/TextField";
import Button from "../../components/button/Button";
import { BadgeModel } from "../../models/badge.model";
import { BadgesService } from "../../service/badges.service";

const DEFAULT_USER_IMAGE =
  "https://trafalgarproperties.b-cdn.net/wp-content/uploads/2018/07/team-placeholder.jpg";

interface UserProps extends RouteComponentProps<{ id: string }> {}

interface UserState {
  user: UserModel | null;
  badges: BadgeModel[];
}

class User extends Component<UserProps, UserState> {
  readonly state: UserState = {
    user: null,
    badges: [],
  };

  userService = new UsersService();
  badgeService = new BadgesService();

  async componentDidMount() {
    const userId = this.props.match.params?.id;

    if (userId) {
      const response = await this.userService.getUser(userId);
      this.setState({ user: response });
    }

    const badgeResponse = await this.badgeService.getBadges();
    this.setState({ badges: badgeResponse });
  }

  onSubmit = async (values: UserModel) => {
    const id = this.state.user?.id;

    if (!values.image) {
      values.image = DEFAULT_USER_IMAGE;
    }

    if (id) {
      await this.userService.updateUser(id.toString(), values);
    } else {
      await this.userService.createUser(values);
    }
    toast.success("Saved successfully!");
    this.props.history.push("/users");
  };

  validationSchema = () => {
    return Yup.object().shape({
      name: Yup.string().required(),
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container mt-4">
        <div className="card p-4">
          <Formik
            initialValues={
              {
                name: user?.name,
                image: user?.image,
              } as UserModel
            }
            validationSchema={this.validationSchema()}
            validateOnMount
            validateOnChange
            enableReinitialize
            onSubmit={this.onSubmit}
          >
            {({ isValid }) => {
              return (
                <Form>
                  <TextField name={"name"} label={"Name"} />
                  <TextField name={"image"} label={"Profile image url"} />

                  <div className="d-flex mb-3">
                    {this.state.badges.map((badge: BadgeModel) => {
                      return (
                        <span className="badge badge-info mr-3">
                          {badge.name}
                        </span>
                      );
                    })}
                  </div>

                  <Button disabled={!isValid}>
                    {this.state.user?.id ? "Save" : "Update"}
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default User;
