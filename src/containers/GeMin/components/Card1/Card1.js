import React, { Component } from "react";

export default class Card1 extends Component {
    render() {
        return (
          <div className="card card-stats">
            <div className="card-header" data-background-color="orange">
              <i className="material-icons">content_copy</i>
            </div>
            <div className="card-content">
              <p className="category">Used Space</p>
              <h3 className="title">49/50
                        <small>GB</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons text-danger">warning</i>
                <a href="http://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.28571388.179549990.1512119107-399052212.1512119107#pablo">Get More Space...</a>
              </div>
            </div>
          </div>
        );
    }
}
