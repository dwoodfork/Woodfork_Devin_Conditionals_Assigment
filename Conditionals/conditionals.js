/*
 Devin M. Woodfork
 8/20/15
 SDI 1508
 Conditionals Assignment
 */

//create variables

var name= prompt("Enter your first name!");
var num1 = prompt("Enter the first number >= 1");
var num2 = prompt("Enter the second number >= 1");
var operation = prompt("Enter the plus (+) or minus (-) sign for your operator");
var correct = confirm ("Are these your numbers, " + num1 + " " + num2 + "?");


//the logic for the calculator


 if ((operation === "+") && (correct == true) && (num1 >= 1 ? " Your number is acceptable!" : "Your number is not acceptable"))
{
    num1 = Number(num1);
    num2 = Number(num2);

    console.log(name + ", " + num1 + " " + "+" + " " + num2 + " " + "equals" + " " + (num1 + num2));

}
    else if ((operation === "-") && (correct == true) && (num1 >= 1 ? " Your number is acceptable!" : "Your number is not acceptable!"))
    {
        num1 = Number(num1);
        num2 = Number(num2);
        console.log(name + ", " + num1 + " " + "-" + " " + num2 + " " + "equals" + " " + (num1 - num2));

    }

    else
    {
        (operation != "+" || "-") || (correct == false) || ((num1 < 1 ? " Your number is not acceptable" : "Your number is not acceptable"));
        console.log(name + ", " + "refresh and try again with the correct operator and/or numbers!");

    }
