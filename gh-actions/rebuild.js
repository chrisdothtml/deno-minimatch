const { execSync } = require('child_process')
const { AUTHOR_EMAIL, AUTHOR_NAME, GITHUB_TOKEN, REF, REPO } = process.env
const remoteUrl = `https://x-access-token:${GITHUB_TOKEN}@github.com/${REPO}.git`
const branchName = REF.split('/')[2]

function exec(cmd) {
  return execSync(cmd, { encoding: 'utf-8' }).replace(/\n$/, '')
}

function getChangedFiles() {
  return exec(`git status --porcelain`)
    .split('\n')
    .map((line) => line.slice(3))
}

exec(`yarn && yarn build`)
if (getChangedFiles().includes('index.js')) {
  exec(
    [
      // configure git
      `git config user.email "${AUTHOR_EMAIL}"`,
      `git config user.name "${AUTHOR_NAME}"`,
      `git remote add gh-action ${remoteUrl}`,
      `git fetch gh-action ${branchName}`,
      // push change
      `git add index.js`,
      `git commit -m "[gh-actions/rebuild] Rebuild index.js"`,
      `git push gh-action HEAD:${branchName}`,
    ].join(' && ')
  )
} else {
  console.log('Dist file not changed')
}
