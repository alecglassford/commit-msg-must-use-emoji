# commit-msg-must-use-emoji
💌 Easy-to-add Git hook that forces you to start every commit message with an emoji

## What is this?

Once you install this, whenever you try to commit and your message doesn't start with an emoji, your commit will fail and you'll be prompted to amend it. You can bypass this by adding `--no-verify` to `git commit`.

## Why is this?

[Lots of people](https://www.npmjs.com/search?q=emoji+commit) seem interested in using emoji in Git commit messages, for [various](https://gitmoji.carloscuesta.me/) [reasons](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages). You can do this in some consistent way to communicate stuff, or you can just do it to add fun to your life (or both).

Emoji bring a lot of light to my life. Do I really want them in *every* commit message? I don't know; let's find out.

No other tool did exactly what I wanted here, so I thought I'd play around in the wild mire of zero width joiners and fulfill them myself:
* ✨ Emoji are unicode (no shortcodes!)
* 🏄🏽‍♀️ Set it and forget it (Git hooks are simple. `package.json` scripts are simple.)

## Installation

* [If your project has a package.json](#if-your-project-has-a-packagejson)
  * [If you already have a `commitmsg` Node script](#if-you-already-have-a-commitmsg-node-script)
* [If your project doesn't have a package.json (but Node is installed on your machine)](#if-your-project-doesnt-have-a-packagejson-but-node-is-installed-on-your-machine)

### If your project has a package.json

The chillest way to install this tool is to use [Husky](https://github.com/typicode/husky). 🐶

Run `npm install -D husky && npm install -D commit-msg-must-use-emoji`.

(`yarn add -D husky && yarn add -D commit-msg-must-use-emoji` probably works too.)

Then add a `commitmsg` script so your `package.json` looks like:

```
{
  "...
  "scripts": {
    ...
    "commitmsg": "commit-msg-must-use-emoji",
    ...
  },
  ...
}
```

🎉

#### If you already have a `commitmsg` Node script

You can add require this package and test a commit message string or a commit message filename (Husky stores it in `process.env.GIT_PARAMS` while a general Git hook node script will provide it as `process.argv[2]`):

```
const startsWithEmoji = require('commit-msg-must-use-emoji');

// e.g.
const messageString = 'Update code';
const messageFilename = '/Users/me/project/.git/COMMIT_EDITMSG';

if (!startsWithEmoji.testString(messageString)) {
  console.error('😡')
}

// or
if (!startsWithEmoji.testString(messageFilename) {
  console.error('😿');
}
```

🎉

### If your project doesn't have a package.json (but Node is installed on your machine)

You can install this package globally (`npm install -g commit-msg-must-use-emoji`) and then, as long as you're on a Unix machine and don't already have a `commit-msg` Git hook, go to your project and try

```
echo '#!/usr/bin/env sh
commit-msg-must-use-emoji $1' > ./.git/hooks/commit-msg && \
chmod +x ./.git/hooks/commit-msg
```

🎉

If you want to add this to an existing `commit-msg` shell script, adding `commit-msg-must-use-emoji $1` somewhere in there will probably work. If you're on Windows, I'm not sure.

## 🌻 Thx

Thanks to [all](https://medium.com/@tessr/making-money-530d2bb2b8f7) [the](https://www.nytimes.com/2016/11/09/arts/secrets-of-the-emoji-world-now-with-its-own-convention-emojicon.html) [emoji](http://99percentinvisible.org/episode/person-lotus-position/) [lovers](https://xkcd.com/1870/), but interacting with the work of [@notwaldorf](https://github.com/notwaldorf/), emojineer extraordinaire, has probably done the most to get me excited about emoji recently.
