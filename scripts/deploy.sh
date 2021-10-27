#!/usr/bin/env sh

yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:xuhaooo/big-screen-display-preview.git &&
git remote add gitee git@gitee.com:bingoxuhao/big-screen-display-preview.git &&
git push -u -f origin master &&
git push -f gitee master &&
cd -;
