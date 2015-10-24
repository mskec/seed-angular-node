#!/usr/bin/env bash

ROOT_DIR=$(git rev-parse --show-toplevel)

cd $ROOT_DIR/backend
./start.sh &

cd $ROOT_DIR/web
./start.sh &

echo "Press ctrl+c to stop servers."
wait
