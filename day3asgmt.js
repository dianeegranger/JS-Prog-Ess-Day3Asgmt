/*
Diane E. Granger
Day 3 Assignment
Write a statement to find the largest of five numbers.
Display an Alert Box to show the result.
JavaScript Programming Essentials | LetsUpgrade
Wednesday, November 9, 2022
*/

var x1 = getLargest(1, 2, 3, 4, 5);
document.getElementById("largest-result").innerHTML = 'The largest number of (1, 2, 3, 4, 5) is: ' + x1 + '<br>';

var x2 = getLargest(2, 3, 4, 5, 1);
document.getElementById("largest-result").innerHTML += 'The largest number of (2, 3, 4, 5, 1) is: ' + x2 + '<br>';

var x3 = getLargest(3, 4, 5, 1, 2);
document.getElementById("largest-result").innerHTML += 'The largest number of (3, 4, 5, 1, 2) is: ' + x3 + '<br>';

var x4 = getLargest(4, 5, 1, 2, 3);
document.getElementById("largest-result").innerHTML += 'The largest number of (4, 5, 1, 2, 3) is: ' + x4 + '<br>';

var x5 = getLargest(5, 1, 2, 3, 4);
document.getElementById("largest-result").innerHTML += 'The largest number of (5, 1, 2, 3, 4) is: ' + x5 + '<br>';

// Display an Alert Box to show the result of getLargest() function
alert("The largest number of (1, 2, 3, 4, 5) is: " + x1 + "\n" + 
"The largest number of (2, 3, 4, 5, 1) is: " + x2 + "\n" +
"The largest number of (3, 4, 5, 1, 2) is: " + x3 + "\n" +
"The largest number of (4, 5, 1, 2, 3) is: " + x4 + "\n" +
"The largest number of (5, 1, 2, 3, 4) is: " + x5);

// Write a statement to find the largest of five numbers.
function getLargest(a, b, c, d, e) {

    let largest = a;              // Declare largest, give it the value of a
    let numArray = [b, c, d, e];  // Declare numArray as a 5 item array

    for(let item of numArray) {
        if(item > largest) {
            largest = item;
        }
    }
    return largest;
};

console.log(getLargest(1, 2, 3, 4, 5));
console.log(getLargest(2, 3, 4, 5, 1));
console.log(getLargest(3, 4, 5, 1, 2));
console.log(getLargest(4, 5, 1, 2, 3));
console.log(getLargest(5, 1, 2, 3, 4));