// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// top 5 badges based off of information from this website:
// https://github.blog/2015-03-09-open-source-license-usage-on-github-com/
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if(license === "GPLv2") {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }
  else if(license ==="GPLv3") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if(license === "none"|| license === ""|| license === "N/A") {
    return license;
  }
  else{
    return license;
  }
}


// TODO: Create a function to generate markdown for README
// function based off of folder structure of README.md
function generateMarkdown(data) {
  return `# ${data.title}

    ##Description
    ${data.description}

    ##Installation
    ${data.installation}

    ##Badges
    ${data.badges}

    ##License
    ${renderLicenseBadge(data.projectlic)}

    ##Testing
    ${data.testinfo}

    ##Credits
    ${data.credits}

    ##Contribute
    Please contact me through this ${data.contact} github account to make any changes that you want to the project.
`;
}

module.exports = generateMarkdown;
