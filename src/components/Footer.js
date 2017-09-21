import React, { Component } from 'react';

import Filter from '../containers/Filter';
import styles from './Footer.less';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Filter filter="SHOW_ALL">All</Filter>
                <Filter filter="SHOW_NEW">New</Filter>
                <Filter filter="SHOW_COMPLETED">Completed</Filter>
            </div>
        );
    }
}