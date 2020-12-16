import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import Axios from "axios";

class App extends Component {
  async componentDidMount() {
    const res = await Axios.get("https://api.github.com/users");
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
