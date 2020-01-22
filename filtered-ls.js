"use strict"
const fs = require("fs")
const path = require('path');

const dirPath = process.argv[2]
const extName = process.argv[3]

fs.readdir(dirPath, function (err, files) { 
  if (err) return console.log(err)
  filterFiles(files)
})

function filterFiles(files){
  files.forEach(file => {
    let extension = path.extname(file);
    extension = extension.substring(1);
    if (extension == extName) console.log(file) 
  });
}


// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
