module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/css/style.css');
  eleventyConfig.addPassthroughCopy('src/assets/css/reset.css');
  eleventyConfig.addPassthroughCopy('src/admin');
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
    templateFormats: ['html', 'njk', 'md', 'css'],
  };
};
