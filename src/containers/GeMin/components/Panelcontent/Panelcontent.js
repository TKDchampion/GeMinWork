import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Card1 from '../Card1/Card1';
import Card2 from '../Card2/Card2';
import Ｃard1JSON from '../Card1/Card1.json';
import Ｃard2JSON from '../Card2/Card2.json';

export default class Panelcontent extends Component {
    render() {
        return (
          <div className="container-fluid">
            <Row>
              {
                Ｃard1JSON.map(card =>
                  <Col xs="12" md="3">
                    <Card1
                      headername={card.headername}
                      category={card.category}
                      title={card.title}
                      href={card.href}
                      footerword={card.footerword}
                      backgroundColor={card.background}
                      color={card.color}
                      footercolor={card.footercolor}
                    />
                  </Col>
                )
              }
            </Row>
            <Row>
              {
                Ｃard2JSON.map(card =>
                  <Col xs="12" md="4">
                    <Card2
                      headername={card.headername}
                      category={card.category}
                      title={card.title}
                      footername={card.footername}
                      footerword={card.footerword}
                      backgroundColor={card.background}
                      img={card.img}
                    />
                  </Col>
                )
              }
            </Row>
          </div>
        );
    }
}
