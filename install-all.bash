#!/bin/bash

FOLDERS=$(ls | grep -v ".*\..*" | grep -v "bachelors_thesis.*")

for i in $FOLDERS; do
  echo "installing in $i"
  cd $i
  npm install
  cd ..
done
