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