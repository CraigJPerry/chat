PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

server_bundle := build/server/server.js
mutual_source := $(wildcard src/mutual/*.html)
mutual_output := build/mutual
tests         := $(wildcard build/*-test/*.js)

.PHONY: all clean test

all: $(server_bundle)

$(server_bundle):
	tsc
	mkdir -p $(mutual_output)
	cp $(mutual_source) $(mutual_output)

clean:
	rm -rf build
	rm -f test-results.xml

test:
	tsc
	mocha --reporter mocha-circleci-reporter $(tests)
