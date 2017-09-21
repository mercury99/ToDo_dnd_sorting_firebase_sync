export const getVisibleTodos = (state) => {
    const {filter, todos} = state;

    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);

        case 'SHOW_NEW':
            return todos.filter(todo => !todo.completed);
    }
};

export const getEditingTodo = (state) => state.todos.find((todo) => todo.id === state.editedTodo);