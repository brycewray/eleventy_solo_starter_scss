# Eleventy starter set

**Note**: Further development suspended as of 2021-09-11.

This is a starter set for the [Eleventy](https://11ty.dev) [static site generator (SSG)](https://staticgen.com). See the [online demo](https://eleventy-solo-starter-scss.vercel.app/). Of course, there are many **far better** ones on the [Eleventy “Starter Projects” page](https://www.11ty.dev/docs/starter/)!

*This starter set uses JavaScript templating (.11ty.js). For a version that uses Nunjucks templating, see the [eleventy_solo_starter_njk_scss repo](https://github.com/brycewray/eleventy_solo_starter_njk_scss).*

## How to use

1. Clone this to a local repo.
2. Make appropriate changes to `/_data/metadata.json` and `_data/siteparams.json` to conform to your site’s parameters.
3. Run `npm install` to load all the dependencies in `package.json`, which includes Eleventy.
4. Run `npm run start` from your terminal app. You can then view the site in [http://localhost:3000](http://localhost:3000) on your computer.
5. Read the sample posts and their Markdown files to see how everything works.
6. Edit the content to make it your own!
7. When ready, [deploy the site](https://www.11ty.dev/docs/tutorials/#put-it-on-the-web) to your chosen host.

## What’s under the hood

- Responsive images through the [`eleventy-img` plugin](https://www.11ty.dev/docs/plugins/image/) and an `image` shortcode.
- [Sass/SCSS](https://sass-lang.com).
- [PostCSS](https://postcss.org) for use of [Autoprefixer](https://github.com/postcss/autoprefixer).
- CSS with a hashed file name in production mode, for [caching](https://web.dev/love-your-cache/) purposes. In development mode, the CSS comes from a locally called `index.css` file.