#!/usr/bin/env node

const fs = require("node:fs");
const { program } = require("commander");

program.argument("<string...>", "String to create dir for").action((str) => {
  const dirname = str.join("-");
  fs.mkdirSync(dirname);
});

program.parse();
