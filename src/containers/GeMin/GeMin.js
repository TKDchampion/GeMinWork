import React, { Component } from 'react';


import Siderbar from './components/Sidebar.js';
import Panel from './components/Panel';

export default class GeMin extends Component {
    render() {
        return (
          <div className='wrapper'>
            <Siderbar />
            <Panel />
          </div>
        );
    }
}
