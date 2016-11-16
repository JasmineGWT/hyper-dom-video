const h = require('hyperscript')

module.exports = Todos

function Todos (listOfTodos, dispatch) {
  return h('div.app', {}, [
    h('h1.title', {}, "WAFFLE MOFOs"),
    h('div.cards', listOfTodos.map( (todo, index) => {
      return Todo(todo, index, dispatch)
    }))
  ])
}

function Todo (todoItem, index, dispatch) {
  const { name, description, done, detail } = todoItem
  let customClass = detail ? 'showingDetail' : ''
  customClass = done ? 'done' : customClass

  const text = detail ? `${name} ${description}` : `${name}`
  return h('div',
    { id: 'card',
      className: customClass,
      onclick: () => dispatch({type: 'TOGGLE_DETAILS', payload: index}),
      ondblclick: () => dispatch({type: 'TOGGLE_DONE', payload: index})
    },
    text
    )
}
