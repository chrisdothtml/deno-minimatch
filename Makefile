build:
	yarn rollup -c
	yarn terser --compress -- dist/index.js -o dist/index.js -b "beautify=false,preamble='//@ts-ignore'"

tests:
	deno index.test.js
