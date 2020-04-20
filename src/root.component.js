import { Link } from "@reach/router";
import React from "react";

export default class Root extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Error</div>;
    } else {
      return (
        <>
          <a class="navbar-brand" href="/">
            <img
              src="https://single-spa.js.org/img/logo-white-bgblue.svg"
              className="d-inline-block align-top"
              height="30"
              width="30"
              alt=""
            />
            Microfrontends Demo
          </a>
          <div class="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/employees">
                  Employees
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-white">
            <em>{this.props.name}</em>
          </p>
        </>
      );
    }
  }
}
