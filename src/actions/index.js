export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const TODOS_RESPONSE = "TODOS_RESPONSE";
export const TOGGLE_TODO_REQUEST = "TOGGLE_TODO_REQUEST";
export const SET_FILTER = "SET_FILTER";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const BEGIN_EDIT_TODO = "BEGIN_EDIT_TODO";
export const EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST";
export const REQUEST_SORTING = "REQUEST_SORTING";
export const RESPONSE_SORTING = "RESPONSE_SORTING";

export const addTodoRequest = (text) => ({
    type: ADD_TODO_REQUEST,
    id: Date.now().toString(),
    text
});
export const todosResponse = (todos) => ({
    type: TODOS_RESPONSE,
    todos
});

export const toggleTodoRequest = (id) => ({
    type: TOGGLE_TODO_REQUEST,
    id
});

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
});

export const deleteTodoRequest = (id) => ({
    type: DELETE_TODO_REQUEST,
    id
});

export const beginEditTodo = (id) => ({
   type: BEGIN_EDIT_TODO,
   id
});

export const editTodoRequest = (text) => ({
   type: EDIT_TODO_REQUEST,
   text,
});

export const requestSorting = (sorting) => ({
    type: REQUEST_SORTING,
    sorting,
});
export const responseSorting = (sorting) => ({
    type: RESPONSE_SORTING,
    sorting,
});

