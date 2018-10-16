
import React, { Component } from 'react';
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
    state = {
        username: "jack",
        password: ""
    }

    componentDidMount() {
        this.loadUser();
        this.loadUserName();
    }

    loadUser = () => {
        API.getUser()
            .then(res => {
                console.log(res);
            })
    }

    loadUserName = () => {
        API.getusername(this.state.username)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log(this.props.toggleLogin);
        event.preventDefault();
        if (this.state.username && this.state.password) {
            this.props.toggleLogin();
            console.log("!");
            // API.loadBooks()
            // .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (required)"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password (required)"
                />
                <FormBtn
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                >
                    Login
        </FormBtn>
            </form>
        )
    }
};

export default Home
