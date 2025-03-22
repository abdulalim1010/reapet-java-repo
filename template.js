/* const fname = "abdul"
const lname = "alim"
console.log(fname + lname)
console.log(`i am a boy of budluch ${fname} ${lname} in the same`) */
//arrow function
/* const sum = (a, b) => a + b;
console.log(sum(2, 3)) */
/* const addition = (a, b, c) => {
  const result = a + b + c;
  return result
  
}
const add = addition(4, 5, 6);
console.log(add) */
 const sum = (...rest) => {
  console.log(rest);
} 
   sum(1, 2, 4,6,8);

/* const sum = (...rest) => {
  console.log(rest);  // Logs the arguments passed to the function
};

sum(1, 2, 4);  */