/*
 Devin M. Woodfork
 8/20/15
 SDI 1508
 Conditionals Assignment
 */

//create variables

var name = prompt("Enter your first name!"); //get user's name
var age = prompt("Enter your age!"); // get user's age
var num1 = prompt("Enter the first number >= 1"); // get user's first number for operation
var num2 = prompt("Enter the second number >= 1"); // get user's second number for operation
var operation = prompt("Enter the plus (+) or minus (-) sign for your operator"); // get the user's choice of operator
var correct = confirm ("Is the number you entered correct, " + num1 + ", " + num2 + "?"); // confirm user's numbers
var correct2 = confirm ("Is this your name & age, " + name + " &" + age); //confirm user's name and age


//the logic for the calculator


 if ((operation === "+") && (correct && correct2 == true) && (num1 >=1) && (num2 >= 1) )
 // verify if operation is addition, the user information is correct and that the user's numbers are >= 1
{
    num1 = Number(num1); //change num1 from string to number
    num2 = Number(num2); //change num2 from string to number

    console.log(name + " according to your age " + (age >= 18 ? "you are a legal adult" : "you are not of adult age"));
    //display if the user's age is greater than or equal to 18  display they are legal and if not display they are illegal
    console.log(name + ", " + num1 + " " + "+" + " " + num2 + " " + "equals" + " " + (num1 + num2));
    // display the user's name, numbers and the sum of the numbers
}
    else if ((operation === "-") && (correct == true) && (num1 >=1) && (num2 >= 1))
 // verify if operation is subtraction, the user information is correct and that the user's numbers are >= 1
    {
        num1 = Number(num1); //change num1 from string to number
        num2 = Number(num2); //change num2 from string to number

        console.log(name + " according to your age " + (age >= 18 ? "you are a legal adult" : "you are not of adult age"));
        //display if the user's age is greater than or equal to 18  display they are legal and if not display they are illegal
        console.log(name + ", " + num1 + " " + "-" + " " + num2 + " " + "equals" + " " + (num1 - num2));
        // display the user's name, numbers and the difference of the numbers

    }

    else if ((operation != "+" || "-") || (correct == false) || (num1 < 1) || (num2 < 1))
 // runs if the operation entered is not + or -, the user's information is not correct or the numbers are less than 1
 {

        console.log(name + ", " + "refresh and try again with the correct operator and/or numbers!");
        //prompt user to refresh screen due to wrong operation, information and/or numbers

    }
