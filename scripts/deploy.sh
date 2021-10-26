#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:xuhaooo/big-screen-display-preview.git &&
git remote add gitee git@gitee.com:bingoxuhao/big-screen-display-preview.git &&
git push -uf origin master:gh-pages &&
git push -uf gitee master:gt-pages &&
cd -;
