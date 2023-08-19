import{_ as a,r,o as d,c as s,a as e,b as i,d as l,e as v}from"./app-8f68cf33.js";const c={},u=e("h1",{id:"vuerouter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuerouter","aria-hidden":"true"},"#"),i(" VueRouter")],-1),t=e("h2",{id:"学习路线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#学习路线","aria-hidden":"true"},"#"),i(" 学习路线")],-1),o={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},m=v(`<h2 id="什么是-路由" tabindex="-1"><a class="header-anchor" href="#什么是-路由" aria-hidden="true">#</a> 什么是 路由</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>Vue Router 是 Vue.js 的官方路由
它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举

// 路由说白了就会说 url路径/地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由的功能" tabindex="-1"><a class="header-anchor" href="#路由的功能" aria-hidden="true">#</a> 路由的功能</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>嵌套路由映射
动态路由选择
模块化、基于组件的路由配置
路由参数、查询、通配符
展示由 Vue.js 的过渡系统提供的过渡效果
细致的导航控制
自动激活 CSS 类的链接
HTML5 history 模式或 hash 模式
可定制的滚动行为
URL 的正确编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由安装-下载" tabindex="-1"><a class="header-anchor" href="#路由安装-下载" aria-hidden="true">#</a> 路由安装/下载</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>  // 路由是 生产依赖   -S   --save
  npm install vue-router@4 -S
  npm install vue-router@4 --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由的文件" tabindex="-1"><a class="header-anchor" href="#路由的文件" aria-hidden="true">#</a> 路由的文件</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>  // 路由文件是 js文件
  index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由的创建" tabindex="-1"><a class="header-anchor" href="#路由的创建" aria-hidden="true">#</a> 路由的创建</h2><blockquote><p>路由的创建 4+1 个步骤</p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>  // 步骤一 : semodole规范导入路由模块
  import { createRouter, createWebHistory } from &#39;vue-router&#39;;

  // 步骤二 : 定义路由
  const routes = [
      {
          // path路径字段
          path : &#39;/&#39; ,

          // 动态组件
          component : () =&gt; import (&#39;在根目录下的路径地址&#39;)
      }
  ];

  // 步骤三 : 创建路由
  const router = createRouter({
      history: createWebHistory(),
      routes,
  });

  // 步骤四 : 导出路由
  export default router;



  // 步骤五 : 注册组件/挂载组件
  // 需要去 全局的 main.js文件
  import router from &#39;路由的地址&#39;;
  app.use(router);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用路由" tabindex="-1"><a class="header-anchor" href="#如何使用路由" aria-hidden="true">#</a> 如何使用路由</h2><blockquote><p>我们需要做的就是将我们的组件映射到路由上</p></blockquote><ul><li><p>router-link 组件的导航</p><blockquote><p><code>router-link</code> 就相当于 a 标签</p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// to就相当于 a标签的herf
// 通过router-link 组件来进行导航
// 通过传递 to 来指定链接
// 在页面上呈现的时候 就是一个 a标签
&lt;router-link to=&quot;/&quot;&gt;Go to Home&lt;/router-link&gt;

// a标签 和 router-link 的区别
// 区别1 : 不需要重新加载页面的情况下更改 URL/路由
// 区别2 : 处理 URL/路由 的生成以及编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>router-view 路由出口</p><blockquote><p><code>router-view</code> 将显示与 url/路由 对应的组件</p><p>可以放在任意位置</p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 路由出口
// 路由匹配到的组件将渲染在这里
&lt;router-view&gt;&lt;/router-view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="vue-router-路由-实例方法" tabindex="-1"><a class="header-anchor" href="#vue-router-路由-实例方法" aria-hidden="true">#</a> Vue-router/路由 实例方法</h2><blockquote><p>可以在 任意组件中使用它</p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>this.$route
// 获取当前的活动路由信息（路径，参数）


this.$router
// 获取路由实例对象（前进，后退，跳转的操作）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h2>`,18);function b(h,p){const n=r("ExternalLinkIcon");return d(),s("div",null,[u,t,e("p",null,[e("a",o,[i("Vue_Router 基础教程"),l(n)])]),m])}const S=a(c,[["render",b],["__file","VueRouter.html.vue"]]);export{S as default};
