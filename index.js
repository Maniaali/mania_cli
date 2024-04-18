#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "usergussedNumber",
        type: "number",
        message: "please guess the Number between 1 to 10",
    },
]);
if (answers.usergussedNumber === randomnumber) {
    console.log("congratulations! you gussed the right number");
}
else {
    console.log("lose!you gussed the wroung number");
}
console.log(answers);
