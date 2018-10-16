import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./Detail.css";
import Fractal from "../../components/Fractal";



class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 md-offset-1">
          <Row>
            <Col size="md-12 md offset-1">
            <div id="PostItTop">
              <p id="jTitleTop">
              {this.state.book.title} 
              </p>
            </div>
          </Col>
        </Row>
        <Row>
        <Col size="md-12 md-offset-1">
            <div id="PostItBottom">
              <p id="jTitleBottomDetail">
                Entry: {this.state.book.author}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 md-offset-1">
            <article>
              <h2>Entry: </h2>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
      </Col>
      <Col size="md-6 md-offset-1">
      <Row>
              <Col size="md-12 md-offset-1">
                <Fractal />
              </Col>
            </Row>
            <Row>
              <Col size="md-12 md-offset-1">
                <Fractal />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
