// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
    
    if (license === "BSD3") {
        return "[![License: BSD3](https://img.sheilds.io/badge/License-BSD3-blue.svg)(https://opensource.org/license/BSD3)" 
    }

    if (license === "Apache2.0") {
        return "[![License:BSD3] (https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/license/Apache-2.0)" }

    if (license === "JAM"){ 
        return "[![License:jam] (https://img.shields.io/badge/License-jam-purple.svg)](https://opensource.org/license/jam)"
    }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'none') {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "none") { 
        return ""
    } else { 
        return renderLicenseBadge(license);
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)
  [Questions](#questions)
  


## Description
${data.description}
# Table of Contents
# Installation
${(data.installation)}
# Usage
${(data.usage)}
# Credits
${data.credits}
# License
${renderLicenseSection(data.license)}

##Questions
${data.Questions}










`;
}

module.exports = generateMarkdown;


