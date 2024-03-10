// Chapter 09-11
// Q 01

// var city = prompt("Enter the name of your city:")

// if(city==="Karachi"){
//   document.write("<h1>Welocme to the city of lights.</h1>")
// }


// Q 02

// var gender = prompt("Enter your gender")

// if(gender==="male"){
//   document.write("<h1>Good Morning Sir.</h1>")
// }
// else if(gender==="female") {
//   document.write("<h1>Good Morning Ma'am.</h1>");
// }


// Q 03

// var color = prompt("Enter your color")

// if(color==="red"){
//   document.write("<h1>Must stop.</h1>")
// }
// else if(color==="yellow") {
//   document.write("<h1>Ready to move.</h1>");
// }
// else if(color==="green") {
//   document.write("<h1>Move now.</h1>");
// }

// Q 04

// var fuel = prompt("Enter your remaining fuel in your car (in litres)")

// if(fuel<"0.25"){
//   document.write("<h1>Please refill the fuel in your car.</h1>")
// }

// Q 05

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if(false){
//   alert("False")
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Q 06

// var subject1 = +prompt("Enter the marks obtained in subject 1:")
// var subject2 = +prompt("Enter the marks obtained in subject 2:")
// var subject3 = +prompt("Enter the marks obtained in subject 3:")
// var totalMarks = +prompt("Enter total marks")

// var totalObtainedMarks = subject1+subject2+subject3;
// var percentage = (totalObtainedMarks*100) / totalMarks;

// var grade;
// var remarks;
// if(percentage >=80){
//   grade = "A+"
//   remarks = "Excellent"
// }
// else if(percentage >=70){
//   grade = "A"
//   remarks = "Good"
// }
// else if(percentage >=60){
//   grade = "B"
//   remarks = "You need to improve"
// }
// else if(percentage <60){
//   grade = "Fail"
//   remarks = "Sorry"
// }
// document.write("<h1>Your Result</h1>")
// document.write("Total Marks: " + totalMarks + "<br>")
// document.write("Marks Obtained: " + totalObtainedMarks + "<br>")
// document.write("Percentage: " + percentage + "%" + "<br>")
// document.write("Grade: " + grade + "<br>")
// document.write("Remarks: " + remarks)

// Q 07

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = +prompt("Guess the secret number between (1 and 10):")

// if(userGuess === secretNumber){
//   alert("Bingo! Correct Answer.")
// }
// else if(userGuess === secretNumber + 1 || userGuess === secretNumber -1){
//   alert("Close enough to the correct answer.")
// }
// else{
//   alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".")
// }

// Q 08

// var num = +prompt("Enter your number:")
// if(num%3 === 0){
//   alert(num + " is divisible by 3")
// }
// else{
//   alert(num + " is not divisible by 3")
// }
 
// Q 09

// var num = +prompt("Enter your number:")
// if(num%2 === 0){
//   alert(num + " is an even number")
// }
// else{
//   alert(num + " is an odd number")
// }

// Q 10

// var temperature = +prompt("Enter the Temperature")

// if(temperature >40){
//  alert("It is too hot outside.")
// }
// else if(temperature >30){
//   alert("The Weather today is Normal.")
// }
// else if(temperature >20){
//   alert("Today’s Weather is cool.")
// }
// else if(temperature >10){
//   alert("OMG! Today’s weather is so Cool.")
// }


// Q 11

// var firstNumber = +prompt("Enter your first number:")
// var secondNumber = +prompt("Enter your second number:")
// var operation = prompt("+, -, *, /, %")
// var result;


// if(operation === "+"){
//   result = firstNumber + secondNumber;
// }
// else if(operation === "-"){
//   result = firstNumber - secondNumber;
// }
// else if(operation === "*"){
//   result = firstNumber * secondNumber;
// }
// else if(operation === "/"){
//   result = firstNumber / secondNumber;
// }
// else if(operation === "%"){
//   result = firstNumber % secondNumber;
  
// }
// else{
//   result = "Invalid operation"
// }
// alert("Result:" + result);


// Chapter 12-13

// Q 01


// var userInput = prompt("Enter a character:");

// if(!isNaN(userInput)){
//     alert("The input " + userInput + " is a number.")
// }

// else if (userInput >= 'A' && userInput <= 'Z'){
//     alert("The input " + userInput + " is a uppercase letter.")
// }

// else if (userInput >= 'a' && userInput <= 'z'){
//     alert("The input " + userInput + " is a lowercase letter.")
// }

// else{
//     alert("The input " + userInput + " is neither a number nor a letter.")
// }

// Q 02

// var firstNumber = +prompt("Enter your first number:")
// var secondNumber = +prompt("Enter your second number:")

// if (firstNumber>secondNumber){
//     alert(firstNumber + " is larger than " + secondNumber)
// }
// else if (firstNumber<secondNumber){
//     alert(secondNumber + " is larger than " + firstNumber)
// }
// else if (firstNumber=secondNumber){
//     alert(firstNumber + " is equal to " + secondNumber)
// }

// Q 03

// var number = +prompt("Enter a number:")

// if (number>0){
//     alert(number + " is a positive number")
// }
// else if (number<0){
//     alert(number + " is a negative number")
// }
// else{
//     alert(number + " is a zero")
// }

// Q 04

// var character = prompt("Enter a Character:")

// if(character.length === 1){
//     if(character === 'a' || character === 'e' || character === 'i' || character === 'o' ||character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U')
//     alert(true);
// else{
//     alert(false)
// }
// }

// Q 05

// var correctPassword = "rafay123";

// var enterPassword = prompt("Enter your password");

// if(enterPassword === ""){
//     alert("Please enter your password")
// }
// else if(enterPassword===correctPassword){
//     alert("Correct! The password you entered matches the original password.")
// }
// else{
//     alert("Incorrect password")
// }

// Q 06

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// Q 07

// var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):")

// if(time>=0 && time < 1200){
//     alert("Good Morning!")
// }
// else if(time>=1200 && time < 1700){
//     alert("Good Afternoon!")
// }
// else if(time>=1700 && time < 2100){
//     alert("Good Evening!")
// }
// else if(time>=2100 && time < 2359){
//     alert("Good Night!")
// }
// else{
//     alert("Invalid time input!")
// }
