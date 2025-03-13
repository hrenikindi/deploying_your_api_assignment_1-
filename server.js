require('dotenv').config();

const config = {
  isKalvian: process.env.IS_KALVIAN === 'true',
};

module.exports = config;

console.log('Configuration:', config);