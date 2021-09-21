#!/bin/bash

cd ../website && \
#git init . && \
#git remote add origin git@github.com:ULL-MII-SYTWS-2021/ull-mii-sytws-2021.github.io.git && \
#touch .nojekyll && \
git add . && \
git ci -am 'new build' && \
git push --force origin master