"use strict"
const fs = require("fs")
let filePath = process.argv[2]
fs.readFile(filePath, finishedReading)
function finishedReading(error, data){
  if (error) {
    return console.log(error)
  }
  let lineCount = data.toString().split("\n").length - 1
  console.log(lineCount)
}
