// let array=['1','2','3','4','5','6','7','8','9','10','11','12','13'];
// let firstTen=array.slice(0,10);
// console.log(firstTen);

// let color=['red','yellow','green'];
// let colors=['black','white','orange'];
// //let col=[].concat(color,colors);
// let col=color.push(...colors);
// // let col=colors.concat(color);
// //let col=[...color, ...colors]//spread
// console.log(col);

// function combineArray(array1, array2) {
//     return [...array1, ...array2];
//   }
  
//   const isArray = [1, 2, 3];
//   const notArray = 'random';
  
  
//   console.log(combineArray(isArray, notArray));
//  const array=[1,2,3,4,5];
//  console.log(array.indexOf(1,2));
// var state=true;
// let CleanRoom = new Promise(function(resolve,reject){
// setTimeout(function(){
//     if(state){
//         resolve("Room is cleaned");
//     }
//     else{
//          reject("not yet done");
//     }
// },5000)});
// CleanRoom.then(function(result){
//     document.write(result);
// }).catch(function(result){
//     document.write(result);
// })
var div = document.createElement('div');
document.body.appendChild(div);
div.innerText='Hello World';
div.style.cssText="color:red;font-size:2rem;display:grid;justify-content:center;align-content:center;height:100vh";

