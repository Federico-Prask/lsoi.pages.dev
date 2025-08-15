<template>
  <div class="post-content">
    <!-- <h1>欢迎来到信息组博客</h1>
    <time>2023-10-20</time>
    
    <div class="content">
      <p>这是我们的第一篇技术博客文章。</p>
      
      <h2>主要特点</h2>
      <ul>
        <li>基于 Vue 3 构建</li>
        <li>响应式设计</li>
        <li>支持深色模式</li>
      </ul>
      
      <div class="code-block">
        <pre><code>console.log('Hello World!')</code></pre>
      </div>
    </div> -->
    <h1>Welcome to the LSOI Blogs</h1>
    <time>2025-08-15</time>
    <div class="content">
      <p>本网站由&nbsp;Github&nbsp;@<a href = "https://github.com/Federico-Prask">Federico-Prask</a>&nbsp;维护，
      由&nbsp;Github&nbsp;@<a href = "https://github.com/Federico-Prask">Federico-Prask</a>&nbsp;开发。</p>
      <h3>
        开发者的话
      </h3>
      <p>
        其实本来是有一个&nbsp;LSOI&nbsp;的网站的（由前学长开发），但是我访问时发现已经停止维护了（链接是：https://lsoi.top/），所以想要再开发一个网站，用于我们自己使用。
      </p>
      <p>
        由于我学过一些前端，同时还知道有&nbsp;CloudFlare&nbsp;的免费域名服务提供，我就立马注册了&nbsp;lsoi.pages.dev&nbsp;这个域名，并将网站部署到&nbsp;CloudFlare&nbsp;上。
      </p>
      <p>
        网站的主要功能是供同学们使用，发帖、发博客、刷帖、等等，都是可以的。
      </p>
      <p>
        本网站主要由四个部分组成：周报、博客、帖子、关于。
      </p>
      <h3>
        周报部分
      </h3>
      <p>
        周报部分就是用来发表一周的重大事项，比如周总结、考试情况、作业情况等等，也包括一些好的学习文章。
      </p>
      <h3>
        博客部分
      </h3>
      <p>
        本文是博客部分的第一篇，当然，作为自己内部的博客，格式是不做要求的。不过为了能够使得更加的好看，方便大家阅读，这里还是推荐大家参照洛谷的博客格式来写博客。
      </p>
      <h3>
        帖子部分
      </h3>
      <p>
        帖子就是正常的发帖，没什么特别的。
      </p>
      <h3>
        关于部分
      </h3>
      <p>
        关于部分主要是用来介绍同学的，开发者（我）的想法是记录大家，包括个人的照片、获得的奖项……等等，当然，那些都是之后应该开发的内容了。
      </p>
      <h2>
        注意
      </h2>
      <p>
        由于网站是使用&nbsp;Vue&nbsp;3&nbsp;开发的，所以可能会有一些兼容性问题，希望大家能够提出宝贵意见。<br>
        另外，本网站的评论功能暂时还没有开发，后续可能添加（大概率不会，因为没钱买服务器，如果有的话域名也要一起换）。<br>
        同时，如果你希望投稿，请提供&nbsp;Markdown&nbsp;格式的文章，并在文章开头注明作者、来源、时间等信息，这有助于我将它转换格式，方便我将你的文章放在网站上（最好发邮件给我），谢谢。
      </p>
      <p>
        最后，祝大家学习愉快！
      </p>
      <p>
        <br>
        <br>
        <br>
        本网站使用 Vue 3 + Vite + Tailwind CSS 开发，部署于 CloudFlare Pages。
        <br>
        源码同步于&nbsp;<a href = "https://github.com/Federico-Prask/lsoi.pages.dev">Github</a>。
        <br>
        本网站遵守&nbsp;<a href = "https://www.gnu.org/licenses/gpl-3.0.html">GNU-GPL&nbsp;v3.0&nbsp;开源协议</a>，可在本网站中<a href = "./GNU-GPLv3.0">阅读</a>。使用或复制代码中的部分内容请标明来源，并遵守开源协议。
      </p>
    </div>
  </div>
</template>

<script setup>
// 使用 <script setup> 语法，默认导出组件
const title = "介绍 | LSOI Blogs"
const date = "2025-08-15"
</script>

<style scoped>
.post-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

a {
  color: var(--vp-c-brand-dark);
}

.dark a{
  color: var(--vp-c-brand-light);
}

time {
  color: var(--vp-c-text-2);
  display: block;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.6;
}

.code-block {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>