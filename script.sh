git fetch --tags
git fetch --prune --prune-tags
git tag -l | xargs -n 1 git push --delete origin
git tag | xargs git tag -d

git checkout --orphan latest_branch
git add -A
git commit -am "reset commits"
git branch -D master
git branch -m master
git push -f origin master