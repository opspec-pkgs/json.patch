const fs = require('fs');
const fastJsonPatch = require('fast-json-patch');

const target = require('/target.json');
const operations = require('/operations.json');

const result = fastJsonPatch.applyPatch(target, operations).newDocument;

fs.writeFileSync('/result', JSON.stringify(result));
