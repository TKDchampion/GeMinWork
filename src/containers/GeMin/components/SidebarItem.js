import React, { Component } from 'react';

export default class SidebarItem extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <li className="active">
          <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html">
            <i className="material-icons">dashboard</i>
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/user.html">
            <i className="material-icons">person</i>
            <p>User Profile</p>
          </a>
        </li>
        <li>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/table.html">
            <i className="material-icons">content_paste</i>
            <p>Table List</p>
          </a>
        </li>
        <li>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/typography.html">
            <i className="material-icons">library_books</i>
            <p>Typography</p>
          </a>
        </li>
        <li>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/icons.html">
            <i className="material-icons">bubble_chart</i>
            <p>Icons</p>
          </a>
        </li>
        <li>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/maps.html">
            <i className="material-icons">location_on</i>
            <p>Maps</p>
          </a>
        </li>
        <li>
          <a href="http://demos.creative-tim.com/material-dashboard/examples/notifications.html">
            <i className="material-icons text-gray">notifications</i>
            <p>Notifications</p>
          </a>
        </li>
        <li className="active-pro">
          <a href="http://demos.creative-tim.com/material-dashboard/examples/upgrade.html">
            <i className="material-icons">unarchive</i>
            <p>Upgrade to PRO</p>
          </a>
        </li>
      </div>
    );
  }
}
