module.exports = eleventy => {
  eleventy.setBrowserSyncConfig(require('./bs-config.js'));

  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventy.addDataExtension('yml', require('./lib/extensions/yaml.js'));

  eleventy.addFilter('date_with_ordinal', require('./lib/filters/date_with_ordinal.js'));
  eleventy.addFilter('prettify', require('./lib/filters/prettify.js'));

  eleventy.addPassthroughCopy('./src/assets/images');
  eleventy.addPassthroughCopy('./src/favicon.ico');
  eleventy.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
