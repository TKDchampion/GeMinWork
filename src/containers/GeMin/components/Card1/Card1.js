import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import PropType from 'prop-types';
import './Card1.less';

export default class Card1 extends Component {
  static propType = {
    headername: PropType.string,
    category: PropType.string,
    title: PropType.string,
    footername: PropType.string,
    href: PropType.string,
    footerword: PropType
  }
    render() {
        return (
          <div className="card1">
            <div className="card-header" data-background-color="orange">
              <FontAwesome name={this.props.headername} />
            </div>
            <div className="card-content">
              <p className="category">{this.props.category}</p>
              <h3 className="title">{this.props.title}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <FontAwesome name={this.props.footername} />
                <a href={this.props.href}>{this.props.footerword}</a>
              </div>
            </div>
          </div>
        );
    }
}
