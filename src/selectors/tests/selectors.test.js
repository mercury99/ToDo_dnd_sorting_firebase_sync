import { getEditingTodo, getVisibleTodos } from "../index";

const todos = [
    {
        completed: true,
        id: '1505999422018',
        text: '2'
    },
    {
        completed: false,
        id: '1506018747417',
        text: '444567'
    },
    {
        completed: false,
        id: '1505999422019',
        text: '3'
    },
];

const state = (filter) => ({
    filter,
    todos,
    editedTodo: "1505999422019",
});

describe('getVisibleTodos selector', () => {

    test('return all todos with filter SHOW_ALL', () => {
        expect(getVisibleTodos(state('SHOW_ALL'))).toEqual(todos);
    });

    test('return only completed todos with filter SHOW_COMPLETED', () => {
        expect(getVisibleTodos(state('SHOW_COMPLETED'))).toEqual([
            {
                completed: true,
                id: '1505999422018',
                text: '2'
            }
        ]);
    });

    test('return only new todos with filter SHOW_NEW', () => {
        expect(getVisibleTodos(state('SHOW_NEW'))).toEqual([
            {
                completed: false,
                id: '1506018747417',
                text: '444567'
            },
            {
                completed: false,
                id: '1505999422019',
                text: '3'
            },
        ]);
    });
});

describe('getEditingTodo selector', () => {

    test('corrected select todo' , () => {
        expect(getEditingTodo(state())).toEqual({
            completed: false,
            id: '1505999422019',
            text: '3'
        },);
    });
});