const test = require('tape')
var freeze = require('deep-freeze')

const reducer = require('../reducer')

test('TOGGLE_DONE', function(t) {
  //arrange
  const state = {
    todos: [{
      description: 'buy eggs',
      done: false
    }, {
      description: 'invoice traject',
      done: false
    }]
  }

  freeze(state)

  const expectedState = {
    todos: [{
      description: 'buy eggs',
      done: true
    }, {
      description: 'invoice traject',
      done: false
    }]
  }
  const action = {type: 'TOGGLE_DONE', payload: 0}
  //act
  const newState = reducer(state, action)
  //assert
  t.deepEqual(newState, expectedState)
  t.end()
})

test('ADD_TODO', function(t) {
  //arrange
  const state = {
    todos: [{
      name: 'Go home',
      description: "You're drunk, go home!",
      done: false
    }, {
      name: 'Do not choke on your own vomit!',
      description: 'Seriously ffs Jasmine',
      done: false
    }]
  }

  freeze(state)

  const expectedState = {
    todos: [{
      name: 'Go home',
      description: "You're drunk, go home!",
      done: false
    }, {
      name: 'Do not choke on your own vomit!',
      description: 'Seriously ffs Jasmine',
      done: false
    }, {
      name: 'Do these things!!!!!',
      description: 'Take panadol, drink water and try to get some sleep!!!',
      done: false
    }]
  }
  const action = {type: 'ADD_TODO', name: 'Do these things!!!!!', payload: 'Take panadol, drink water and try to get some sleep!!!'}
  //act
  const newState = reducer(state, action)
  //assert
  t.deepEqual(newState, expectedState)
  t.end()
})
