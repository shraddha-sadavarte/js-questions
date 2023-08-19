//Que.1 Given a string, reverse each word in the sentence
var str = "sare jaha se accha hindustan hamara";
var saveStr = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

console.log(saveStr.join(" ")); //returns: eras ahaj es ahcca natsudnih aramah

//Que.2 how to check if an object is an array or not
function checkArray(elem){
   return Array.isArray(elem);
}

console.log(checkArray([]));  //true
console.log(checkArray({}));  //false

//Que.3 How to empty an array in javascript
//do not reset it to an array and do not loop though pop each value
var arr = [1,23,43,5,6];

//arr.length = 0 it blanks the array

//Que.4 How would you check if a number is an integer
//we can use isInteger(), but que is we cant use it 
var a = 12;

if(a % 1 == 0){
    console.log("Number is an integer")
}
else{
    console.log("Number is not integer")
}

//Que.5 Make this work: 
//duplicate([1,2,3,4,5]);  like (1,2,3,4,5,1,2,3,4,5)
function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5]));
