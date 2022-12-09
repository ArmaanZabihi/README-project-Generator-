// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//TODO - Write out the content for md file
function generateMarkdown(data) {
  //logging data so you can see what you have access to
  console.log(data)
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
## installation instructions
${data.installation}
## Contribution Guidelines
${data.Contributing}
## Usage
${data.Usage}
## Tests
${data.Tests}
`;
}

module.exports = generateMarkdown;
