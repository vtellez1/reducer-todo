import React from 'react';

const Todo = props => {
    
    const {state, dispatch } = props;
// console.log(props);
    return (
        <div className={`item${props.item.completed ?  ' completed' : ''}`} onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: props.item.id })}>
           <p>{props.item.task}</p>
        </div>
    )
}
export default Todo;