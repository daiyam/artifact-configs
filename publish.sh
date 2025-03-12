#!/bin/bash

set -e

CALLER_DIR=$( pwd )

nrm use local

cd "$( dirname "${BASH_SOURCE[0]}" )"
cd packages

for name in *; do
	if [[ -d "$name" ]]; then
    	echo "package: $name"

		cd "$name"

		version="$( jq -r ".version" package.json )"

		npm unpublish --force "@daiyam/artifact-${name}@${version}" || true

		npm publish || true

		cd ..
	fi
done

cd "${CALLER_DIR}"
