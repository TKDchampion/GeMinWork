import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import { Button } from 'reactstrap';

export default class Panelheader extends Component {
    render() {
        return (
          <nav className="navbar navbar-transparent navbar-absolute">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#"> Material Dashboard </a>
              </div>
              <div >
                <ul className="nav navbar-nav navbar-right">
                  <li className="th">
                    <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo" className="dropdown-toggle" data-toggle="dropdown">
                      <div>
                        <FontAwesome name="th-large" />
                      </div>
                    </a>
                  </li>
                  <li className="bell">
                    <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="notification">5</span>
                      <div>
                        <FontAwesome name="bell" />
                      </div>
                    </a>
                  </li>
                  <li className="user">
                    <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo" className="dropdown-toggle" data-toggle="dropdown">
                      <div>
                        <FontAwesome name="user" />
                      </div>
                    </a>
                  </li>
                </ul>
                <form className="navbar-form navbar-right" role="search">
                  <div className="form-group is-empty">
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="material-input" />
                    <span className="material-input" />
                  </div>
                  <Button color="secondary" type="submit" className="btn">
                    <div>
                      <FontAwesome name="search" />
                    </div>
                  </Button>
                </form>
              </div>
            </div>
          </nav>
        );
    }
}
