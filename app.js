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

var b = prompt("Enter a number");

if (b < 0) {
    // b = -b; 
      b = b * -1         // Calculate the absolute value and assign it back to b
    console.log(b);
} else if (b > 0) {
    console.log(b);
} else {
    console.log("Please enter a valid number");
}