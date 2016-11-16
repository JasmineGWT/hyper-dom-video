const h = require('hyperscript')

module.exports = Todos

function Todos (listOfTodos, dispatch) {
  return h('div.cards', listOfTodos.map( (todo, index) => {
    return Todo(todo, index, dispatch)
  }))
}

function Todo (todoItem, index, dispatch) {
  const { name, description, done, detail } = todoItem
  const customClass = detail ? 'showingDetail' : ''

  const text = detail ? `${name} ${description}` : `${name}`
  return h('div',
    { id: 'card',
      className: customClass,
      onclick: () => dispatch({type: 'TOGGLE_DETAILS', payload: index})
    },
    text
    )
}
