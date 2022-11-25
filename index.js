const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown"); // Module export not working. Disabling until it can be debugged

/**Questions to ask the user */
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
![Screenshots of your Application can go here!](Screenshot filepath go here)\n
![Video tutorial Links can go here!](video URL go here)\n
${Usage}\n
## License:
${License}\n
You can check out the specifics of the license here! : ${renderLicenseLink(License)}
## Contribution:
${Contribution}\n
## Tests:
${Tests}\n
## Questions:
${Questions}\n
If you have any questions, bug reports / Screenshots your concerned about,
please contact me through my Github or my Email:\n
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
/**Function to grab/display correct badge when license is choosen */

function renderLicenseBadge(License) {
  let licenseType = `${License}`;
  let yourLicense = "";
  if (licenseType === "The MIT License") {
    return (yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
  } else if (licenseType === "The ISC License") {
    return (yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`);
  } else if (licenseType === "The wtfpl License") {
    return (yourLicense = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`);
  } else {
    return (yourLicense = "");
  }
}

/**Function to use/display correct link when license is choosen */
function renderLicenseLink(License) {
  let licenseLink = `${License}`;
  let yourLicenseLink = "";
  if (licenseLink === "The MIT License") {
    return (yourLicenseLink = "https://opensource.org/licenses/MIT");
  } else if (licenseLink === "The ISC License") {
    return (yourLicenseLink = "https://opensource.org/licenses/ISC");
  } else if (licenseType === "The wtfpl License") {
    yourLicenseLink = "http://www.wtfpl.net/about/";
  } else {
    return (yourLicenseLink = "");
  }
}
