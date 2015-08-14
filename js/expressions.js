/**
 * Created by DevinWoodfork on 8/13/15.
 */
/*
    Devin M. Woodfork
    SDI 1508
    Expressions Assignment
 */

//alert("JavaScript  works!");


//variables

var myFirstName;
var firstNumber;
var secondNumber;
var array = [];
var allSolutions = true;
var thirdNumber;

//prompts

myFirstName = prompt("Enter your first name");
firstNumber = prompt("Enter the price of the item");
secondNumber = prompt("Enter the quantity needed");
thirdNumber = prompt("Enter the taxes in decimal ");

array[0] = (firstNumber * 1);
array[1] = (firstNumber * 2);
array[2] = (firstNumber * 3);
array[3] = (firstNumber * 4);
array[4] = (firstNumber * 5);
array[5] = (firstNumber * 6);

//outputs

console.log("Hi " + myFirstName + ", " + (firstNumber * secondNumber ) + " is the total for your item in the amount of" + "  " + secondNumber + "!");
console.log("Hi " + myFirstName + ",  " + ((firstNumber * secondNumber) * thirdNumber + (firstNumber * secondNumber)) + " is the total amount of your order including taxes!");
console.log(myFirstName + "," +" both the total before and after taxes are displayed" + " " +  allSolutions + "!");
console.log("The array of your first number which is, " + firstNumber + " " + " " + "in the  multiples of: 1,2,3,4,5,6 is as follows:" + " " + array );
console.log((thirdNumber / 2 ) +  " " + "is the price off the original price before taxes. You must show to cahsier!");