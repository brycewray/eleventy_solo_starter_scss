module.exports = function(eleventyConfig) {

  // restructuring for easier reading/typing
  // ... https://wesbos.com/destructuring-objects

  eleventyConfig.addShortcode('billBoard', function({ title, subtitle, description, page, lastmod }) {
    const { date } = page

    return /*html*/ `
    <div class="billboard-div">
      <h1 class="billboard-title-text">${title}</h1>
      <h2 class="billboard-subtitle-text">
          ${
            subtitle
              ? subtitle
              : /*html*/ `&nbsp;`
          }
      </h2>
      <p class="billboard-description-text">${description}</p>
      <p class="billboard-p-text"><strong>${this.pub_lastmod(page.date)}</strong><br />
        <span style="font-size: 75%;">
        ${
          lastmod !== null && lastmod !== undefined
          ? /*html*/ `Last modified ${this.pub_lastmod(lastmod)}`
          : /*html*/ `&nbsp;`
        }
        </span>
      </p>
    </div>   
    `

})

}