//JavaScript program to display 'Hello, World!' on the console.
console.log("Hello World!");

//JavaScript program to add two numbers and display the result.
console.log(10+20);

//JavaScript program to check whether a number is even or odd
let b = alert("Enter the number to check even or odd");
if(b%2==0){
    console.log("The nuber is even");
}else{
    console.log("The nuber is odd");
}

//JavaScript program to find the largest of two numbers.
const a=10;
const c=21;
if(a>c){
    console.log("A is greater");
}else{
    console.log("B is greater");
}

//JavaScript program to calculate the square of a number.

const sqr = alert("Enter the number to square");
console.log(`The Square of ${sqr} is ${sqr * sqr}`);

// JavaScript program to swap two numbers using a temporary variable
let d=2;
let n=3;
let e=d;
d=n;
n=e;
console.log('d '+d+' n '+n)

//JavaScript program to print the multiplication table of a given number.
let fact=5;


if(fact==0){
    console.log("factorial of fact is "+1);
    
}else{
   for(i=fact-1;i>0;i--){
       fact=fact*i;
   }
   console.log(fact)
}

//JavaScript program to reverse a number (e.g., 123 → 321).

let num="123";
 let reversed = 0;

  while (num > 0) {
    let digit = num % 10;           // Get last digit
    reversed = reversed * 10 + digit; // Add digit to reversed
    num = Math.floor(num / 10);   }
    console.log(reversed);

// JavaScript program to check whether a year is a leap year or not
    function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} is a Leap Year`;
  } else {
    return `${year} is NOT a Leap Year`;
  }
}

console.log(isLeapYear(2020)); 
