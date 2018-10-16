import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import "./Archives.css";
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
                  Archives
            </div>
              </div>
              </Col>
              </Row>
              <Row>
                <Col size="md-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} Entry: {book.author}
                        </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
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
