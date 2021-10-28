#!/usr/bin/env sh

yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:xuhaooo/big-screen-display-website.git &&
git remote add gitee git@gitee.com:bingoxuhao/big-screen-display-website.git &&
git push -u -f origin master &&
git push -f gitee master &&
cd -
echo https://bingoxuhao.gitee.io/big-screen-display-website/#/
echo https://xuhaooo.github.io/big-screen-display-website/index.html#/
