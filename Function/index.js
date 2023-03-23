// 1-->

// function parent() {
//     var hoisted = "I am a variable";
//     function hoisted() {
//       return "I’m a function";
//     }
//     return hoisted();
//   }
  
// parent();



















// 2 -->

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }















// 3-->
// console.log({} == true);
// console.log([] == true);
// if({}) {console.log('works')};
// if([]) {console.log('works')};


















// 4 -->
// x = y;
// y = 9;
// console.log(x,y);






// 5 -->
// function check(x,y,z){
//     return (x,y,z);
//    }
   
// console.log(check(1,2,3));

















// 6 -->
// function getAge(...args) {
//     console.log(typeof args);
//   }
  
//   getAge(21);










// 7-->
// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
//   checkAge({ age: 18 });