import React, { Component } from "react";
import { UserModel } from "../../models/user.model";
import { UsersService } from "../../service/users.service";

interface UsersProps {}

interface UsersState {
  users: UserModel[];
}

class Users extends Component<UsersProps, UsersState> {
  usersService = new UsersService();

  readonly state: UsersState = {
    users: [],
  };

  async componentDidMount() {
    const response = await this.usersService.getUsers();
    this.setState({ users: response });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.users.map((user: UserModel) => {
            return (
              <div
                key={user.id}
                className="p-3 col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="card">
                  <img className="card-img-top" src={user.image} />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                  </div>
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
