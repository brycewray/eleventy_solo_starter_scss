const { svgFirstPageIcon, svgPrevPageIcon, svgNextPageIcon, svgLastPageIcon } = require( '../assets/svg/svgs.js')

exports.data = {
  layout: 'base',
  tags: ['nav'],
  navtitle: 'Posts',
  title: 'Posts',
  pagination: { 
    data: 'collections.post',
    size: 5,
    reverse: true,
    alias: 'posts'
  }
}

exports.render = function (data) {

  // restructuring for easier reading/typing...
  // https://wesbos.com/destructuring-objects
  // https://stackoverflow.com/questions/65565806/destructure-object-properties-inside-array-prototype-map

  const { previous, next, first, last } = data.pagination.href
  const { items } = data.pagination
  

  const pagerThing = /*html*/ `
  <p class="posts-pagerThingP">
    ${
      previous === null 
        ? /*html*/ `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : /*html*/ `<a href="${first}" class="icon" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${previous}" class="icon" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      next === null
        ? /*html*/ `<span class="posts-pagerGray">${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : /*html*/ `<a href="${next}" class="icon" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${last}" class="icon" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
    }
  </p>
`
  return /*html*/ `
<main>
  <div class="container ctr sansSerif">
    <h1 class="posts-Head">Posts</h1>
    <div>
      ${pagerThing}
      <hr class="paginatorTop" />
      ${
        items.map(
          ({url,
            date,
            data: {
              title,
              subtitle,
              lastmod,
              description
            },
          }) => /*html*/ `
        <div>          
          <h2 class="posts-Title"><a href="${url}">${title}</a></h2>
          <p class="posts-Subtitle">${subtitle}</p>
          <p class="posts-Dates">
            <time datetime="${this.pub_lastmod(date)}}"><strong>${this.pub_lastmod(date)}</strong></time>
            ${
              lastmod
              ? /*html*/ `<br />Last modified <time datetime="${this.pub_lastmod(lastmod)}">${this.pub_lastmod(lastmod)}`
              : ``
            }
          </p>
          <p class="posts-Description">
            ${description}
          </p>
        </div>
        `
        ).join('')
      }
      <hr class="paginatorBottom" />
      ${pagerThing}
		</div>
	</div>

</main>  
  `
}
