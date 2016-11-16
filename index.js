const morph = require('morphdom')
const redux = require('redux')
const Todos = require('./Todos')
const reducer = require('./reducer')

let initialState = {
  todos: [{
    name: 'Go home',
    description: "You're drunk, go home!",
    done: false,
    detail: false
  }, {
    name: 'Do not choke on your own vomit!',
    description: 'Seriously ffs Jasmine',
    done: false,
    detail: false
  }]
}

const store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

const updateView = () => {
  const state = store.getState()
  const newTodos = Todos(state.todos, dispatch)
  morph(todos, newTodos)
}

store.subscribe(updateView)

const todos = Todos(initialState.todos, dispatch)
document.body.appendChild(todos)

updateView()
