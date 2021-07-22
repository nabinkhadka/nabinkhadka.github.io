#!/usr/bin/env bash
set -euo pipefail


if [[ -z ${VERSION} ]]; then
    echo "Please provide VERSION to install"
    exit 1
fi


wget http://nabinkhadka.com.np/annotationlab-"${VERSION}".tar.gz
tar -zxvf annotationlab-"${VERSION}".tar.gz
cd artifacts
./k3s-installer.sh
./annotationlab-installer.sh
