import React, { Component } from "react";
import { BadgesService } from "../../service/badges.service";
import { BadgeModel } from "../../models/badge.model";
import { RouteComponentProps } from "react-router";
import "./Badges.scss";

interface BadgesProps extends RouteComponentProps {}

interface BadgesState {
  badges: BadgeModel[];
}

class Badges extends Component<BadgesProps, BadgesState> {
  readonly state: BadgesState = {
    badges: [],
  };

  badgeService = new BadgesService();

  async componentDidMount() {
    const response = await this.badgeService.getBadges();
    this.setState({ badges: response });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.badges.map((badge: BadgeModel) => {
            return (
              <div key={badge.id} className="p-3 col-12 col-md-6 col-lg-4">
                <div
                  className="card p-3 BadgeCard"
                  onClick={() => {
                    console.log("badge.id", badge.id);
                    this.props.history.push(`/badge/${badge.id}`);
                  }}
                >
                  <h5 className="card-title">{badge.name}</h5>
                  <div>{badge.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Badges;
