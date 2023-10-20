// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT License":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "GNU GPLv3":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case "Apache License 2.0": 
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "No License":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT License":
      return `https://opensource.org/licenses/MIT`;
    case "GNU GPLv3":
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case "Apache License 2.0": 
      return `https://opensource.org/licenses/Apache-2.0`;
    case "No License":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT License":
      return `https://opensource.org/licenses/MIT`;
    case "GNU GPLv3":
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case "Apache License 2.0": 
      return `https://opensource.org/licenses/Apache-2.0`;
    case "No License":
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  let page =
`# ${data.title}
 ## Description
  ${data.description}

 ## Installation
  ${data.install}

 ## Usage Instructions
  ${data.usage}

 ## Contribution Guidelines
  ${data.contributions}

 ## Test Instructions
  ${data.tests}

 ## License
  ${data.license};
`;
  return page;
}

module.exports = generateMarkdown;
