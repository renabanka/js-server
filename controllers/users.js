var express = require('express');
var ctrl = express.Router();


var users = [
  {
    email: 'renabanka@gmail.com',
    password: 'thebest',

  },

  {
    email: 'test@test.com',
    password: 'test',
  },

  {
    email: 'test1@test.com',
    password: 'test123'
  }
]

function findUserById(id) {
  var offsetIndex = id - 1;
  return users [offsetIndex];
};

/* GET users listing. */
ctrl.get('/', function(req, res, next) {
  res.json(users);
});

ctrl.get('/:id', function(req, res, next) {
  console.log(req.params);
  var id = parseInt(req.params.id);

  if(typeof id ==='number') {
    res.json(findUserById(id));
  }

  res.json({
    message: 'user not found'
  });
});

module.exports = ctrl;
