import React, { Component } from "react";
import { UserModel } from "../../models/user.model";
import { UsersService } from "../../service/users.service";
import { RouteComponentProps } from "react-router";
import "./Users.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface UsersProps extends RouteComponentProps {}

interface UsersState {
  users: UserModel[];
}

class Users extends Component<UsersProps, UsersState> {
  usersService = new UsersService();

  readonly state: UsersState = {
    users: [],
  };

  componentDidMount() {
    this.fetchAndSaveUsers();
  }

  async fetchAndSaveUsers() {
    const response = await this.usersService.getUsers();
    this.setState({ users: response });
  }

  async deleteUser(id: number) {
    await this.usersService.deleteUser(id.toString());
    this.fetchAndSaveUsers();
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="p-3 col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card p-3 UserCard CreateCard"
              onClick={() => {
                this.props.history.push("/user");
              }}
            >
              <div className="d-flex justify-content-center align-items-center m-auto CreateButton">
                CREATE NEW USER
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.users.map((user: UserModel) => {
            return (
              <div
                key={user.id}
                className="p-3 col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div
                  className="card UserCard"
                  onClick={() => {
                    this.props.history.push(`user/${user.id}`);
                  }}
                >
                  <img className="card-img-top UserImage" src={user.image} />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                  </div>

                  <FontAwesomeIcon
                    icon={faTrash}
                    className={"DeleteIcon"}
                    onClick={(event) => {
                      event.stopPropagation();
                      this.deleteUser(user.id);
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

export default Users;
