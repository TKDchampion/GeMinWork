import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import { Button } from 'reactstrap';
import './Panelheader.less';

export default class Panelheader extends Component {
  render() {
    return (
      <div id="Panelheader">
        <div className="Panelheader-header">
          <a className="navbar-brand" href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#"> Material Dashboard </a>
        </div>
        <form className="Panelheader-search" role="search">
          <div className="Panelheader-input">
            <input type="text" placeholder="Search" />
          </div>
          <Button color="secondary" type="submit" className="btn">
            <div>
              <FontAwesome name="search" />
            </div>
          </Button>
        </form>
        <ul className="Panelheader-icon">
          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo" className="th">
            <FontAwesome name="th-large" />
          </a>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#" className="bell">
            <span className="notification">5</span>
            <FontAwesome name="bell" />
          </a>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-699052212.1512119107#pablo" className="user">
            <FontAwesome name="user" />
          </a>
        </ul>
      </div>
    );
  }
}
