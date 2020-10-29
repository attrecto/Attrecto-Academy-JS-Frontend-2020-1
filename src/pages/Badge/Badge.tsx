import React, { Component } from "react";
import { BadgesService } from "../../service/badges.service";
import { BadgeModel } from "../../models/badge.model";
import { RouteComponentProps } from "react-router";
import Button from "../../components/button/Button";
import { Field, Form, Formik } from "formik";

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

  onSubmit = (values: any) => {
    console.log("values", values);
  };

  render() {
    const { badge } = this.state;
    return (
      <div className="container mt-4">
        <div className="card p-4">
          <Formik
            initialValues={{
              name: badge?.name,
              description: badge?.description,
            }}
            enableReinitialize
            onSubmit={this.onSubmit}
          >
            <Form>
              <div className="form-group">
                <label>Name</label>
                <Field name="name" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label>Description</label>
                <Field
                  name="description"
                  type="text"
                  className="form-control"
                />
              </div>

              <Button>Save</Button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default Badge;
