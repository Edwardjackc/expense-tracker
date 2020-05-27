// let todo = ['walk dog', 'clean kitchen', 'buy food'
// ]
// covert array to array of objects -> test, completed 
// create function to remove a todo by text value.

const todo = [{
  text: 'walk dog',
  completed: true
}, {
  text: 'clean kitchen',
  completed: true
}, { 
  text: 'buy food',
  completed: false
}, {
  text: 'complete course',
  complete: false 
}]



const getThingsToDo = function (todo,query) { 
  return todo.filter(function(todo,index) {
    return !todo.completed
  })
}


const sortTodo = function (todo) {
  todo.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}


// console.log(getThingsToDo(todo))

sortTodo(todo)
console.log(todo)


// const deleteToDo = function (todo, todoText) {
//   const index = todo.findIndex =(function (todo) {
//     return todo.text.toLowerCase() === todoText.toLowerCase()
//   })
//   if (index > -1) { 
//     todo.splice(index, 1)
//   }
// }



// deleteToDo(todo,'buy food')
// console.log(todo)