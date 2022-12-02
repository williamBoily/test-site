#!/bin/sh
set -e

docker run \
  --rm \
  -it \
  -d \
  -p 127.0.0.1::80 \
  --name test-site \
  -v "$(pwd)"/site:/usr/share/nginx/html \
  railway-local/husky-pies-production:latest

docker port test-site | sed -E 's/.*:(.*)$/Running at http:\/\/127.0.0.1:\1/'
docker logs test-site
docker attach test-site
