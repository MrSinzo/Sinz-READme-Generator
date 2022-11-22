//*****TODO: Include packages needed for this application
/**original snippet from class**/
// const { default: inquirer } = require("inquirer");
const inquirer = require("inquirer");
const fs = require("fs");

//*****TODO: Create an array of questions for user input
/**original snippet from class **/
// const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "Title",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return " I need a title name to continue!";
        }
      },
    },
    {
      type: `input`,
      message: `How would you describe this project?`,
      name: `Description`,
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return " I need a description to continue!";
        }
      },
    },
    {
      type: "input",
      message: "How do you install this application?",
      name: "Installation",
    },
    {
      type: "input",
      message: "What is the main usage of this project?",
      name: "Usage",
    },
    {
      type: "list",
      message: "What kind of license are you using for this project (if any)?",
      name: "License",
      choices: [
        "The MIT License",
        "The ISC License",
        "The wtfpl License",
        "No License Used",
      ],
    },
    {
      type: "input",
      message: "Whom are all the contributors?",
      name: "Contribution",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please mention a contributor to continue!!";
        }
      },
    },
    {
      type: "input",
      message: "Any tests you could report on?",
      name: "Tests",
    },
    {
      type: "input",
      message: "Any questions that you may have?",
      name: "Questions",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "Repo",
    },
    {
      type: "input",
      message: "What is your Email?",
      name: "Email",
    },
  ])
  .then(
    ({
      Title,
      Description,
      Installation,
      Usage,
      License,
      Contribution,
      Tests,
      Questions,
      Repo,
      Email,
      // console.info("Answers:", answers);
    }) => {
      const templateLiterall = `
# ${Title}
* ## Table of Contents
* ### Description
* ### Installation
* ### Usage
* ### License
* ### Contribution
* ### Tests
* ### Questions
## Description:
${Description}\n
## Installation:
${Installation}\n
## Usage:
${Usage}\n
## License:
${License}\n
## Contribution:
${Contribution}\n
## Tests:
${Tests}\n
## Questions:
${Questions}\n
## Github Link
https://github.com/${Repo}\n
## Email
${Email};
`;
      createNewFile(Title, templateLiterall);
    }
  );

function createNewFile(myREADME, templateLiterall) {
  fs.writeFile(
    `./${myREADME.toLowerCase().split(" ").join("")}.md`,
    templateLiterall,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Your READme Has been Generated");
    }
  );
}

//*****TODO: Create a function to write README file
/**original snippet from class **/
// function writeToFile(fileName, data) {}

// function writeToFile('myReadme.md', answers, (err)=>
// err ? console.error(err) : console.log('Success!')) {}
/**original snippet from class **/
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
/**original snippet from class **/
// fs.readFile("data.csv", "utf8", (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// fs.readFile("generateMarkdown.js", "utf8", (error, data) =>
// error ? console.error(error) : console.log(data)
// );

// fs.writeFile('myReadme.md', answers, (error) =>
//   error ? console.error(error) : console.log('Success!')
// );

// TODO: Create a function to initialize app
// function init() {
// }

// Function call to initialize app
// init();