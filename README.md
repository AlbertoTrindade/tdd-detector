# Test Driven Development (TDD) Detector

[![build status](https://api.travis-ci.org/AlbertoTrindade/tdd-detector.svg?branch=master)](https://travis-ci.org/AlbertoTrindade/tdd-detector)
[![npm version](https://badge.fury.io/js/tdd-detector.svg)](http://badge.fury.io/js/tdd-detector)

This module detects evidences of TDD usage from a list of commits (SHA1 Hash reference) from Java and Ruby projects. 

The detection is based on the following naming conventions, which associate unit test and production code, identified by me and [@luanamartins](https://github.com/luanamartins):

**Java**:

* "Test" as suffix
* "Test" as prefix

**Ruby**:

* "_spec" as suffix
* "spec_" as prefix
* "_test" as suffix
* "test_" as prefix

## Usage
### Installation
To install this package, run `npm install --save tdd-detector` [and obtain a GitHub API key](https://github.com/blog/1509-personal-api-tokens). Once you got your key, you can instantiate a TDD Detector client in your code:

```js
const TDDDetector = require('tdd-detector');
const tddDetector = new TDDDetector('7fb073s72bh72663y5ddh129m12e598d');
```

### Checking if TDD is used from a list of commits
You just need to specify the author and name of the project, programming language (`'java'` or `'ruby`') used and the list of SHA1 Hash for commits:

```js
const projectAuthor = 'google';
const projectName = 'closure-compiler';
const language = 'java';
const commits = ['59f5f9c484164fc394cd5d34485ad7f4c37bc21e', '63d6fe90f434533b5a52edcd93d9786b8c1834e8', '6b158f92af743c0a89e9b343af9fe95c08d31bef'];

tddDetector.isTDDUsed(projectAuthor, projectName, language, commits)
  .then(result => {
    if (result) {
      console.log('TDD was used!');
    }
    else {
      console.log('TDD was not used!');
    }
  });
```



Licensed as MIT - please see LICENSE for details.
