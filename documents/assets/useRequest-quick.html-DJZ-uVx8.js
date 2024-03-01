import{_ as s,o as n,c as a,b as e}from"./app-oqrRuz-r.js";const t={},c=e(`<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><p><code>useRequest</code> 是一个强大的异步数据管理的 Vue 项目中的网络请求场景使用 <code>useRequest</code> 就够了 <code>(划线代表暂未实现)</code>。</p><p><code>useRequest</code> 通过<s>插件式组织代码，并且可以很方便的扩展出更高级的功能</s>。目前已有能力包括：</p><ul><li>自动请求/手动请求</li><li><s>轮询</s></li><li><s>防抖</s></li><li>节流</li><li><s>屏幕聚焦重新请求</s></li><li><s>错误重试</s></li><li><s>loading delay</s></li><li><s>缓存</s></li></ul><p>接下来让我们先从两个最简单的例子认识 <code>useRequest</code>。</p><h1 id="默认用法" tabindex="-1"><a class="header-anchor" href="#默认用法" aria-hidden="true">#</a> 默认用法</h1><p><code>useRequest</code> 的第一个参数是一个异步函数，在组件初次加载时，会自动触发该函数执行。同时自动管理该异步函数的 <code>loading</code> , <code>data</code> 等状态。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="手动触发" tabindex="-1"><a class="header-anchor" href="#手动触发" aria-hidden="true">#</a> 手动触发</h1><p>如果设置了 <code>options.manual = true</code>，则 useRequest 不会默认执行，需要通过 <code>runAsync</code> 来触发执行,返回<code>Promise</code>,无需手动接收返回的数据,可直接使用 useRequest 返回的<code>data</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> runAsync<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>changeUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">manual</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>上面两个例子，我们演示了 <code>useRequest</code> 最基础的用法，接下来的我们开始逐个详细介绍 <code>useRequest</code> 的特性。</p>`,13),o=[c];function p(u,i){return n(),a("div",null,o)}const d=s(t,[["render",p],["__file","useRequest-quick.html.vue"]]);export{d as default};
