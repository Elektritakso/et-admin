#!/bin/sh
#sudo MONGO_URL=mongodb://localhost:27017/elektritakso meteor --port 3000 --settings  settings.json --mobile-server http://dev.elektritakso.net:3000

#MONGO_URL=mongodb://localhost:27017/elektritakso meteor --allow-incompatible-update --port 3000 --settings  settings.json
MONGO_URL="mongodb://etdbadmin:uvJImuhnsSJ8gw6Q@et-shard-00-00-lbkjh.gcp.mongodb.net:27017,et-shard-00-01-lbkjh.gcp.mongodb.net:27017,et-shard-00-02-lbkjh.gcp.mongodb.net:27017/elektritakso?ssl=true&replicaSet=ET-shard-0&authSource=admin" meteor --port 3000 --settings  settings.json
