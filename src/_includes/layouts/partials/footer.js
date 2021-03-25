module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteFooter', function(data) {

    return /*html*/ `
    <footer>
      <div class="footerWrapper">
        <p><em>Everything you see here at the bottom is in <strong>/src/_includes/layouts/partials/footer.js</strong>.</em></p>
        <p>Any social icons, links, <em>etc.</em> go here.</p>
        <p class="legal">
          Any legalese (copyright notices and the like will go here).
        </p>
      </div>
    </footer>    
    `

  })

}