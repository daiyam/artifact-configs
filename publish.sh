#!/bin/bash

set -e

CALLER_DIR=$( pwd )

cd "$( dirname "${BASH_SOURCE[0]}" )"
cd packages

for name in *; do
	if [ -d "$name" ]; then
    	echo "$name"

		cd "$name"

		npm unpublish "@daiyam/artifact-${name}@0.1.0"

		npm publish

		cd ..
	fi
done

cd "${CALLER_DIR}"
