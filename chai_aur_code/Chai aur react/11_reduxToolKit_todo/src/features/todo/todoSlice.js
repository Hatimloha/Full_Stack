import {createSlice, nanoid} from '@reduxjs/toolkit'

// slice is a combination of action creators and reducers
// nanaid is used to generate unique ids


// initial state is an object with a todo array 
const initialState = {
    todos: [{id: 1, text: 'hello world'}]
}




// state is use to access the current state
// action is used to access the payload sent with the action

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers are functions that modify the state we can make the function outside also and call them here by referencing.
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
            },                        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },     
    }

})


export const {addTodo, removeTodo} = todoSlice.actions


export default todoSlice.reducer