// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function sum_add_5000(){
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum = sum + i
        }
    }
    return sum;
}
console.log(sum_add_5000())

// give the function instructions
// for loop = go through all the numbers to accomplish the function.
// for loop parts = 1. i= set the starting point  2. when to stop   3. i++  meaning add 1 to last item
// if statement = if i = odd number then add it to sum
// sum all odd number from 1-5000
// 1
// 1+3
// 4+5








// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
            console.log(max)
        }
    }

    return max;
    
}
console.log(findMax([100,2,24,75,60,102]))

// give instructions
// 

// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    var arrNew = arr.slice(); // manipulate the array
    var temp = arrNew[0]; // temp remove index 0
    arrNew[0] = arrNew[arrNew.length-1]; // index 0 is now what is at the last index
    arrNew[arrNew.length-1] = temp; // take what was last index and put in temp back in arrnew at index 0

    return arrNew;
}
arr = [2,4,7,9]
console.log(swap(arr))

// return [9,4,7,2]