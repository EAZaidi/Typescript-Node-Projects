#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 5634;
let amountAns2 = null;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin code:",
            type: "number",
        }
    ]
);

    if (pinAnswer.pin === myPin)
    {
        console.log("Welcome Mr. Essa Abbas");

        let operationAns = await inquirer.prompt(
            [
                {
                    name: "operation",
                    message: "please select option",
                    type: "list",
                    choices: ["Withdraw", "Balance Inquiry","Fast Cash"]
                }
            ]
        );

    // Withdraw Operation:
    if (operationAns.operation === "Withdraw"){
    let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount: ",
                    type: "number"
                }
            ]
        );
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
    }

    // Balance Inquiry Operation:
    else if(operationAns.operation === "Balance Inquiry")
        {
            console.log("Your remaining balance is: " + myBalance);
        }

    // Fast Cash Operation:
    else if(operationAns.operation === "Fast Cash"){
    let amountAns2 = await inquirer.prompt(
                {
                    name: "amount",
                    message: "Please select a transaction amount:",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000", "15000", "20000"] 
                }
            
        );
        
    if(myBalance >= Number(amountAns2.amount)){
            myBalance -= Number(amountAns2.amount);
            console.log("Your remaining balance is: " + myBalance);
        } 
        else {
            console.log("Sorry! You have insufficient balance");
        }
    }
}
else {
    console.log("Incorrect pin code!!!");
}