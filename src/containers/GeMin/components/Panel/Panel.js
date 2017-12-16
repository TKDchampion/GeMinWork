import React, { Component } from "react";
import Panelheader from './../Panelheader/Panelheader';
import Panelcontent from './../Panelcontent/Panelcontent';

import './Panel.less';


export default class Panel extends Component {
    render() {
        return (
          <div id="Panelpage">
            <div className="main-panel ps-container ps-theme-default ps-active-y" data-ps-id="557d8ba7-6480-8b7c-f7ae-3de6bb1e5179">
              <Panelheader />
              <Panelcontent />
            </div>
          </div>
        );
    }
}
