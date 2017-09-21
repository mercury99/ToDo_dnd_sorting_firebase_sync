import todos from "../todos";
import { TODOS_RESPONSE } from "../../actions";

const todosResponse = {
    "1": {
        id: "1",
        text: "one",
        completed: false,
    },
    "2": {
        id: "2",
        text: "tow",
        completed: false,
    }
};

const state = [
    {
        id: "1",
        text: "one",
        completed: false,
    },
    {
        id: "2",
        text: "tow",
        completed: false,
    }
];

const initialState = [
    {
        id: "1",
        text: "one",
        completed: false,
    }
];

describe('Todos reducer', () => {

    test('return initial state', () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    test('should correct handle TODOS_RESPONSE if state empty', () => {
        expect(todos([], {type: TODOS_RESPONSE, todos: todosResponse})).toEqual(state);
    });

    test('should correct handle TODOS_RESPONSE if state not empty', () => {
        expect(todos(initialState, {type: TODOS_RESPONSE, todos: todosResponse})).toEqual(state);
    });
});