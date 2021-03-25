module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('billBoard', function(data) {

    return /*html*/ `
    <div class="billboard-div">
      <h1 class="billboard-title-text">${data.title}</h1>
      <h2 class="billboard-subtitle-text">
          ${
            data.subtitle
              ? data.subtitle
              : /*html*/ `&nbsp;`
          }
      </h2>
      <p class="billboard-description-text">${data.description}</p>
      <p class="billboard-p-text"><strong>${this.pub_lastmod(data.page.date)}</strong><br />
        <span style="font-size: 75%;">
        ${
          data.lastmod !== null && data.lastmod !== undefined
          ? /*html*/ `Last modified ${this.pub_lastmod(data.lastmod)}`
          : /*html*/ `&nbsp;`
        }
        </span>
      </p>
    </div>   
    `

})

}