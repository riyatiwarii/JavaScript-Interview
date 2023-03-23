// function isPalindrome(input){
//     const arr = input.split("").reverse().join("")
//     return arr === input
// }

// console.log(isPalindrome("nitin"));
// console.log(isPalindrome("riya"));

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum (x, y){
//     if(y){
//         return x + y
//     } else {
//         return function (y){
//             return x + y
//         }
//     }
// }

// console.log(sum(2, 20));
// console.log(sum(2)(20));

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
//   }

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', 
//     function(wrap){ 
//         return function () {
//             console.log(wrap);
//         }
//     }(i)
//     );
//     document.body.appendChild(btn);
//   }

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     (
//         (wrap) => {
//             btn.addEventListener('click', () => {
//                 console.log(wrap);
//             })
//         }
//     )(i)
//     document.body.appendChild(btn);
//   }

// var arr1 = "john".split('');
// ['j','o','h','n']
// var arr2 = arr1.reverse();
// ['n','h','o','j']
// var arr3 = "jones".split('');
// ['j','o','n','e','s']
// arr2.push(arr3);
// ['n','h','o','j', ['j','o','n','e','s']]

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// console.log(1 +  "2" + "2")
// console.log(1 +  +"2" + "2")
// console.log(1 +  -"1" + "2")
// console.log(+"1" +  "1" + "2")
// console.log( "A" - "B" + "2")
// console.log( "A" - "B" + 2)

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("1 || 2 = "+(2 || 1));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// console.log((function f(n){
//     return ((n > 1) ? n * f(n-1) : n)
// })(4));

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

