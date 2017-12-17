import React, { Component } from 'react';
import SidebarItem from './../SidebarItem/SidebarItem';
import Sidebarcolor from './../Sidebarcolor/Sidebarcolor';
import './Sidebar.less';


export default class Sidebar extends Component {
  Sidebar = [
            {href: "http://demos.creative-tim.com/material-dashboard/examples/user.html",
            icon: "person",
            name: "User Profile"},
            {href: "http://demos.creative-tim.com/material-dashboard/examples/table.html",
            icon: "content_paste",
            name: "Table divst"},
            {href: "http://demos.creative-tim.com/material-dashboard/examples/icons.html",
            icon: "bubble_chart",
            name: "Icons"},
            {href: "http://demos.creative-tim.com/material-dashboard/examples/maps.html",
            icon: "location_on",
            name: "Maps"},
            {href: "http://demos.creative-tim.com/material-dashboard/examples/notifications.html",
            icon: "notifications",
            name: "Notifications"},
            {href: "http://demos.creative-tim.com/material-dashboard/examples/upgrade.html",
            icon: "unarchive",
            name: "Upgrade to PRO"},
  ];
    render() {
        return (
          <div id="sidebar">
            <div className="img" />
            <div className="cover">
              <div className="logo">
                <a href="http://www.creative-tim.com/" className="simple-text">
                      Creative Tim
                </a>
              </div>
              <div className="sidebar-wrapper">
                <ul className="nav">
                  <Sidebarcolor />
                  {
                    this.Sidebar.map(object =>
                      <SidebarItem
                        href={object.href}
                        icon={object.icon}
                        name={object.name}
                      />)
                  }
                </ul>
              </div>
            </div>
          </div>
        );
    }
}
