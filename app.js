//ARRAY QUESTIONS
//====================

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

//FUNCTIONS QUESTIONS
//==============================

//Que.6 Write a js function that reverse a number
function reverseKaro(num){
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseKaro(12));
console.log(reverseKaro(123452573));

//reverse a number using loop
function reverseNum(elem){
    var rev = 0
    while(elem>0){
        var reminder = elem%10;
        rev = rev*10+reminder;
        elem = Math.floor( elem/10 );
    }
    return rev;
}

console.log(reverseNum(345678));

//Que.7 Write a js function that checks whether a passed string is palindrome or not
function checkPalindrome(str){
    var revStr = str.split("").reverse().join("");
    if(revStr == str){
        return str+" is palindrome";
    }
    else{
        return str+" is not palindrome";
    }
}

console.log(checkPalindrome("mom"));
console.log(checkPalindrome("siso"));

//Que.8 Write a js function that returns a passed string with letters in alphabetical order
function returnSorted(str){
    return str.split("").sort().join("");
}

console.log(returnSorted("shraddha"));

//Que.9 Write a js function that accepts a string as a parameter
//and converts the first letter of each word of the string in uppercase
function capitalize(str){
   var allwords =  str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1);
    })

     return allwords.join(" ");
}

console.log(capitalize("Shraddha is an engineering student"));

//Que.10 Write a js function to get the number of occurences 
//of each letter in specified string
function occ(str){
    var occurences = {};

    str.split("").forEach(function(elem){
        if(occurences.hasOwnProperty(elem) == false){
            occurences[elem] = 1;
        }
        else{
            occurences[elem]++;
        }
    })

    return occurences;
}

console.log(occ("yashraj"));


