#!/usr/bin/env bash
set -euo pipefail


if [[ -z $1 ]]; then
    echo "Please provide VERSION to install"
    exit 1
fi


wget https://s3.amazonaws.com/dev.johnsnowlabs.com/annotationlab-backup-test/annotationlab-"$1".tar.gz
tar -zxvf annotationlab-"$1".tar.gz
cd artifacts
./k3s-installer.sh
./annotationlab-installer.sh
