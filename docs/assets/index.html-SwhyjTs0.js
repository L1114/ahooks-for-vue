import{_ as c,r as a,o as l,c as u,a as s,e as t,f as e,d as n}from"./app-d2pSaZpu.js";const i={},d=n(`<h1 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h1><p>通过设置 <code>options.debounceWait</code>，进入防抖模式，此时如果频繁触发 <code>run</code> 或者 <code>runAsync</code>，则会以防抖策略进行请求。</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  debounceWait<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上示例代码，频繁触发 <code>run</code>，只会在最后一次触发结束后等待 300ms 执行。</p><p>你可以在下面 input 框中快速输入文本，体验效果</p>`,5),r=n(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mockFetchFast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ahooks-for-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>mockFetchFast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">debounceWait</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">manual</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>run<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    data:{{ loading ? &quot;loading...&quot; : data }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>`,3),k={href:"https://www.lodashjs.com/docs/lodash.debounce/",target:"_blank",rel:"noopener noreferrer"},m=n('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>debounceWait</td><td>防抖等待时间, 单位为毫秒，设置后，进入防抖模式</td><td><code>number</code></td><td>-</td></tr><tr><td>debounceLeading</td><td>在延迟开始前执行调用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>debounceTrailing</td><td>在延迟结束后执行调用</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>debounceMaxWait</td><td>允许被延迟的最大值</td><td><code>number</code></td><td>-</td></tr></tbody></table><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><ul><li><s><code>options.debounceWait</code>、<code>options.debounceLeading</code>、<code>options.debounceTrailing</code>、<code>options.debounceMaxWait</code> 支持动态变化</s>。</li><li><code>runAsync</code> 在真正执行时，会返回 <code>Promise</code>。在未被执行时，不会有任何返回。</li><li><code>cancel</code> 可以中止正在等待执行的函数。</li></ul>',3);function v(b,g){const o=a("useRequest-debounce-demo"),p=a("ExternalLinkIcon");return l(),u("div",null,[d,s(o),r,t("p",null,[e("debounce 所有参数用法和效果同 "),t("a",k,[e("lodash.debounce"),s(p)])]),m])}const _=c(i,[["render",v],["__file","index.html.vue"]]);export{_ as default};
