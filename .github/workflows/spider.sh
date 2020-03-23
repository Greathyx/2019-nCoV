#!/bin/bash

while :
do
    curl "https://raw.githubusercontent.com/canghailan/Wuhan-2019-nCoV/master/Wuhan-2019-nCoV.json" >> "../src/data/data.json"
done
