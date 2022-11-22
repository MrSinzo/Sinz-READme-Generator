// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let licenseType = license.data.license[0]
//   let yourLicense = ';'
//   if (licenseType === "The MIT License") {
//     return yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//   } else if (licenseType === "The ISC License"){
//     return yourLicense = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
//   } else if (licenseType === "The wtfpl License"){
//     return yourLicense = `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`
//   } else {
//    return yourLicense = ""
//   } 
// }

// function renderLicenseBadge(license) 
function renderLicenseBadge(License) {
  // let licenseType =`${License}`
  let licenseType = License
  // let licenseType = license.data.license[0]
  // let licenseType = ["The MIT License", "The ISC License", "The wtfpl License"];
  let yourLicense = "";
  if (licenseType === "The MIT License") {
    return yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === "The ISC License") {
    return yourLicense = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else if (licenseType === "The wtfpl License") {
    return yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else {
    return yourLicense = "None";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
