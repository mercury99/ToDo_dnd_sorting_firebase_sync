import React, { Component } from 'react';
import PropTypes from "prop-types";
import MdDelete from "react-icons/lib/md/delete";
import MdEdit from "react-icons/lib/md/edit";

import styles from './Todo.less';

export default class Todo extends Component {
    static propTypes = {
        id: PropTypes.string,
        text: PropTypes.string,
        completed: PropTypes.bool,
    };

    handleToggle = () => {
        const {id, onToggle} = this.props;

        onToggle(id);
    };

    handleDelete = () => {
        const {id, onDelete} = this.props;

        onDelete(id);
    };

    handleBeginEdit = () => {
        const {id, onBeginEdit} = this.props;

        onBeginEdit(id);
    };

    render() {
        const {text, completed, id} = this.props;

        return (
            <div className={styles.wrapper} data-id={id}>
                <div
                    className={completed ? styles.completed : styles.root}
                    onClick={this.handleToggle}
                >
                    {text}
                </div>
                <div className={styles.icons}>
                    {
                        !completed && (
                            <div className={styles.edit} onClick={this.handleBeginEdit}>
                                <MdEdit/>
                            </div>
                        )
                    }
                    <div>
                        <MdDelete className={styles.delete} onClick={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}
