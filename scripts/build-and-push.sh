#!/bin/bash

cd ../website && \
#git init . && \
touch .nojekyll && \
#git remote add origin git@github.com:ULL-MII-SYTWS-2021/ull-mii-sytws-2021.github.io.git && \
git add . && \
git ci -am 'new build' && \
git push --force origin master