exports.data = {
  layout: 'base'
}

exports.render = function (data) {

  // restructuring for easier reading/typing
  // ... https://wesbos.com/destructuring-objects
  const { content, page, nextPost, prevPost } = data

  return /*html*/ `
<main class="pt-12">
  ${this.billBoard(data)}
  <div class="post-line"></div>
  <div class="container-narrower">
    <article>
      ${content}
    </article>
  </div>
  
  ${page.url !== "/about/"
    ? /*html*/ `<div class="bg-dark">
    <h3 class="ctr wht prevnextH3"><em><a href="/posts">Other posts</a></em></h3>
    ${nextPost && data.nextPost.url !== null
      ? /*html*/ `<p class="ctr prevnextP">
        <strong>Next</strong>: 
        <a class="next" href="${nextPost.url}">${nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${prevPost && data.prevPost.url !== null
      ? /*html*/ `<p class="ctr prevnextP">
        <strong>Previous</strong>: 
        <a class="next" href="${prevPost.url}">${prevPost.data.title}</a>
      </p>`
      : ``
    }
    </div>`
    : ``
  }
</main>
`
}