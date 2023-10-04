// task 1
// var input = prompt("Write num")
// console.log(input)
// console.log("round" + ":"+Math.round(input)  )
// console.log("ceil" + ":"+Math.ceil(input)  )
// console.log("floor" + ":"+Math.floor(input)  )

// task 2
// var input = -prompt("Write num")
// console.log(input)
// console.log("round" + ":"+Math.round(input)  )
// console.log("ceil" + ":"+Math.ceil(input)  )
// console.log("floor" + ":"+Math.floor(input)  )
// task 3
// var input = prompt("Write num")

// if (!isNaN(input)&& input > 0){
// console.log(input)
// console.log("round" + ":"+Math.round(input)  )
// console.log("ceil" + ":"+Math.ceil(input)  )
// console.log("floor" + ":"+Math.floor(input)  )
// }
// else{
//     console.log("Write valid input")


// }
// task 4
// var input = prompt("Write num")

// if (!isNaN(input)){
// console.log(input)
// console.log("round" + ":"+Math.round(input)  )
// console.log("ceil" + ":"+Math.ceil(input)  )
// console.log("floor" + ":"+Math.floor(input)  )
// }
// else{
//     console.log("Write valid input")


// }


// task 5

// var b = prompt("Enter a number");

// if (b < 0) {
//     // b = -b; 
//       b = b * -1         // Calculate the absolute value and assign it back to b
//     console.log(b);
// } else if (b > 0) {
//     console.log(b);
// } else {
//     console.log("Please enter a valid number");
// }

// task 6 
// var a = prompt("Write 'Random dice 1'");
// var b = prompt("Write 'Random dice 2'");

// console.log(Math.ceil(Math.random() * 6));
// console.log(Math.ceil(Math.random() * 6));

// task 7

// var toss = Math.random()
// // if is 0 it + 1
// // if 1 it + 1 = 2
// var toss2 = Math.round(toss)+1
// if (toss2 === 1 ){
//     console.log("head")
// }
// else if (toss2 === 2){
//     console.log("teal")
// }
// task 8
// var b = Math.ceil(Math.random()*100)
// console.log(b)

// task 9   
// var userInput = prompt("Please enter your weight:");
// var weightInKgs = userInput.replace(/[^\d.]/g, "");
// var weight = parseFloat(weightInKgs);

// if (!isNaN(weight)) {
//     alert("Your weight is " + weight + " kgs");
// } else {
//     alert("Invalid input. Please enter a valid weight.");
// }   
// task 10 

// var num = 6;
// var p = parseInt(prompt("Write a number between 1 to 10"));


// if (!isNaN(p)) {
//     if (p === num) {
//         alert("Congrats");
    
//     } else {
//         alert("Try again");
        
//     }
// } else {
//     alert("Write a number!");
// }



// task 11
// console.log(new Date ())
// tasl 12


// var arr = ["sun","mon" ,"tue","wed", "thu","fri","sat"]
// var b = new Date();
// var d = b.getDay()
// var c = arr[d]
// console.log(c)

// task 13
// var arr = ["sun","mon" ,"tue","wed", "thurday","fri","sat"]
// var b = new Date();
// var d = b.getDay()
// var c = arr[d]
// console.log("Today "+ "is " +c)

// task 14 
// var today = new Date("sun Oct 08 2023 13:51:10 GMT+0500 (Pakistan Standard Time)");
// console.log(today)
// var dayOfWeek = today.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//     alert("Sunday is Fun day");
// } else {
//     alert("It's not Fun day");
// }

// task 15 
// var today = new Date();
// var b = today.getDate()
// if (b <= 15  ){
//     alert("First fifteen days of the month ")
// }else{
//     alert("Last  days of the month")
// }


//  task 16 
// var n = new Date();
// console.log(n);

// var millisecondsSince1970 = n.getTime();
// console.log("Milliseconds since 1970: " + millisecondsSince1970);

// var minutesSince1970 = millisecondsSince1970 / 60000; // Corrected the division factor 60000 = 1 minute
// console.log("Minutes since 1970: " + minutesSince1970);


// task 17 
// var n = new Date ()
// var b = n.getHours()
// console.log(b)
// if (b > 0 && b < 12 )
// {
//     alert(" Its am")
// }else{
//     alert(" Its pm")
// }

// task 18
// var twenty = new Date (2020 , 11 , 31)
// console.log(twenty)


// task 19
var ramadanStartDate = new Date(2023, 5, 18); // Months are 0-based, so 5 represents June

var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDifference = currentDate - ramadanStartDate;

// Convert milliseconds to days
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert("Number of days passed since 1st Ramadan: " + daysPassed);




