import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './InputWithButton.less';

export default class InputWithButton extends Component {
    static propTypes = {
        value: PropTypes.string,
        children: PropTypes.element,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
        onKeyDown: PropTypes.func,
        onClick: PropTypes.func,
    };

    render() {
        const {
            value,
            children,
            onChange,
            onKeyDown,
            onClick,
            placeholder = "",
        } =this.props;

        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <div className={styles.button} onClick={onClick}>
                    {children}
                </div>
            </div>
        )
    }
}