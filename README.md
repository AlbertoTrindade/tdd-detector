# Test Driven Development (TDD) Detector

This module detects evidences of TDD usage from a list of commits (SHA reference) from Java and Ruby projects. 

The detections is based on the following naming convetions, which associate unit test and production code, identified by me and @luanamartins:

**Java**:

* "Test" as suffix
* "Test" as prefix

**Ruby**:

* "_spec" as suffix
* "spec_" as prefix
* "_test" as suffix
* "test_" as prefix

Licensed as MIT - please see LICENSE for details.
