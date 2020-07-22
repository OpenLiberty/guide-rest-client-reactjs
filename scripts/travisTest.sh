#!/bin/bash
#set -euxo pipefail

##############################################################################
##
##  Travis CI test script
##
##############################################################################

# LMP 3.0+ goals are listed here: https://github.com/OpenLiberty/ci.maven#goals

## Rebuild the application
#       package                   - Take the compiled code and package it in its distributable format.
#       liberty:create            - Create a Liberty server.
#       liberty:install-feature   - Install a feature packaged as a Subsystem Archive (esa) to the Liberty runtime.
#       liberty:deploy            - Copy applications to the Liberty server's dropins or apps directory.
mvn clean package
echo package: $?
mvn -q liberty:create
echo create: $?
mvn -q liberty:install-feature
echo install: $?
mvn liberty:deploy
echo deploy OL: $?

## Run the tests
# These commands are separated because if one of the commands fail, the test script will fail and exit.
# e.g if liberty:start fails, then there is no need to run the failsafe commands.
#       liberty:start             - Start a Liberty server in the background.
#       failsafe:integration-test - Runs the integration tests of an application.
#       liberty:stop              - Stop a Liberty server.
#       failsafe:verify           - Verifies that the integration tests of an application passed.
mvn liberty:start
if [ $? == 0 ]; then echo start OK; else echo start Not OK; exit 1; fi;

curl http://localhost:9080

status="$(curl --write-out "%{http_code}\n" --silent --output /dev/null "http://localhost:9080")"; if [ "$status" == "200" ]; then echo ENDPOINT OK; else echo "$status"; echo ENDPOINT NOT OK; exit 1; fi;

mvn liberty:stop
