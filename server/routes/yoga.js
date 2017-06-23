'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../../knex');
const humps = require('humps');
const bcrypt = require('bcrypt');

router.get('/yoga', (req, res, next) => {
  console.log("in yoga");
  res.send({"a": "yes"});
});

module.exports = router;
