// 1 -->
// function parent() {
//     console.log("1", hoisted);
//     var hoisted = "I’m a variable";
//     console.log("2", hoisted);
//     function hoisted() {
//       return "I'm a function";
//     }
//     console.log("3", hoisted);
//   }
  
//   parent();

















// 2 -->

// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined














// 3 -->
// output > 
// false
// false
// works
// works 








// 5-->
// output > Uncaught Reference Error: y is not defined















// 6 -->
// The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object".







// 7 -->
// When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.
// The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
// This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.

