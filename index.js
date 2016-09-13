var pg = require('pg')
var express = require('express')

var app = express()
app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/static'))

app.get('/', function (request, response) {
  response.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Seriously, what am I doing!?</title><link href="/stylesheets/default.css" rel="stylesheet" /></head><body><img src="/media/img/nodejs.png" /><p>Node. Just... Node, ok?</p></body></html>');
});

app.get('/db/info', function (request, response) {
  if ('true' === process.env.DEBUG) {
    response.send(undefined == process.env.DATABASE_URL ? "Not a single DB URL was given that day..." : process.env.DATABASE_URL)
  } else {
    response.send('I got nothing to say...')
  }
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
});


