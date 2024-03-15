import{_ as s,r as d,o as c,c as i,d as t,e,a,f as r}from"./app-2eDkehgc.js";const h={},l=t("h1",{id:"usefocuswithin",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#usefocuswithin","aria-hidden":"true"},"#"),e(" useFocusWithin")],-1),u={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within",target:"_blank",rel:"noopener noreferrer"},p=t("h2",{id:"代码演示",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),e(" 代码演示")],-1),b=t("h3",{id:"基础用法",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#"),e(" 基础用法")],-1),m=r(`<h3 id="传入-dom-元素" tabindex="-1"><a class="header-anchor" href="#传入-dom-元素" aria-hidden="true">#</a> 传入 DOM 元素</h3><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> isFocusWithin <span class="token operator">=</span> <span class="token function">useFocusWithin</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  onFocus<span class="token punctuation">,</span>
  onBlur<span class="token punctuation">,</span>
  onChange<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>DOM 节点或者 Ref 对象</td><td><code>() =&gt; Element</code> | <code>Element</code> | <code>Ref&lt;Element&gt;</code></td><td>-</td></tr><tr><td>options</td><td>额外的配置项</td><td><code>Options</code></td><td>-</td></tr></tbody></table><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>onFocus</td><td>获取焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onBlur</td><td>失去焦点时触发</td><td><code>(e: FocusEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onChange</td><td>焦点变化时触发</td><td><code>(isFocusWithin: boolean) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="result-相比ahooks新增的api" tabindex="-1"><a class="header-anchor" href="#result-相比ahooks新增的api" aria-hidden="true">#</a> <code>Result 相比ahooks新增的APi</code></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>isFocusWithin</td><td>焦点是否在当前区域</td><td><code>Ref&lt;boolean&gt;</code></td></tr><tr><td><code>add</code></td><td>重新开始监听函数</td><td><code>() =&gt; void</code></td></tr><tr><td><code>remove</code></td><td>移除监听函数</td><td><code>() =&gt; void</code></td></tr></tbody></table>`,9);function _(f,v){const n=d("ExternalLinkIcon"),o=d("Dom-useFocusWithin-demo");return c(),i("div",null,[l,t("p",null,[e("监听当前焦点是否在某个区域之内，同 css 属性 "),t("a",u,[e(":focus-within"),a(n)]),e("。")]),p,b,a(o),m])}const g=s(h,[["render",_],["__file","index.html.vue"]]);export{g as default};
