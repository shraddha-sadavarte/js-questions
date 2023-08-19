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

//Que.11 Write a js function which accepts an argument and returns
//the type. NOTE: THERE ARE SIX POSSIBLE VALUES THAT TYPEOF RETURNS: 
//OBJECT, BOOLEAN, FUNCTION, NUMBER, STRING, AND UNDEFINED.
function typeteller(elm){
    return typeof elm;
}

console.log(typeteller([]));
console.log(typeteller(12));
console.log(typeteller("asc"));
console.log(typeteller(true));
console.log(typeteller(undefined));
console.log(typeteller(function(){}));

//LOOP QUESTIONS
//===================

//  Que.12 Loop an array and add all numbers of it
var arr = [1,2,3,4,5];
var sum = 0;

arr.forEach(function(elem){
    sum = sum + elem;
})

console.log("Sum of array elements is: "+sum);

//Que.13 In an array of numbers and strings, only add those members
//which are not strings
var arr1 = [1,2,"34",34,"12","24",3,5,"sduif"];
var sum1 = 0;

arr1.forEach(function(elem){
    if(typeof elem == 'number'){
        sum1 = sum1 + elem;
    }
})

console.log(sum1);

//Que.14 Loop an array of objects and remove all objects which don`t have 
//gender`s value male
var array1 = [
    { name: 'shraddha', gender: 'female' },
    { name: 'Yashraj', gender: 'male' },
    { name: 'sanket', gender: 'male' },
    { name: 'ankita', gender: 'female' },
    { name: 'muskan', gender: 'female' }
]

//FIRST WAY
// var newArray = array1.filter(function (elem){
//     return elem.gender === 'male';
// })

// console.log(newArray);

//SECOND WAY
//pehle non-male bande gino
var count = 0;
array1.forEach(function(elem){
    if(elem.gender !== 'male'){
        count++;
    }
})
//phir ek non-male bande ko hatane ka code karo
//aur fir us code ko total non-male times chala do
for (var i=1; i<=count; i++){
    for(var j=0; j<array1.length; j++){
        if(array1[j].gender !== "male"){
            array1.splice(j,1);
        }
    }
}

console.log(array1);

//ARRAYS QUESTIONS
//=====================

//Que.15 Write a js function to clone an array
function cloneArr(arr2){
    //first way using spread operator

   /*return [...arr2];*/

    //second way using foreach loop

    /*var newarr = [];
    arr2.forEach(function(e){
        newarr.push(e);
    })

    return newarr;*/

    //third way using map function

    return arr2.map(function (e){
        return e;
    })

}

console.log(cloneArr([13,24,343,45]));
// console.log(cloneArr([1,2,3,4]));

//Que.16 Write a js function to get the first element of an array
//passing a paramater 'n' will return the first 'n' elements of the array
function retrieve(arr3, n = 1){
    if(n<arr3.length){
        for(var i=0; i<n; i++){
            console.log(arr3[i])
        }
    }
    else{
        console.log(n+ " to elements hi nhi hai")
    }
 }

retrieve([1,2,3,4,45], 3);

//Que.17 Write a js function to get the last element of an array
//passing a paramater 'n' will return the last 'n' elements of the array
function getLast(arr4, n1=1){
    if(n1 < arr4.length){
        for(var i=0; i<n1; i++){
            console.log(arr4[arr4.length-1-i]);
        }
    }
    else{
        console.log(n1+" to elements hi nahi hai");
    }
}

getLast([2134,,7576,3213,25,4756,3,22,23], 1);

//Que.18 Write a js program to find the most frequent item of an array
function freq(frar){
    var frec= {};
    frar.forEach(function(elem4){
        if(frec.hasOwnProperty(elem4)){
            freq[elem4]++;
        }
        else{
            frec[elem4] = 1;
        }
    })

    var ans1 = Object.keys(freq).reduce(function(acc, next){
        return freq[acc] > freq[next] ? acc : next;
    })
    console.log(ans1);
}

freq([1,2,34,1,3,1]);

//Que.19 Write a js program to shuffle an array
//shuffle means print values randomly
function shuffleKaro(y){
    //sabse pehle kitna area shuffle area hain
    var totalShuffleArea = y.length;

    //ek random number nikalo array ke total length ke barabar
    while(totalShuffleArea > 0){
        totalShuffleArea--;
        var indexTobeExchanged = Math.floor(Math.random() * totalShuffleArea);
        var temp = y[totalShuffleArea];
        y[totalShuffleArea] = y[indexTobeExchanged];
        y[indexTobeExchanged] = temp;
    }

    return y;

}

console.log(shuffleKaro([1,2,3,4,5,6]));

//Que.20 Write a js program to compute the union of 2 arrays
//sample data: 
//console.log(union([1,2,3], [45,56,7,3,2]));
//[1,2,3,45,56,7]
function union(s1, y1){
   return [...new Set (s1.concat(y1)) ];
}

union([1,2,3,4],[3,4,6,7]);