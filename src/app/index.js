/* jshint esversion: 6 */
import Jasmine from 'jasmine';

let jasmine = new Jasmine();
// modify this line to point to your jasmine.json
jasmine.loadConfigFile('../../spec/support/jasmine.json');
jasmine.execute();
let $ = require("jquery");

require("../style/style.scss");

$('h1').css('color','#555');

var imgElement = document.createElement('img');
 
imgElement.src = require('./images/webpack.png');
 
document.body.appendChild(imgElement);

