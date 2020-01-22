'use strict'
const fs = require('fs')
const filePath = process.argv[2]
const fileBuffer = fs.readFileSync(filePath)
const fileStr = fileBuffer.toString()
const splitLines = fileStr.split("\n");
console.log(splitLines.length - 1)
