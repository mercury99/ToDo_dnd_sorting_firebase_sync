import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import * as Sortable from "sortablejs";

import {
    deleteTodoRequest,
    beginEditTodo,
    responseSorting,
    requestSorting,
    todosResponse,
    toggleTodoRequest
} from '../actions/index';
import { getVisibleTodos, getEditingTodo } from "../selectors";
import { sorting, todos } from "../config/index";

import Todo from '../components/Todo.js';
import TodoEditor from "./TodoEditor";

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state),
    editingTodo: getEditingTodo(state),
    sorting: state.sorting,
});

@connect(
    mapStateToProps,
    {
        deleteTodoRequest,
        beginEditTodo,
        responseSorting,
        requestSorting,
        todosResponse,
        toggleTodoRequest,
    }
)
export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            completed: PropTypes.bool,
        })),
        editingTodo: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            completed: PropTypes.bool,
        }),
        sorting: PropTypes.arrayOf(PropTypes.string),
        deleteTodoRequest: PropTypes.func,
        beginEditTodo: PropTypes.func,
        responseSorting: PropTypes.func,
        requestSorting: PropTypes.func,
        todosResponse: PropTypes.func,
        toggleTodoRequest: PropTypes.func,
    };

    state = {
        isShowingModal: false,
    };

    componentDidMount() {
        todos.child("todos").on("value", (snap) => {
            this.props.todosResponse(snap.val());
        });

        sorting.on("value", (snap) => {
            this.props.responseSorting(snap.val());
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.sorting !== this.props.sorting) {

            if (this.sortableList) {
                this.sortableList.destroy()
            }

            this.initSortableList();
        }
    }

    handleClick = () => this.setState({isShowingModal: true});

    handleClose = () => this.setState({isShowingModal: false});

    handleToggleTodo = (todoId) => {
        this.props.toggleTodoRequest(todoId);
    };

    handleDeleteTodo = (todoId) => {
        this.props.deleteTodoRequest(todoId);
    };

    handleBeginEditTodo = (todoId) => {
        this.props.beginEditTodo(todoId);

        this.handleClick();
    };

    initSortableList = () => {
        this.sortableList = Sortable.create(
            this.todoList,
            {
                animation: 150,
                store: {
                    get: () => {
                        return this.props.sorting || [];
                    },
                    set: (sortable) => {
                        const sorting = sortable.toArray();

                        this.props.requestSorting(sorting)
                    }
                }
            }
        );
    };

    render() {
        const {editingTodo, todos} = this.props;

        return (
            <div ref={(div) => this.todoList = div}>
                {
                    todos.map(({id, text, completed}) => (
                            <Todo
                                key={id}
                                id={id}
                                text={text}
                                completed={completed}
                                onToggle={this.handleToggleTodo}
                                onDelete={this.handleDeleteTodo}
                                onBeginEdit={this.handleBeginEditTodo}
                            />
                        )
                    )
                }
                {
                    this.state.isShowingModal &&
                    <ModalContainer onClose={this.handleClose}>
                        <ModalDialog onClose={this.handleClose}>
                            {
                                editingTodo && (
                                    <TodoEditor onClose={this.handleClose}/>
                                )
                            }
                        </ModalDialog>
                    </ModalContainer>
                }
            </div>
        );
    }
}