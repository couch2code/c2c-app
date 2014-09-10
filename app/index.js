var domify = require('domify');

document.body.appendChild(
  domify('<div class="container"><h1>Hello World</h1></div>')
);