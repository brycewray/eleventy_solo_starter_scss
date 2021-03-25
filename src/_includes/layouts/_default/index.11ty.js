exports.data = {
  layout: 'layouts/_default/base.11ty.js',
}

exports.render = function (data) {
  return /*html*/ `
  <main>
    <div class="container-home">
      <div class="homeOpen">
        <h1>Home page</h1>
        <p>This sentence comes from the template.</p>
        <div>${data.content}</div>
      </div>
      <div class="homePost-Div">
        <div class="post-line"></div>
        <h2 class="homePost-Latest">Latest <a href="/posts/">posts</a></h2>
        ${
          data.collections.post.slice(-3).reverse().map(post => /*html*/ `
        <div>
          <h2 class="homePost-Title"><a href="${post.url}">${post.data.title}</a></h2>
          <p class="homePost-Subtitle">${post.data.subtitle}</p>
          <p class="homePost-Dates">
            <time datetime="${this.pub_lastmod(post.date)}}"><strong>${this.pub_lastmod(post.date)}</strong></time>
            ${
              post.data.lastmod
              ? /*html*/ `
            <br />Last modified <time datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}</time>
              `
              : ``
            }
          </p>
          <p class="homePost-Description">
            ${post.data.description}
          </p>
        </div>
          ` 
        ).join('')}

        <p style="margin-top: 2em;"><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="pokey"><em>(listed five per page)</em></span></p>
      </div>
    </div>
  </main>
  `
}
