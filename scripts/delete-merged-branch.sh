#!/bin/sh

# refer: https://gist.github.com/miukoba/fc3c10a25c1c675c1e97

git fetch origin main:main && \
git checkout main && \
git branch --merged main | grep -vE '^\*|\<main\>' | xargs -I % git branch -d % && \
git branch -r --merged main | grep -vE '\<main\>|HEAD' | sed -e 's% *origin/%%' | xargs -I% git push --delete origin % && \
git fetch --prune
