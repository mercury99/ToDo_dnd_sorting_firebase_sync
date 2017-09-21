import { BEGIN_EDIT_TODO } from "../actions";

export default function editedTodo(state = null, action) {
    switch (action.type) {
        case BEGIN_EDIT_TODO: {
            return action.id;
        }

        default: {
            return state;
        }
    }
};