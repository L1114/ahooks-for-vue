import{_ as c,r as s,o as l,c as i,a,e as t,f as e,d as n}from"./app-d2pSaZpu.js";const u={},r=n(`<h1 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h1><p>通过设置 <code>options.throttleWait</code>，进入节流模式，此时如果频繁触发 <code>run</code> 或者 <code>runAsync</code>，则会以节流策略进行请求。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">throttleWait</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token literal-property property">manual</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上示例代码，频繁触发 <code>run</code>，只会每隔 300ms 执行一次。</p><p>你可以在下面 input 框中快速输入文本，体验效果</p>`,5),d=n(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mockFetchFast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ahooks-for-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>mockFetchFast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">throttleWait</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">manual</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// throttleTrailing: false,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="api-options" tabindex="-1"><a class="header-anchor" href="#api-options" aria-hidden="true">#</a> API Options</h3>`,2),k={href:"https://www.lodashjs.com/docs/lodash.throttle/",target:"_blank",rel:"noopener noreferrer"},m=n('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>throttleWait</td><td>节流等待时间, 单位为毫秒，设置后，进入节流模式</td><td><code>number</code></td><td>-</td></tr><tr><td>throttleLeading</td><td>在节流开始前执行调用</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>throttleTrailing</td><td>在节流结束后执行调用</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><ul><li><s><code>options.throttleWait</code>、<code>options.throttleLeading</code>、<code>options.throttleTrailing</code> 支持动态变化</s>。</li><li><code>runAsync</code> 在真正执行时，会返回 <code>Promise</code>。在未被执行时，不会有任何返回。</li><li><code>cancel</code> 可以中止正在等待执行的函数。</li></ul>',3);function v(h,g){const o=s("useRequest-throttle-demo"),p=s("ExternalLinkIcon");return l(),i("div",null,[r,a(o),d,t("p",null,[e("throttle 所有参数用法和效果同 "),t("a",k,[e("lodash.throttle"),a(p)])]),m])}const _=c(u,[["render",v],["__file","index.html.vue"]]);export{_ as default};