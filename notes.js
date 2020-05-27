const notes = [ {
  title:'My next trip',
  body: 'I would like to go to Spain'
}, {
  title:'Habits to work on',
  body: 'Eating a bit better.'
}, {
  title: 'Office modifications',
  body:'Get a seat'
}]

// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[notes.length -2])

// notes[2] = 'This is the new now 3!'

// console.log(notes.length)

// Counting ... 1 
// for ( let count = 0; count < notes.length; count++) { 
//   console.log(count)
// }

// for (l1et count = 0; count <= notes.length; count--) { 
//   console.log(notes[count])
// }
// console.log(notes)

// console.log()

// const index = notes.findIndex(function (notes, index) {
//   return notes.title === 'Habits to work on'
// })
// console.log(index)



// const findNote = function (notes, noteTitle) { 
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }


// const findNote = function (notes, noteTitle) { 
//   return notes.find(function (note, index) {
//     return  note.title === noteTitle
//   })
// }
const findNotes = function (notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toUpperCase().includes(query.toUpperCase())
    const isBodyMatch = note.body.toUpperCase().includes(query.toUpperCase())
    return isTitleMatch || isBodyMatch
  })
}


const sortNotes = function (notes) { 
  notes.sort(function (a, b) {
    if (a.title.toUpperCase() < b.title.toUpperCase()) { 
      return -1 
    }else if (b.title.toUpperCase() < a.title.toUpperCase()) { 
      return 1 
    }else {
      return 0
    }
  })
}

sortNotes(notes)
console.log(notes)

// console.log(findNotes(notes,'habit'))

// show to do that have yet to be completed.