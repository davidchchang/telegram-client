module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var userFixtures = {
    'davidchchang': {
      id: 'davidchchang',
      name: 'David Chang',
      email: 'david@telegram.com',
      password: '123'
    },
    'andreisoare': {
      id: 'andreisoare',
      name: 'Andrei Soare',
      email: 'andrei@telegram.com',
      password: '123'
    },
    'octavdruta': {
      id: 'octavdruta',
      name: 'Octav Druta',
      email: 'octav@telegram.com',
      password: '123'
    },
    'jeresig': {
      id: 'jeresig',
      name: 'John Resig',
      email: 'john@telegram.com',
      password: '123'
    },
    'marissamayer': {
      id: 'marissamayer',
      name: 'Marissa Mayer',
      email: 'marissa@telegram.com',
      password: '123'
    },
    'newsycombinator': {
      id: 'newsycombinator',
      name: 'Hacker News',
      email: 'ycomb@telegram.com',
      password: '123'
    },
    'google': {
      id: 'google',
      name: 'Google',
      email: 'google@telegram.com',
      password: '123'
    }
  };

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': []
    });
  });

  usersRouter.post('/', function(req, res) {
    var userIds = Object.keys(userFixtures);

    if (!req.body || !req.body.user) {
      return res.status(404).send('Missing request body parameters');
    }

    var userid = req.body.user.id;

    if (!userid || (userid.trim && !userid.trim())) {
      return res.status(404).send('User ID cannot be blank');
    }

    if (req.body.user.meta.operation === 'signup') {
      if (userIds.indexOf(userid) !== -1) {
        return res.status(404).send('User already exists');
      }

      var user = {
        id: req.body.user.id,
        name: req.body.user.name,
        email: req.body.user.email,
        password: req.body.user.meta.password
      };

      // existential checks for mandatory fields
      if (!user.name || (user.name.trim && !user.name.trim())) {
        return res.status(404).send('Name must not be empty');
      }
      if (!user.email || (user.email.trim && !user.email.trim())) {
        return res.status(404).send('Email cannot be blank');
      }
      if (!user.password || (user.password.trim && !user.password.trim())) {
        return res.status(404).send('Password cannot be blank');
      }

      userFixtures[userid] = user;
      return res.status(201).send({user: user});
    }

    return res.status(400).send('Unsupported operation: ' + req.body.user.meta.operation);
  });

  usersRouter.get('/:id', function(req, res) {
    var userIds = Object.keys(userFixtures),
      userid = req.params.id;

    if (userIds.indexOf(userid) === -1) {
      return res.status(404).send('User ' + userid + ' not found');
    }

    res.status(200).send({
      user: userFixtures[userid]
    });
  });

  usersRouter.put('/:id', function(req, res) {
    var userIds = Object.keys(userFixtures);

    if (!req.body || !req.body.user) {
      return res.status(404).send('Missing request body parameters');
    }

    var userid = req.params.id;

    if (!userid || (userid.trim && !userid.trim())) {
      return res.status(404).send('User ID cannot be blank');
    }

    if (req.body.user.meta.operation === 'login') {
      if (userIds.indexOf(userid) === -1) {
        return res.status(404).send('User ' + userid + ' not found');
      }
      if (req.body.user.meta.password !== userFixtures[userid].password) {
        return res.status(404).send('Invalid password');
      }
      return res.status(200).send({user: userIds[userid]});
    }

    return res.status(400).send('Unsupported operation: ' + req.body.user.meta.operation);
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
