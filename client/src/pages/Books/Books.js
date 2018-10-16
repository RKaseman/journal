import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Books.css";
import Fractal from "../../components/Fractal";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 md-offset-1" id="ColFix">
            <Row>
              <Col size="md-12">
                <div id="PostItTop">
                  <p id="jTitleTop">

                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <div id="PostItBottom">
                  <div id="jTitleBottomBooks">
                    Write
              </div>
                </div>
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Date/Time (required)"
                  />
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Entry Title (required)"
                  />
                  <TextArea
                    value={this.state.synopsis}
                    onChange={this.handleInputChange}
                    name="synopsis"
                    placeholder="Write Journal Entry Here"
                  />
                  <FormBtn
                    disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Entry
              </FormBtn>
                </form>
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

export default Books;
