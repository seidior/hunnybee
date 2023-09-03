#!/usr/bin/env bash

# This file parses output from "pnpm update" to figure out if packages were
# updated and determines if a pull request needs to be opened to update the
# repository consequently, with the body of the pull request containing the
# dependencies and devDependencies that were updated.

set -e

COUNT=0;

declare -a OUTPUTS=("" "" "" "")

while read -r LINE
do
  if [ "$LINE" ]
  then
    OUTPUTS[$COUNT]+="$LINE\n"
  else
    (( ++COUNT ))
  fi
done < pnpm-output-stdout.txt

rm -f pnpm-output-stdout.txt

if (( COUNT == 2 ))
then
  echo -e "${OUTPUTS[1]}"
  exit 1
fi

if (( COUNT == 3 ))
then
  echo -ne "${OUTPUTS[1]}\n${OUTPUTS[2]}"
  exit 2
fi

exit 0
