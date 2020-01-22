const fs = require("fs")
const path = require("path");

module.exports = function (dir, extension, callback) {
  var ext = "." + extension
  fs.readdir(dir, function (err, files) { 
    if (err) return callback(err, null)
    let matchedFiles = []
    files.forEach(file => {
      let extension = path.extname(file);
      if (extension == ext){
         matchedFiles.push(file)
      }
    });  
    callback(null, matchedFiles)
  })
}


// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }