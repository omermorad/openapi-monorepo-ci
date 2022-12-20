git checkout --orphan latest_branch
git add -A
git commit -am "reset commits"
git branch -D master
git branch -m master
git push -f origin master

