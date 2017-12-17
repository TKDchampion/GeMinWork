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
    footerword: PropType.string,
    backgroundColor: PropType.string,
    color: PropType.string,
    footercolor: PropType.string
  }
    render() {
        return (
          <div className="card1">
            <div className="card-header" style={{backgroundColor: this.props.backgroundColor }}>
              <FontAwesome name={this.props.headername} />
            </div>
            <div className="card-content">
              <p className="category">{this.props.category}</p>
              <h3 className="title">{this.props.title}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <span style={{color: this.props.color}}>
                  <FontAwesome name={this.props.footername} />
                </span>
                <a href={this.props.href} style={{color: this.props.footercolor}}>{this.props.footerword}</a>
              </div>
            </div>
          </div>
        );
    }
}
