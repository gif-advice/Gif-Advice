const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')

const publicRuntimeConfig = {
      API_KEY: 'CseJQd1s25sCLQ6relPLkbuCcJghBxRY'
    }
  
module.exports = withPlugins([ 
  [optimizedImages, {

}],
  
  [publicRuntimeConfig, {
  }],

  [withSass, {
    cssModules: true
  }]
]);


