//*****TODO: Include packages needed for this application
/**original snippet from class**/
// const { default: inquirer } = require("inquirer");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = require('generateMarkdown')

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
          return "I need a title name to continue!";
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
          return "I need a description to continue!";
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
      /**original snippet from class **/
      // console.info("Answers:", answers);
    }) => {
      const templateLiterall = `
# ${Title}
${renderLicenseBadge(License)}
## Description:
${Description}\n
## Table of Contents
### Installation
### Usage
### License
### Contribution
### Tests
### Questions\n
## Installation:
${Installation}\n
## Usage:
![Video Tutorial](video tut link go here)\n
${Usage}\n
## License:
${License}\n
## Contribution:
${Contribution}\n
## Tests:
${Tests}\n
## Questions:
${Questions}\n
If you have any questions, bug reports / Screenshots your concerned about,
please contact me through one of these two methods:\n
### Github Link
https://github.com/${Repo}\n
### Email
${Email}`;
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

function renderLicenseBadge(License) {
  let licenseType =`${License}`
  // let licenseType = License
  // let licenseType = license.data.license[0]
  // let licenseType = ["The MIT License", "The ISC License", "The wtfpl License"];
  let yourLicense = "";
  if (licenseType === "The MIT License") {
    return yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === "The ISC License") {
    return yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (licenseType === "The wtfpl License") {
    return yourLicense = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else {
    return yourLicense = "None";
  }
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
