import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.less';


export default class Sidebar extends Component {
  array = [{href: "http://demos.creative-tim.com/material-dashboard/examples/dashboard.html",
                icon: "dashboard",
                name: "Dashboard"},
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
          <div id="sidebar" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="http://www.creative-tim.com/" className="simple-text">
                    Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                {
                  this.array.map(object =>
                    <SidebarItem
                      href={object.href}
                      icon={object.icon}
                      name={object.name}
                    />)
                }
              </ul>
            </div>
          </div>
        );
    }
}
