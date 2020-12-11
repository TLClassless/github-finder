import React, { Component } from "react";
import PropTypes from "prop-types";

export class navbar extends Component {
  static defaultProps = {
    title: " Github Finder",
    icon: "fab fa-github-alt",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default navbar;