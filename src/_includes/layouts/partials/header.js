module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteHeader', function() {

    return /*html*/ `
    <header>
      <nav
        x-data="{ isOpen: false }"
        @keydown.escape="isOpen = false"
      >
        <!--Logo etc-->
        <div class="nav-Container">
          <a
            class="nav-LogoLink" 
            aria-label="This site's “BW” logo"
            href="/"
          >
            Site name goes here
          </a>
        </div>

        <!--Toggle button (hidden on large screens)-->
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="nav-HamburgerButton"
          :class="{ 'nav-HamburgerButtonAlpine': isOpen }"
          aria-label="Open mobile menu"
        >
          <svg
            class="nav-HamburgerLogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              x-show="isOpen"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              x-show="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <!--Menu-->
        <div
          class="nav-Menu" 
          :class="{ 'nav-MenuAlpine': isOpen, 'hidden': !isOpen }"
          @click.away="isOpen = false"
          x-show.transition="true"
        >
          <ul
            class="nav-MenuUL"
          >
            <li class="nav-MenuLI">
              <a
                class="nav-MenuLILink"
                href="/about"
                @click="isOpen = false"
                >About
              </a>
            </li>
            <li class="nav-MenuLI">
              <a
                class="nav-MenuLILink"
                href="/posts"
                @click="isOpen = false"
                >Posts
              </a>
            <li class="nav-MenuLI">
              <a
                class="nav-MenuLILink"
                href="/privacy"
                @click="isOpen = false"
                >Privacy
              </a>
            <li class="nav-MenuLI">
              <a
                class="nav-MenuLILink"
                href="/contact"
                @click="isOpen = false"
                >Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `
  })
}