require('dotenv').config();
const fs = require('fs');

const packageJson = require('./package.json');

const homepage =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_HOMEPAGE : '';

packageJson.homepage = homepage;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
