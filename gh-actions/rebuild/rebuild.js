const {
  GITHUB_EVENT_NAME,
  GITHUB_EVENT_PATH,
  GITHUB_REF,
  GITHUB_REPOSITORY,
  GITHUB_TOKEN,
} = process.env

const { execSync } = require('child_process')
const GITHUB_EVENT = require(GITHUB_EVENT_PATH)
const COMMIT_MESSAGE = '[gh-actions/rebuild] Rebuild index.js'

function exec(cmd) {
  return execSync(cmd, { encoding: 'utf-8' }).replace(/\n$/, '')
}

function getChangedFiles() {
  return exec(`git status --porcelain`)
    .split('\n')
    .map((line) => line.slice(3))
}

if (
  GITHUB_EVENT_NAME === 'push' &&
  GITHUB_REF === 'refs/heads/master' &&
  GITHUB_EVENT.commits[0].message !== COMMIT_MESSAGE
) {
  const remoteUrl = `https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git`
  const branchName = GITHUB_REF.split('/')[2]

  exec(`yarn && yarn build`)
  if (getChangedFiles().includes('index.js')) {
    exec(
      [
        // configure git
        `git config user.email "${GITHUB_EVENT.head_commit.author.email}"`,
        `git config user.name "${GITHUB_EVENT.head_commit.author.name}"`,
        `git remote add gh-action ${remoteUrl}`,
        `git fetch gh-action ${branchName}`,
        `git branch --set-upstream-to gh-action/${branchName}`,
        // push change
        `git add index.js`,
        `git commit -m "${COMMIT_MESSAGE}"`,
        `git push`,
      ].join(' && ')
    )

    // success
    process.exit(0)
  } else {
    console.log('Dist file not changed')
  }
} else {
  console.log('Skipping rebuild')
}

// neutral
process.exit(78)
