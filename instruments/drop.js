const { drop: lodashDrop } = require('lodash');

const drop = (...args) => lodashDrop(...args);

module.exports = { drop };