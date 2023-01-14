import React, { Component } from "react";
import "./nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">Home</li>
          <li className="navbar-list-item-active">{this.props.page}</li>
        </ul>
      </nav>
    );
  }
}
