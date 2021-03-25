module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteHeader', function() {

    return /*html*/ `
    <header>
      <p class="site-logo"><a href="/">Site name goes here</a></p>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-hidden="true" />
      <label for="nav-toggle" class="nav__icon" aria-hidden="true">
        Expand the menu
        <span class="nav__icon-line"></span>
        <span class="nav__icon-line"></span>
        <span class="nav__icon-line"></span>
      </label>
      <nav role="navigation" class="nav">
        <ul class="nav__items">
          <li class="nav__item">
            <a href="/about" title="About">About</a>
          </li>
          <li class="nav__item">
            <a href="/posts" title="Posts">Posts</a>
          </li>
          <li class="nav__item">
            <a href="/privacy" title="Privacy">Privacy</a>
          </li>
          <li class="nav__item">
            <a href="/contact" title="Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    `
  })
}