#!/bin/bash

set -e

CALLER_DIR=$( pwd )

cd "$( dirname "${BASH_SOURCE[0]}" )"
cd packages

for name in *; do
	if [ -d "$name" ]; then
    	echo "$name"

		cd "$name"

		version="$( jq -r ".version" package.json )"

		npm unpublish "@daiyam/artifact-${name}@${version}" || true

		npm publish

		cd ..
	fi
done

cd "${CALLER_DIR}"
