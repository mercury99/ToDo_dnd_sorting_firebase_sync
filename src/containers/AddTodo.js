import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import MdAdd from "react-icons/lib/md/add";

import { addTodoRequest } from '../actions/index';
import InputWithButton from "../components/InputWithButton";

const ENTER_KEY = 13;

@connect(undefined, {addTodoRequest})
export default class AddTodo extends Component {
    static propTypes = {
        addTodoRequest: PropTypes.func,
    };

    state = {
        text: ""
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.submit();
        }
    };

    handleClick = () => {
        this.submit();
    };

    submit = () => {
        this.props.addTodoRequest(this.state.text);
        this.setState({text: ""});
    };

    render() {
        return (
            <InputWithButton
                value={this.state.text}
                placeholder="What needs to be done?"
                onChange={this.handleTextChange}
                onKeyDown={this.handleKeyDown}
                onClick={this.handleClick}
            >
                <MdAdd/>
            </InputWithButton>
        );
    }
}
