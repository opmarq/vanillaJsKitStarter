/* jshint esversion: 6 */

let $ = require("jquery");

require("../style/style.scss");

$('h1').css('color','#555');

var imgElement = document.createElement('img');
 
imgElement.src = require('./images/webpack.png');
 
document.body.appendChild(imgElement);

