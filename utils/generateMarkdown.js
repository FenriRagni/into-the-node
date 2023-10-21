// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT License":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "BSD 3-Clause License":
      return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
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
  switch(license.license){
    case "MIT License":
      return `Copyright &copy${license.year} ${license.user}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case "BSD 3-Clause License":
      return `Note: This license has also been called the “New BSD License” or “Modified BSD License”. See also the 2-clause BSD License.

      Copyright &copy${license.year} ${license.user}
      
      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      
      Join Us
      Mastodon
       `;
    case "Apache License 2.0": 
      return `Copyright &copy${license.year} ${license.user}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    case "No License":
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data);
  const upperTitle = data.title.charAt(0).toUpperCase() + data.title.slice(1);
  
  let page =
`# ${upperTitle}
  ${badge}
 ## Description
  ${data.description}

 ## Table of Contents
  [Installation](#installation)<br>
  [Usage Instructions](#usage-instructions)<br>
  [Contribution Guidelines](#contribution-guidelines)<br>
  [Test Instructions](#test-instructions)<br>
  [Questions](#questions)<br>
  [License](#license)<br>

 ## Installation
  ${data.install}

 ## Usage Instructions
  ${data.usage}

 ## Contribution Guidelines
  ${data.contributions}

 ## Test Instructions
  ${data.tests}

 ## Questions
  [Github profile](github.com/${data.user})
  <br>If you have any questions please email me at:
  ${data.email}
 ## License
  [${link}](${link})<br>
  ${section}
`;
  return page;
}

module.exports = generateMarkdown;
