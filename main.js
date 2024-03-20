#! /usr/bin/evn node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: (chalk.yellow("Enter your first number.")) },
    { type: "number",
        name: "numberTwo",
        message: (chalk.redBright("Enter your second number.")) },
    { type: "list",
        name: "operator",
        message: (chalk.green("Select an operator.")),
        choices: ["+", "-", "*", "/"] }
]);
//step2
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
