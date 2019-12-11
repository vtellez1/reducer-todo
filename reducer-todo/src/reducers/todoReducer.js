export const initialState = {
    todos: [
        {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
        },
        {
        task: 'Learn about everything',
        completed: false,
        id: 3892987588
        }
    ]
};

  export const reducer = (state, action) => {
      
    switch (action.type) {
        case 'ADD_TASK':
        const newTask = {
            task: action.payload,
            completed: false,
            id: Date.now()
         }; 
        return {...state,
                todos: [...state.todos, newTask]
            };
          
        case 'TOGGLE_COMPLETED':
            return{
                todos: state.todos.map(item =>{
                    if(item.id === action.payload){
                        return{...item, completed: !item.completed}
                    } else {
                        return item;
                    }
                })
            };

        case 'FILTER_COMPLETED':
            return {
                todos: state.todos.filter(item => !item.completed)
            };

      default:
        return state;
    };
  }; 