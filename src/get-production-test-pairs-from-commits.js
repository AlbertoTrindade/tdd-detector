const getProductionTestPairs = require('./get-production-test-pairs');
const extractFilesFromCommit = require('./extract-files-from-commit');

function mergeFilesList(filesList) {
  const mergedProductionFiles = [];
  const mergedTestFiles = [];

  filesList.forEach(files => {
    const date = files.date;

    files.productionFiles.forEach(file => mergedProductionFiles.push({
      date,
      file,
    }));

    files.testFiles.forEach(file => mergedTestFiles.push({
      date,
      file,
    }));
  });

  return {
    productionFiles: mergedProductionFiles,
    testFiles: mergedTestFiles,
  };
}

function getProductionTestPairsFromCommits(remoteRepo, language, commits) {
  return Promise.all(commits.map(commit => extractFilesFromCommit(remoteRepo, language, commit)))
    .then(filesList => mergeFilesList(filesList))
    .then(files => getProductionTestPairs(language, files.productionFiles, files.testFiles));
}

module.exports = getProductionTestPairsFromCommits;
