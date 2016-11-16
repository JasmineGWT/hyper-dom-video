var clone = require('clone')

var reducer = (state, action) => {
  const newState = clone(state)

  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {name: action.name, description: action.payload, done: false}
      newState.todos.push(newTodo)
      return newState
    case "TOGGLE_DONE":
      newState.todos[action.payload].done = !newState.todos[action.payload].done
      return newState
    case "TOGGLE_DETAILS":
      newState.todos[action.payload].detail = !newState.todos[action.payload].detail
      return newState
    default:
      return newState

  }
}

module.exports = reducer



// what type of actions do we have?
// if it's ass todo, add the new todo to the state
// return the new state


// (state, action) => newState
// pure functions
// newState is not the same object as state
// no state effects => no, console log, api calls, io etc

// what does an action look ilke?
// {
//   type: 'ADD_TODO', //mandatory
//   payload: 'eat cheese' //optional
// }
//
// function reducer(state, action) {
//
// }
