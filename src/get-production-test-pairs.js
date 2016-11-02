const stem = require('stem-porter');

function getFileName(file) {
  return file.replace(/.*\//, '').replace(/\..*/, '');
}

function areJavaProductionTestPair(productionFileName, testFileName) {
  const productionFileNameStem = stem(productionFileName);
  let testFileNameWithoutPrefix = '';

  if (testFileName.endsWith('Test')) {
    testFileNameWithoutPrefix = testFileName.match(/(.*)Test/)[1];
  }

  if (testFileName.startsWith('Test')) {
    testFileNameWithoutPrefix = testFileName.match(/Test(.*)/)[1];
  }

  return testFileNameWithoutPrefix && productionFileNameStem === stem(testFileNameWithoutPrefix);
}

function areRubyProductionTestPair(productionFileName, testFileName) {
  const productionFileNameStem = stem(productionFileName);
  let testFileNameWithoutPrefix = '';

  if (testFileName.endsWith('_spec')) {
    testFileNameWithoutPrefix = testFileName.match(/(.*)_spec/)[1];
  }

  if (testFileName.startsWith('spec_')) {
    testFileNameWithoutPrefix = testFileName.match(/spec_(.*)/)[1];
  }

  if (testFileName.endsWith('_test')) {
    testFileNameWithoutPrefix = testFileName.match(/(.*)_test/)[1];
  }

  if (testFileName.startsWith('test_')) {
    testFileNameWithoutPrefix = testFileName.match(/test_(.*)/)[1];
  }

  return testFileNameWithoutPrefix && productionFileNameStem === stem(testFileNameWithoutPrefix);
}

function areProductionTestPair(language, productionFile, testFile) {
  const productionFileName = getFileName(productionFile);
  const testFileName = getFileName(testFile);

  return (language === 'java' && areJavaProductionTestPair(productionFileName, testFileName)) ||
         (language === 'ruby' && areRubyProductionTestPair(productionFileName, testFileName));
}

function getProductionTestPairs(language, productionFiles, testFiles) {
  const productionTestPairs = [];

  productionFiles.forEach(productionFile => {
    testFiles.forEach(testFile => {
      if (testFile.date <= productionFile.date &&
          areProductionTestPair(language, productionFile.file, testFile.file)) {
        productionTestPairs.push({
          productionFile: productionFile.file,
          testFile: testFile.file,
        });
      }
    });
  });

  return productionTestPairs;
}

module.exports = getProductionTestPairs;
