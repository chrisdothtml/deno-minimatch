const {
  GITHUB_EVENT_PATH,
  GITHUB_REF,
  GITHUB_REPOSITORY,
  GITHUB_TOKEN,
} = process.env
const { execSync } = require('child_process')
const githubEvent = require(GITHUB_EVENT_PATH)

function exec(cmd) {
  return execSync(cmd, { encoding: 'utf-8' }).replace(/\n$/, '')
}

// if (GITHUB_REF === 'refs/heads/master') {
const remoteUrl = `https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git`
const branchName = GITHUB_REF.split('/')[2]

console.log('githubEvent')
console.log(require('util').inspect(githubEvent, false, null, true))
console.log('remoteUrl')
console.log(remoteUrl)
console.log('branchName')
console.log(branchName)
console.log('git user')
console.log(exec(`git config --get user.name`))
// }
