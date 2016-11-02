const GitHub = require('github-api');

const getProductionTestPairsFromCommit = require('./get-production-test-pairs-from-commits');

module.exports = function TDDDetector(githubAccessToken) {
  const github = new GitHub({
    token: githubAccessToken,
  });

  function isTDDUsed(projectAuthor, projectName, language, commits) {
    const remoteRepo = github.getRepo(projectAuthor, projectName);

    return getProductionTestPairsFromCommit(remoteRepo, language, commits)
      .then(productionTestPairs => productionTestPairs.length > 0);
  }

  return {
    isTDDUsed,
  };
};
