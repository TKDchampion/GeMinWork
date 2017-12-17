import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import PropType from 'prop-types';
import './Card2.less';

export default class Card2 extends Component {
  static propType = {
    category: PropType.string,
    title: PropType.string,
    footername: PropType.string,
    footerword: PropType.string,
    backgroundColor: PropType.string,
    img: PropType.string
  }
    render() {
      const bgStyle = {
        backgroundImage: `URL("${this.props.img}")`,
        backgroundColor: this.props.backgroundColor
      };
        return (
          <div className="card2">
            <div className="card-header" style={bgStyle}>
              <span />
            </div>
            <div className="card-content">
              <p className="category">{this.props.category}</p>
              <h3 className="title">{this.props.title}
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <span>
                  <FontAwesome name={this.props.footername} />
                </span>
                <a>{this.props.footerword}</a>
              </div>
            </div>
          </div>
        );
    }
}
