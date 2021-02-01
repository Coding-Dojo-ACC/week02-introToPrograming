// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function sum_add_5000(){
    var sum = 0;
    for (i = 1; i <= 5000; i++) { // i=1 means start at 1 i <=5000 go through all number up to and = 5000, i++ increment the value of i by 1 each time through the loop
        if (i % 2 == 1) {  // if odd set it to sum and then go to next
            sum = sum + i
        }  
    }

    return sum;
}

// for loop - go through the all numbers to accomplish the function
// modulus - conditional statement like if 0 remainder = even 1 remainder = odd

// 1
// 1+ 3
// 4+5

// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
    var i;
    var max = -Infinity;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    // Your code here

    return arrnew;
}