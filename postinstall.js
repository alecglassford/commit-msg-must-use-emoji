#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Inspired by https://unpkg.com/husky@0.14.3/src/install.js
const getRootPackage = function getRootPackageFunc () {
  const dirs = __dirname.split(path.sep);
  while (dirs.pop()) {
    const currDir = dirs.join(path.sep);
    if (!currDir) return null;

    if (fs.existsSync(path.join(currDir, '.git'))) {
      const packageFilename = path.join(currDir, 'package.json');
      return fs.existsSync(packageFilename) ? packageFilename : null;
    }
  }
}

const packageFilename = getRootPackage();
if (!packageFilename) {
  console.log('Could not find a directory with both `package.json` and `.git`, so no commitmsg script was added.');
  return;
}
const package = require(packageFilename);
if (package.scripts && package.scripts.commitmsg !== undefined) {
  console.log('Root package.json already had a commitmsg script so none was added.');
  return;
}

if (package.scripts === undefined) {
  package.scripts = {};
}
package.scripts.commitmsg = 'commit-msg-must-use-emoji';
fs.writeFileSync(packageFilename, JSON.stringify(package, 2));
console.log('Added a commitmsg script to your root `package.json` - hopefully without messing it up. 😬')
