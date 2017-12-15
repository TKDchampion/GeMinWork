import React, { Component } from 'react';


export default class Sidebar extends Component {
    render() {
        return (
          <div className="sidebar" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="http://www.creative-tim.com/" className="simple-text">
                    Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper ps-container ps-theme-default" data-ps-id="6081d1cb-5ecb-cc06-d15d-5ca92203b8b2">
              <ul className="nav">
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
              </ul>
              <div className="ps-scrollbar-x-rail" >
                <div className="ps-scrollbar-x" tabIndex="0" >
                </div>
              </div>
              <div className="ps-scrollbar-y-rail" >
                <div className="ps-scrollbar-y" tabIndex="0" >
                </div>
              </div>
            </div>
            <div className="sidebar-background" ></div>
          </div>
        );
    }
}
