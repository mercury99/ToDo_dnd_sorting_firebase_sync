import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import MdCheck from "react-icons/lib/md/check";

import { editTodoRequest } from '../actions/index';
import { getEditingTodo } from "../selectors";
import InputWithButton from "../components/InputWithButton";

const ENTER_KEY = 13;

const mapStateToProps = (state) => ({
    editingTodo: getEditingTodo(state),
});

@connect(mapStateToProps, {editTodoRequest})
export default class TodoEditor extends Component {
    static propTypes = {
        editingTodo: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            completed: PropTypes.bool,
        }),
        editTodoRequest: PropTypes.func,
    };

    state = {
        text: " "
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
        this.props.editTodoRequest(this.state.text);
        this.setState({text: ""});
        this.props.onClose();
    };

    render() {
        const editText = this.props.editingTodo ? this.props.editingTodo.text : "";

        return (
            <InputWithButton
                value={this.state.text === " " ? editText : this.state.text}
                onChange={this.handleTextChange}
                onKeyDown={this.handleKeyDown}
                onClick={this.handleClick}
            >
                <MdCheck/>
            </InputWithButton>
        );
    }
}
