exports.data = {
  layout: 'base'
}

exports.render = function (data) {
  return /*html*/ `
<main class="pt-12">
  ${this.billBoard(data)}
  <div class="post-line"></div>
  <div class="container-narrower">
    <article>
      ${data.content}
    </article>
  </div>
  
  ${data.page.url !== "/about/"
    ? /*html*/ `<div class="bg-dark">
    <h3 class="ctr wht prevnextH3"><em><a href="/posts">Other posts</a></em></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? /*html*/ `<p class="ctr prevnextP">
        <strong>Next</strong>: 
        <a class="next" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? /*html*/ `<p class="ctr prevnextP">
        <strong>Previous</strong>: 
        <a class="next" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
      </p>`
      : ``
    }
    </div>`
    : ``
  }
</main>
`
}