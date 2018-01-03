const path = require('path');
/*const slug = require('slug');*/
const browser = require('./browser.js');
const options = require('./options.js');
before((done) => {
  browser.setOptions(options);
  browser.setUp(done);
});
after(() => {
  browser.close();
});