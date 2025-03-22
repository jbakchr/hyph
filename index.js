#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { program } = require("commander");

program.argument("<string...>", "String to create dir for").action((str) => {
  const dirname = path.join(process.cwd(), str.join("-"));

  if (fs.existsSync(dirname)) {
    console.log("Folder already exists");
  } else {
    fs.mkdirSync(dirname);
  }
});

program.parse();
