#!/usr/bin/env bash

cd backend
./start.sh &

#cd web
#./start.sh &

echo "Press ctrl+c to stop servers."
wait
