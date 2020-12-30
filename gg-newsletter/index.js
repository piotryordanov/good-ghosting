const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const async = require("async");



const redis = require("redis");
const { response } = require('express');
const client = redis.createClient(process.env.REDIS_URL);
const send_email = require("./src/send_email")

const app = require('express')()
const basicAuth = require('express-basic-auth')
/*
var customBodyAuth = basicAuth({
    users: { 'Foo': 'bar' },
    challenge: true // <--- needed to actually show the login dialog!
})
*/


client.on("error", function(error) {
  console.error(error);
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({extended: true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/add_email/:eth_address/:email_address', (req, res) => {
    client.set(req.params.eth_address, req.params.email_address, redis.print);
    send_email(req.params.email_address);
    res.send("OK");
  })
  .use(basicAuth({users: {"foo":"bar"}, challenge: true}))
  .get('/view_all', (req, res) =>
      client.keys('*', function (err, keys) {
          if (err) return console.log(err);
          if(keys){
              async.map(keys, function(key, cb) {
                client.get(key, function (error, value) {
                      if (error) return cb(error);
                      var job = {};
                      job['eth']=key;
                      job['email']=value;
                      cb(null, job);
                  }); 
              }, function (error, results) {
                if (error) return console.log(error);
                console.log(results);
                res.render("pages/view_all", {data: results})
              });
          }
      })
  )
  .get('/view_address/:address', (req, res) => 
    client.get(req.params.address, function(err, reply) {
      res.send(reply);
    })
  )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
