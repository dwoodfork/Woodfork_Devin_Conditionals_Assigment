/*
 Devin M. Woodfork
 8/20/15
 SDI 1508
 Conditionals Assignment
 */

//create variables

var name = prompt("Enter your first name!");
var age = prompt("Enter your age!");
var num1 = prompt("Enter the first number >= 1");
var num2 = prompt("Enter the second number >= 1");
var operation = prompt("Enter the plus (+) or minus (-) sign for your operator");
var correct = confirm ("Is the number you entered correct, " + num1 + ", " + num2 + "?");
var correct2 = confirm ("Is this your name & age, " + name + " &" + age);


//the logic for the calculator


 if ((operation === "+") && (correct && correct2 == true) && (num1 >=1) && (num2 >= 1) )
{
    num1 = Number(num1);
    num2 = Number(num2);

    console.log(name + " according to your age " + (age >= 18 ? "you are a legal adult" : "you are not of adult age"));
    console.log(name + ", " + num1 + " " + "+" + " " + num2 + " " + "equals" + " " + (num1 + num2));

}
    else if ((operation === "-") && (correct == true) && (num1 >=1) && (num2 >= 1))
    {
        num1 = Number(num1);
        num2 = Number(num2);

        console.log(name + " according to your age " + (age >= 18 ? "you are a legal adult" : "you are not of adult age"));
        console.log(name + ", " + num1 + " " + "-" + " " + num2 + " " + "equals" + " " + (num1 - num2));

    }

    else if ((operation != "+" || "-") || (correct == false) || (num1 < 1) || (num2 < 1)){

        console.log(name + ", " + "refresh and try again with the correct operator and/or numbers!");

    }
