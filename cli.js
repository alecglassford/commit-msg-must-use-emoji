#!/usr/bin/env node

const startsWithEmoji = require('./index');

// Use husky || roll your own
const filename = process.env.GIT_PARAMS || process.argv[2];
if (!filename) {
  console.error('🚨 You must provide a filename to check for emoji.');
  process.exit(1);
}

const passesTest = startsWithEmoji.testFile(filename);
if (!passesTest) {
  console.error('🚨 Your commit message must start with an emoji. Try again.');
  process.exit(1);
}

console.log('✅ commit-msg-must-use-emoji passes');
