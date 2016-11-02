# Test Driven Development (TDD) Detector

This module detects evidences of TDD usage from a list of commits (SHA reference) from Java and Ruby projects. 

The detections is based on the following naming convetions, which associate unit test and production code, identified by me and [@luanamartins](https://github.com/luanamartins):

**Java**:

* "Test" as suffix
* "Test" as prefix

**Ruby**:

* "_spec" as suffix
* "spec_" as prefix
* "_test" as suffix
* "test_" as prefix

## Usage
To install this package, run `npm install --save tdd-detector` [and obtain an GitHub API key](https://github.com/blog/1509-personal-api-tokens).Once you got your key, you can instantiate an TDD Detector client in your code:

```
var TDDDetector = require('tdd-detector'),
    tddDetector = new TDDDetector('7fb073s72bh72663y5ddh129m12e598d');
```

Licensed as MIT - please see LICENSE for details.
