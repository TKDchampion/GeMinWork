import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import './Card2.less';

export default class Card2 extends Component {
    render() {
        return (
          <div className="card2">
            <div className="card-header" data-background-color="orange">
              <FontAwesome name="window-restore" />
            </div>
            <div className="card-content">
              <p className="category">Used Space</p>
              <h3 className="title">49/50
                <small>GB</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <FontAwesome name="warning" />
                <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-399052212.1512119107#pablo">Get More Space...</a>
              </div>
            </div>
          </div>
        );
    }
}
