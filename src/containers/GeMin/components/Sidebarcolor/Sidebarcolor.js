import React, { Component } from 'react';
import './Sidebarcolor.less';

export default class SidebarItem extends Component {

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="active">
          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html">
            <i className="material-icons">dashboard</i>
            <p>Dashboard</p>
          </a>
        </div>
      </div>
    );
  }
}
