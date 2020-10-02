export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log(action)

  switch (action.type){
    case ("ADD_TODO"):
      console.log([...state.todos,action.payload.text])
      return {todos: [...state.todos,action.payload.text]}
    default:
      return state
  }
}