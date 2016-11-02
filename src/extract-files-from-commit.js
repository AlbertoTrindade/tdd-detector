function isJavaFile(filename) {
  const javaExtension = '.java';

  return filename.endsWith(javaExtension);
}

function isRubyile(filename) {
  const rubyExtension = '.rb';

  return filename.endsWith(rubyExtension);
}

function isTestFile(filename) {
  const testPattern = /.*(test|spec).*/i;

  return testPattern.test(filename);
}

function separateProductionTestFiles(commit) {
  const productionFiles = [];
  const testFiles = [];

  const files = commit.files;
  const date = new Date(commit.commit.author.date);

  files.forEach(file => {
    const filename = file.filename;

    if (isJavaFile(filename) || isRubyile(filename)) {
      if (isTestFile(filename)) {
        testFiles.push(filename);
      } else {
        productionFiles.push(filename);
      }
    }
  });

  return {
    date,
    productionFiles,
    testFiles,
  };
}

function extractFilesFromCommit(remoteRepo, language, commitSha) {
  return remoteRepo.getSingleCommit(commitSha)
    .then(result => result.data)
    .then(separateProductionTestFiles);
}

module.exports = extractFilesFromCommit;
