const { difference: lodashDifference } = require('lodash');

const difference = (...array) => lodashDifference(...array);

module.exports = { difference }