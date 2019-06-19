workflow "Rebuild dist file" {
  on = "push"
  resolves = ["Rebuild"]
}

action "Rebuild" {
  uses = "./gh-actions/rebuild"
  secrets = ["GITHUB_TOKEN"]
}
