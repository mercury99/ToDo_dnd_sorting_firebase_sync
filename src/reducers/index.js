import { combineReducers } from "redux";

import filter from "./filter";
import todos from "./todos";
import editedTodo from "./editedTodo";
import sorting from "./sorting";

export default combineReducers({
    filter,
    todos,
    editedTodo,
    sorting,
});