import React, { Component } from "react";
import "normalize.css";

import AddTodo from "../containers/AddTodo";
import "../assets/main.css";
import styles from "./App.less";
import TodoList from "../containers/TodoList";
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>To do</h2>

                    <div className={styles.app}>
                        <AddTodo />
                        <TodoList/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}