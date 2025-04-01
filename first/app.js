import readline from "readline-sync";
import chalk from 'chalk';
import figlet from "figlet";
import gradient from 'gradient-string';


// let age = readline.questionInt("Enter your age: ");
// console.log(age);

// let name = readline.question("Enter your name: ");
// console.log(`Your name is ${name} and your age mentioned is ${age}`);

// let email = readline.questionEMail("Please enter your email: ");
// console.log(email);

// console.log(chalk.bgBlack('Hello world!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));

var figlet = require("figlet");

figlet("Welcome!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(gradient(['cyan', 'pink'])(data));
});

// console.log(gradient(['cyan', 'pink'])('Hello world!'));



