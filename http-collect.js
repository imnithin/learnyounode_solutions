"use strict"
var http = require('http')
var bl = require('bl')

var url = process.argv[2];

http.get(url, function(response) {
  var result = ""
  response.setEncoding("utf8")
  response.on('data', function(data){
    result += data
  })
  response.on('end', function(data){
    console.log(result.length)
    console.log(result)
  })
})

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })