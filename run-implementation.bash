#!/bin/bash

if [ -z "$1" ]; then
  echo "No implementation folder"
else
  cd "$1"
  npm start
  cd ..
fi
