import React, { Component } from "react";
import { BadgesService } from "../../service/badges.service";
import { BadgeModel } from "../../models/badge.model";
import { RouteComponentProps } from "react-router";
import Button from "../../components/button/Button";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import TextField from "../../components/textField/TextField";

interface BadgeProps extends RouteComponentProps<{ id: string }> {}

interface BadgeState {
  badge: BadgeModel | null;
}

class Badge extends Component<BadgeProps, BadgeState> {
  readonly state: BadgeState = {
    badge: null,
  };

  badgeService = new BadgesService();

  async componentDidMount() {
    const badgeId = this.props.match.params?.id;

    if (badgeId) {
      const response = await this.badgeService.getBadge(badgeId);
      this.setState({ badge: response });
    }
  }

  onSubmit = async (values: BadgeModel) => {
    const id = this.state.badge?.id;
    if (id) {
      await this.badgeService.updateBadge(id.toString(), values);
    } else {
      await this.badgeService.createBadge(values);
    }
    toast.success("Saved successfully!");
    this.props.history.push("/badges");
  };

  validationSchema = () => {
    return Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
    });
  };

  render() {
    const { badge } = this.state;
    return (
      <div className="container mt-4">
        <div className="card p-4">
          <Formik
            initialValues={
              {
                name: badge?.name,
                description: badge?.description,
              } as BadgeModel
            }
            validationSchema={this.validationSchema()}
            enableReinitialize
            onSubmit={this.onSubmit}
          >
            {({ isValid }) => {
              return (
                <Form>
                  <TextField name={"name"} label={"Name"} />
                  <TextField name={"description"} label={"Description"} />
                  <Button disabled={!isValid}>
                    {this.state.badge?.id ? "Save" : "Update"}
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

export default Badge;
