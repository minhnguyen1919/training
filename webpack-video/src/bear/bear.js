var $ = require('jquery');

// css-loader convert bear.css into javascript code
// style-loader apply javascript code to page

var css = require('./bear.css');

console.log(css);

module.exports = $('<div/>').html('jquery action');
