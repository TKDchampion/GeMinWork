import React, { Component } from "react";
import Panelheader from '../Panelheader/Panelheader';
import Panelcontent from '../Panelcontent/Panelcontent';

import './Panel.less';


export default class Panel extends Component {
    render() {
        return (
          <div id="Panelpage">
            <Panelheader />
            <Panelcontent />
          </div>
        );
    }
}
