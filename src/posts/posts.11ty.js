const { svgFirstPageIcon, svgPrevPageIcon, svgNextPageIcon, svgLastPageIcon } = require( '../assets/svg/svgs.js')

exports.data = {
  layout: 'layouts/_default/base.11ty.js',
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
  const pagerThing = /*html*/ `
  <p class="posts-pagerThingP">
    ${
      data.pagination.href.previous === null 
        ? /*html*/ `${svgFirstPageIcon}${svgFirstPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgFirstPageIcon}</span>`
        : /*html*/ `<a href="${data.pagination.href.first}" class="icon" aria-label="First page">${svgPrevPageIcon}${svgPrevPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.previous}" class="icon" aria-label="Previous page">${svgPrevPageIcon}</a>`      
    }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ${
      data.pagination.href.next === null
        ? /*html*/ `<span class="posts-pagerGray">${svgLastPageIcon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${svgLastPageIcon}${svgLastPageIcon}</span>`
        : /*html*/ `<a href="${data.pagination.href.next}" class="icon" aria-label="Next page">${svgNextPageIcon}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="${data.pagination.href.last}" class="icon" aria-label="Last page">${svgNextPageIcon}${svgNextPageIcon}</a>` 
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
        data.pagination.items.map(post => /*html*/ `
        <div>          
          <h2 class="posts-Title"><a href="${post.url}">${post.data.title}</a></h2>
          <p class="posts-Subtitle">${post.data.subtitle}</p>
          <p class="posts-Dates">
            <time datetime="${this.pub_lastmod(post.date)}}"><strong>${this.pub_lastmod(post.date)}</strong></time>
            ${
              post.data.lastmod
              ? /*html*/ `<br />Last modified <time datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}`
              : ``
            }
          </p>
          <p class="posts-Description">
            ${post.data.description}
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
