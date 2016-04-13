# Developing

## Pre-Requisites

Ensure you have the following software installed:

* An IDE (Intellij has excellent support for typescript)
* git
* NodeJS v5+ and npm
 * Project dependencies: `npm install`
* Heroku toolbelt

## Building

* clean: npm run-script clean
* build: npm run-script build
* test: npm test
* run: npm start

## Continuous Deployment

Pushes to feature branches on github are tested by CircleCI. A passing build
is a pre-requisite for merging a pull request.

Pull requests merged to master are tested by CircleCI again and if they pass,
they are automatically pushed to the beta app hosted on Heroku.

Releases cut on github (i.e. tags on master named release-xxxxx) are tested by
CircleCI then pushed automatically to the production app hosted on Heroku.
