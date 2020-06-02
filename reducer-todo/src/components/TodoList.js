import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const {state, dispatch } = props;
// console.log(state);
    return(
        <div>
            {state.todos.map(item => (
                <Todo key={item.id} item={item} state={state} dispatch={dispatch}/>
            ))}
        </div>
    )
}
export default TodoList;