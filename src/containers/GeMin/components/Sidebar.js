import React, { Component } from 'react';


export default class Sidebar extends Component {
    render() {
        return (
          <div classNameName="sidebar" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
            <div classNameName="logo">
              <a href="http://www.creative-tim.com/" classNameName="simple-text">
                    Creative Tim
              </a>
            </div>
            <div classNameName="sidebar-wrapper ps-container ps-theme-default" data-ps-id="6081d1cb-5ecb-cc06-d15d-5ca92203b8b2">
              <ul classNameName="nav">
                <li classNameName="active">
                  <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html">
                    <i classNameName="material-icons">dashboard</i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li>
                  <a href="http://demos.creative-tim.com/material-dashboard/examples/user.html">
                    <i classNameName="material-icons">person</i>
                    <p>User Profile</p>
                  </a>
                </li>
                <li>
                  <a href="http://demos.creative-tim.com/material-dashboard/examples/table.html">
                    <i classNameName="material-icons">content_paste</i>
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
              <div className="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                <div className="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;">
                </div>
              </div>
              <div className="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                <div className="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;">
                </div>
              </div>
            </div>
          <div className="sidebar-background" style="background-image: url(../assets/img/sidebar-1.jpg) "></div>
          </div>
        );
    }
}
