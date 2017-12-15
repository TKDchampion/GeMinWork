import React, { Compnonet } from 'react';
import Siderbar from './components/Sidebar';
import Panel from './components/Panel';

export default class GeMin extends Compnonet {
    render() {
        return (
          <div className='wrapper'>
            <Siderbar />
            <Panel />
          </div>
        );
    }
}
