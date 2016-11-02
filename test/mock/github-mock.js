const nock = require('nock');

const githubApiUrlPrefix = 'https://api.github.com';

module.exports = function githubMock() {
  nock(githubApiUrlPrefix)
    .get('/repos/google/closure-compiler/commits/59f5f9c484164fc394cd5d34485ad7f4c37bc21e')
    .replyWithFile(200,
                   `${__dirname}/github_responses/59f5f9c484164fc394cd5d34485ad7f4c37bc21e.json`)
    .get('/repos/google/closure-compiler/commits/63d6fe90f434533b5a52edcd93d9786b8c1834e8')
    .replyWithFile(200,
                   `${__dirname}/github_responses/63d6fe90f434533b5a52edcd93d9786b8c1834e8.json`)
    .get('/repos/google/closure-compiler/commits/6b158f92af743c0a89e9b343af9fe95c08d31bef')
    .replyWithFile(200,
                   `${__dirname}/github_responses/6b158f92af743c0a89e9b343af9fe95c08d31bef.json`);
};
