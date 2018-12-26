build:
	yarn rollup -c
	yarn terser --compress -- index.js -o index.js -b "beautify=false,preamble='//@ts-ignore'"

tests:
	deno index.test.js
