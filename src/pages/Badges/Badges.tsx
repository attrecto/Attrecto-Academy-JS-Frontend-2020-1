import React, { Component } from "react";
import { BadgesService } from "../../service/badges.service";
import { BadgeModel } from "../../models/badge.model";
import { RouteComponentProps } from "react-router";
import "./Badges.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface BadgesProps extends RouteComponentProps {}

interface BadgesState {
  badges: BadgeModel[];
}

class Badges extends Component<BadgesProps, BadgesState> {
  readonly state: BadgesState = {
    badges: [],
  };

  badgeService = new BadgesService();

  componentDidMount() {
    this.fetchAndSaveBadges();
  }

  async fetchAndSaveBadges() {
    const response = await this.badgeService.getBadges();
    this.setState({ badges: response });
  }

  async deleteBadge(id: number) {
    await this.badgeService.deleteBadge(id.toString());
    this.fetchAndSaveBadges();
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="p-3 col-12 col-md-6 col-lg-4">
            <div
              className="card p3 BadgeCard CreateCard"
              onClick={() => {
                this.props.history.push("/badge");
              }}
            >
              <div className="d-flex justify-content-center align-items-center m-auto CreateButton">
                CREATE NEW BADGE
              </div>
            </div>
          </div>

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

                  <FontAwesomeIcon
                    icon={faTrash}
                    className={"DeleteIcon"}
                    onClick={(event) => {
                      event.stopPropagation();
                      this.deleteBadge(badge.id);
                    }}
                  />
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
