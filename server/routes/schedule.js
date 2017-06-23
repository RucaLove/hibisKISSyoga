'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../../knex');
const humps = require('humps');
const bcrypt = require('bcrypt');

router.get('/schedule', (req, res, next) => {
  console.log("in schedule");
  res.send({"a": "yes"});
});

module.exports = router;
