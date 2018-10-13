import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import PostItTop from "../../components/PostItTop";
import PostItBottom from "../../components/PostItBottom";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <PostItTop></PostItTop>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <PostItBottom>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          </PostItBottom>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
