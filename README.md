# Express, Grunt integration

  "devDependencies": {
    "grunt": "^1.0.1",
    "grunt-browserify": "^5.0.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-cssmin": "^1.0.2",
    "grunt-contrib-less": "^1.4.0",
    "grunt-contrib-uglify": "^2.0.0",
    "grunt-contrib-watch": "^1.0.0"
  },
  "engines": {
    "node": "6.9.x"
  }  

JavaScript: Use Browserify to use Node-like modules (and compile to a single JavaScript), use Uglify to minify JavaScript files.  
LESS: Use contrib-less to compile LESS to CSS files, then use contrib-cssmin to minify CSS files.  

Watch file changes: grunt-contrib-watch

Should use non-minified JS/CSS files for development, and use minified JS/CSS files for production.

Node environment variable (affects Express):  
NODE_ENV=production  
NODE_ENV=development  