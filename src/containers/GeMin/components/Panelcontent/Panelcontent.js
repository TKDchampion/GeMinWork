import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Card1 from './../Card1/Card1';
import Card2 from './../Card2/Card2';
import './../Card1/Card1.json';

export default class Panelcontent extends Component {
    render() {
        return (
          <div className="container-fluid">
            <Row>
              {
                Card1.map(card =>
                  <Card1
                    headername={card.headername}
                    category={card.category}
                    title={card.title}
                    footername={card.footername}
                    href={card.href}
                    footerword={card.footerword}
                  />
                )
              }
              <Col xs="12" md="3">
                <Card1 />
              </Col>
              <Col xs="12" md="3">
                <Card1 />
              </Col>
              <Col xs="12" md="3">
                <Card1 />
              </Col>
              <Col xs="12" md="3">
                <Card1 />
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="4">
                <Card2 />
              </Col>
              <Col xs="12" md="4">
                <Card2 />
              </Col>
              <Col xs="12" md="4">
                <Card2 />
              </Col>
            </Row>
          </div>
        );
    }
}
