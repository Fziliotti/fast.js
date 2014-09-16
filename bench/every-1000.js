var fast = require('../lib'),
    underscore = require('underscore'),
    lodash = require('lodash'),
    history = require('../test/history'),
    utils = require('./utils');

var fns = utils.fns('item', 'return item < 1000');

var input = [];

for (var i = 0; i < 1000; i++) {
  input.push(i);
}


exports['Array::every()'] = function () {
  return input.every(fns());
};

exports['fast.every()'] = function () {
  return fast.every(input, fns());
};

exports['underscore.every()'] = function () {
  return underscore.every(input, fns());
};

exports['lodash.every()'] = function () {
  return lodash.every(input, fns());
};