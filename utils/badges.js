// Array of badge objects with badeLink and key
const badges = [
  {
    key: 'MIT',
    badgeLink:
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  },
  {
    key: 'GPLv2',
    badgeLink:
      '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  },
  {
    key: 'Apache',
    badgeLink:
      '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  },
  {
    key: 'GPLv3',
    badgeLink:
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  },
  {
    key: 'BSD 3-clause',
    badgeLink:
      '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  },
];

//renderLicenseBadge() returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    const [badge] = badges.filter((e) => license === e.key);
    return badge.badgeLink;
  } else {
    return ``;
  }
}

module.exports = { badges, renderLicenseBadge };
