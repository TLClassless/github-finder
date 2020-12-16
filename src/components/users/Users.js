import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "TLClassless",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/34322681?s=460&u=86864c6b56d1defdb2177fc50f86f14283aef481&v=4",
        html_url: "https://github.com/tlclassless/",
      },
      {
        id: "2",
        login: "JoshDanielWalker",
        avatar_url:
          "https://avatars1.githubusercontent.com/u/9192664?s=460&u=f0941e38b314d39cff390ac82caaba7220a996d9&v=4",
        html_url: "https://github.com/JoshDanielWalker",
      },
      {
        id: "3",
        login: "joefazz",
        avatar_url:
          "https://avatars1.githubusercontent.com/u/2134060?s=460&u=1181f01f3b4e9fad57fcf9b8173181d69431086e&v=4",
        html_url: "https://github.com/joefazz",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
