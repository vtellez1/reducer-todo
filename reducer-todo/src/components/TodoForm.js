import React, { useState }  from 'react';


const TodoForm = (props) => {
    const { state, dispatch } = props;
    const [task, setTask] = useState('');

    const handleChanges = e => {
        setTask(e.target.value);
      };
       
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TASK', payload: task})
        setTask('')
    };

    const clearComplete = e => {
        e.preventDefault();
        dispatch({ type: 'FILTER_COMPLETED', payload: state})
    }

    return(
        <div>
            <form >
                <input 
                id="todo" 
                value={task} 
                onChange={handleChanges} 
                type="text" 
                name="todo"/>
                <button onClick={handleSubmit}>Add ToDo</button>
                <button onClick={clearComplete}>Clear Completed</button>
            </form>
        </div>
    )
}
export default TodoForm;