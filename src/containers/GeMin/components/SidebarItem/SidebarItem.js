import React, { Component } from 'react';
import PropType from 'prop-types';
import './SidebarItem.less';

export default class SidebarItem extends Component {
  static propType = {
    href: PropType.string,
    icon: PropType.string,
    name: PropType.string,
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div>
          <a href={this.props.href}>
            <i className="material-icons">{this.props.icon}</i>
            <p>{this.props.name}</p>
          </a>
        </div>
      </div>
    );
  }
}
