const fs = require('fs')
var internalCSS = ''
var internalCSSPath = 'src/_includes/css/index.css'
if (process.env.NODE_ENV === 'production') {
  if(fs.existsSync(internalCSSPath)) {
    internalCSS = fs.readFileSync(internalCSSPath)
  }  
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('headTag', function(data) {
    return /*html*/ `
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=10"><!-- due to IE 11 issue with TWCSS -->
    <meta name="generator" content="Eleventy - 11ty - https://11ty.dev - v${require(`@11ty/eleventy/package.json`).version}" />        
    ${
      (data.page.url == "/")
      ? /*html*/ `
      <title>${data.siteparams.siteTitle}</title> 
      <meta property="og:title" content="${data.siteparams.siteTitle}" />
      `
      : /*html*/ `
      <title>${data.title} | ${data.siteparams.siteTitle}</title>
      <meta property="og:title" content="${data.title} | ${data.siteparams.siteTitle}" />
      `
    }

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta name="og:description" content="${data.description
      ? `${data.description}`
      : `${data.siteparams.siteDescription}`
    }" />

    <meta property="og:url" content="${data.page.url
      ? `${data.page.url}`
      : `${data.siteparams.siteURLforOG}`
    }" />

    <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon.png">

    ${ process.env.NODE_ENV === 'production' 
      ? /*html*/ `<style>${internalCSS}</style>`
      : /*html*/ `<link rel="stylesheet" href="/css/index.css" type="text/css"  />`
    }
  </head>
    `
  })
}