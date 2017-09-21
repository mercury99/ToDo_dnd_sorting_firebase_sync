import {
    REQUEST_SORTING,
    ADD_TODO_REQUEST,
    TOGGLE_TODO_REQUEST,
    DELETE_TODO_REQUEST,
    EDIT_TODO_REQUEST
} from "../actions";
import {sorting, todos} from "../config";

export const firebaseMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case REQUEST_SORTING: {
            sorting.set(action.sorting);
            break;
        }

        case ADD_TODO_REQUEST: {
            const {id, text} = action;
            const currentSorting = store.getState().sorting;

            todos.child(`todos/${id}`).set({
                text,
                id,
                completed: false
            });

            sorting.set([...currentSorting, id]);
            break;
        }

        case TOGGLE_TODO_REQUEST: {
            const {id} = action;

            const completedStatus = store.getState().todos.find((todo) => todo.id === id).completed;

            todos.child(`todos/${id}/completed`).set(!completedStatus);
            break;
        }

        case DELETE_TODO_REQUEST: {
            const {id} = action;
            const currentSorting = store.getState().sorting;

            todos.child("todos").child(id).remove();

            sorting.set(currentSorting.filter((todoId) => todoId !== id));
            break;
        }

        case EDIT_TODO_REQUEST: {
            const {text} = action;

            const idTodoEdited = store.getState().editedTodo;

            todos.child(`todos/${idTodoEdited}/text`).set(text);
            break;
        }

        default: {
            return next(action);
        }
    }
};