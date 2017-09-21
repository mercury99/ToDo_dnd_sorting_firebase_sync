import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { setFilter } from '../actions/index';

import styles from './Filter.less';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
});

const mapDisplatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilter(ownProps.filter))
});

@connect(mapStateToProps, mapDisplatchToProps)
export default class Filter extends Component {
    static propTypes = {
        active: PropTypes.bool,
        onClick: PropTypes.func,
        children: PropTypes.any,
    };

    render() {
        const {active, children, onClick} = this.props;

        return (
            active
                ? <span className={styles.active}>{children}</span>
                : <span className={styles.root} onClick={onClick}>{children}</span>
        );
    }
}
