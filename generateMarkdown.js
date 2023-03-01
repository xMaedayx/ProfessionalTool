// a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
    
    if (license === "BSD3") {
        return "[![License: BSD3](https://img.sheilds.io/badge/License-BSD3-blue.svg)(https://opensource.org/license/BSD3)" 
    }

    if (license === "artistic-perl-1-0-2") {
        return "[![License: artistic-perl-1-0-2](https://img.shields.io/badge/License-artistic-perl-1-0-2-blueviolet.svg)](https://opensource.org/license/artistic-perl-1-0-2/)" }

    if (license === "JAM"){ 
        return "[![License:jam](https://img.shields.io/badge/License-jam-purple.svg)](https://opensource.org/license/jam)"
    }
}
  

// the function that adds the licenses 
function renderLicenseSection(license) {
    if (license === "none") { 
        return ""
    } else { 
        return renderLicenseBadge(license);
    }
}


//  a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseSection(data.license)}

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


##Questions
${data.Questions}










`;
}

module.exports = generateMarkdown;


