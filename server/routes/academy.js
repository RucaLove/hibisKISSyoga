'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../../knex');
const humps = require('humps');
const bcrypt = require('bcrypt');

router.get('/academy', (req, res, next) => {
  console.log("in academy");
  res.send({"a": "yes"});
});

module.exports = router;
