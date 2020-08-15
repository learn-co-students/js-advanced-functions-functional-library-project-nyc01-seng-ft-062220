const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    //example: collection is a set of strings. Iteratee is 'console.log'
    each: function(collection, iteratee) {
      // Checks if collection is an array.
        //If true: copy array into newCollection
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      //This passes every member of array through some callback function 
      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx])

      //Returns the original array
      return collection
    },

    //collection = [1,2,3], iteratee = function{num}{return num ** 2} 
    map: function(collection, iteratee) {
  
      //newCollection = [1,2,3]
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      //newCollection = [1,4,9]
      for (let idx = 0; idx < newCollection.length; idx++) {
        //set the [idx] of newCollection to the value at [idx] after being passed through iteratee
        newCollection[idx] = iteratee(newCollection[idx])
      }

      return newCollection
    },

    reduce: function(collection, callback, acc) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++) {
          acc = acc + callback(newCollection[idx])
      }

      return acc
    },

    find: function(collection,predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      let foundElement = undefined

      for (let idx = 0; idx < newCollection.length; idx++) {
        if (predicate(newCollection[idx]) === true) {
          return newCollection[idx]
        }
      }

    },

    filter: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      let filterCollection = []

      for (let idx = 0; idx < newCollection.length; idx++) {
        if (predicate(newCollection[idx]) === true) {
          filterCollection.push(newCollection[idx])
        }
      }

      return filterCollection

    },

    size: function(collection) {
      Object.keys(collection).length
    },

    first: function(collection,value = 0) {
      const newCollection = []

      for (let i; i <= value; i++) {
        newCollection.push(collection[i])
      }

      return newCollection
    },

    last: function(collection, value) {
      const newValue = (value.typeOf === integer) ? value : collection.length - 1
      const newCollection = []
 
      for (let i = newValue; i < collection.length; i++) {
        newCollection.push(collection[i])
      }

      return newCollection
    },

    compact: function() {

    },

    sortBy: function() {

    },

    flatten: function() {

    },

    uniq: function() {

    },

    keys: function() {

    },

    values: function() {

    },

    functions: function() {

    }


  }
})()

fi.libraryMethod()
