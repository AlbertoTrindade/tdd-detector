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

  it('should return true when we have pairs in the same commit', function() {
    const projectAuthor = 'google';
    const projectName = 'closure-compiler';
    const language = 'java';
    const commits = ['59f5f9c484164fc394cd5d34485ad7f4c37bc21e', '63d6fe90f434533b5a52edcd93d9786b8c1834e8', '6b158f92af743c0a89e9b343af9fe95c08d31bef']

    return tddDetector.isTDDUsed(projectAuthor, projectName, language, commits)
      .then(result => {
        expect(result).to.be.true;
      });
  });

  it('should return true when we have pairs in different commits, but with tests before/along with implementation', function() {
    const projectAuthor = 'nathanl';
    const projectName = 'searchlight';
    const language = 'ruby';
    const commits = ['94a06293db0f37bda1b72e5693a58ed94f184936', '04e3541e39312eef8ac71cf2476ba8feb2d4b88b']

    return tddDetector.isTDDUsed(projectAuthor, projectName, language, commits)
      .then(result => {
        expect(result).to.be.true;
      });
  });

  it('should return false when we do not have pairs with tests before/along with implementation', function() {
    const projectAuthor = 'google';
    const projectName = 'closure-compiler';
    const language = 'java';
    const commits = ['59f5f9c484164fc394cd5d34485ad7f4c37bc21e', '6b158f92af743c0a89e9b343af9fe95c08d31bef']

    return tddDetector.isTDDUsed(projectAuthor, projectName, language, commits)
      .then(result => {
        expect(result).to.be.false;
      });
  });
});
