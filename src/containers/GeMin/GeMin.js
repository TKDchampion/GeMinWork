import React, { Component } from 'react';


import Siderbar from './components/Sidbar/Sidebar';
import Panel from './components/Panel/Panel';
import './Gemin.less';

export default class GeMin extends Component {
    render() {
        return (
          <div className="gemin">
            <Siderbar />
            <Panel />
          </div>
        );
    }
}
