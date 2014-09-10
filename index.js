// this is the atomify build file
// it contains all of the information 
// to build the project
// and run it in dev mode
//
var atomify = require('atomify');

atomify({
  js: {
    entry: 'app/index.js',
    output: 'public/bundle.js'
  },
  css: {
    entry: 'app/index.less',
    output: 'public/bundle.css',
    assets: {
      prefix: 'fonts/',
      dest: 'public/fonts'
    }
  },
  server: {
    lr: {
      sync: true,
      patterns: 'app/*.css'
    },
    port: 1339,
    st: {
      path: 'public',
      index: 'index.html'
    }
  }
});