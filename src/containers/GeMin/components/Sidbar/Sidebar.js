import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.less';


export default class Sidebar extends Component {
    render() {
        return (
          <div id="sidebar" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="http://www.creative-tim.com/" className="simple-text">
                    Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper" data-ps-id="6081d1cb-5ecb-cc06-d15d-5ca92203b8b2">
              <ul className="nav">
                <SidebarItem />
              </ul>
            </div>
          </div>
        );
    }
}
