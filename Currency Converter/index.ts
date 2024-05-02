#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


const currencyRates: any = {
    USD: 1,     //Base Currency
    EUR: 0.93,
    GBP: 0.80,
    AUD: 1.53,
    KWD: 0.31,
    OMR: 0.38,
    QAR: 3.64,
    AED: 3.67,
    INR: 83.49,
    PKR: 277.29
};

let user_answer= await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency:",
            type: "list",
            choices: ["USD","EUR","GBP","AUD","KWD","OMR","QAR","AED","INR","PKR"]
        },
        {
            name: "to",
            message: "Enter To Currency:",
            type: "list",
            choices: ["USD","EUR","GBP","AUD","KWD","OMR","QAR","AED","INR","PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount:",
            type: "number"
        }
    ]
);

let fromAmount = currencyRates[user_answer.from]
let toAmount = currencyRates[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount // Converted in Base Currency
let convertedAmount = baseAmount * toAmount
console.log((chalk.blueBright(convertedAmount.toFixed(2))));
