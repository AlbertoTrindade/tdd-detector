/* eslint-disable */
const expect = require('chai').expect;

const TDDDetector = require('../src/tdd-detector');
const githubMock = require('./mock/github-mock');

describe('TDD Detector isTDDUsed', function() {
  const githubAccessToken = '123456';
  const tddDetector = new TDDDetector(githubAccessToken);

  beforeEach(() => {
    githubMock();
  });

  it('should return true when we have pairs in same commit', function() {
    const projectAuthor = 'google';
    const projectName = 'closure-compiler';
    const language = 'java';
    const commits = ['59f5f9c484164fc394cd5d34485ad7f4c37bc21e', '63d6fe90f434533b5a52edcd93d9786b8c1834e8', '6b158f92af743c0a89e9b343af9fe95c08d31bef']

    return tddDetector.isTDDUsed(projectAuthor, projectName, language, commits)
      .then(result => {
        expect(result).to.be.true;
      });
  });
});
