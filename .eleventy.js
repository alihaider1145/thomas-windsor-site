module.exports = function (eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy('src/assets');

  // Copy admin folder for CMS
  eleventyConfig.addPassthroughCopy('src/admin');

  // Create paintings collection - CORRECT PATH
  eleventyConfig.addCollection('paintings', function (collectionApi) {
    const paintings = collectionApi.getFilteredByGlob(
      './src/assets/paintings/*.md'
    );
    console.log('Found paintings:', paintings.length);
    paintings.forEach((p) => console.log(' -', p.inputPath));
    return paintings;
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
