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

var num = 6;
var p = parseInt(prompt("Write a number between 1 to 10"));


if (!isNaN(p)) {
    if (p === num) {
        alert("Congrats");
    
    } else {
        alert("Try again");
        
    }
} else {
    alert("Write a number!");
}
