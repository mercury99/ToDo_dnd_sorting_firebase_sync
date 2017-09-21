import {
    TODOS_RESPONSE,
} from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case TODOS_RESPONSE: {
            return Object.values(action.todos);
        }

        default: {
            return state;
        }
    }
};

export default todos;