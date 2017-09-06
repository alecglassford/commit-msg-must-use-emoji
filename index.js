const fs = require('fs');

const emojiRegex = require('emoji-regex');

const testString = function stringBeginsWithEmoji(msg) {
  const match = emojiRegex().exec(msg);
  return match && match.index === 0;
};

const testFile = function fileBeginsWithEmoji(filename) {
  const msg = fs.readFileSync(filename, 'utf-8');
  return stringBeginsWithEmoji(msg);
};

module.exports = {
  testString,
  testFile,
};
