import {
  _ as s,
  r as n,
  o as e,
  c as o,
  a as d,
  b as t,
} from "./app-zUonB3Xg.js";
const c = {},
  p = t(
    `<h1 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h1><p>这一小节我们会介绍 <code>useRequest</code> 最核心，最基础的能力，也就是 <code>useRequest</code> 内核的能力。</p><h2 id="默认请求" tabindex="-1"><a class="header-anchor" href="#默认请求" aria-hidden="true">#</a> 默认请求</h2><p>默认情况下，<code>useRequest</code> 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 <code>loading</code> , <code>data</code> , <code>error</code> 等状态。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,
    5
  ),
  l = t(
    `<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mockFetch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ahooks-for-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>mockFetch<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; run(6)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求获取随机数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    {{ loading ? &quot;loading...&quot; : &quot;&quot; }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    data: {{ data }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- test: {{ test }} &lt;br /&gt; --&gt;</span>
    <span class="token comment">&lt;!-- test2: {{ test2 &amp;&amp; test2.data }}
    &lt;br /&gt;
    state: {{ state &amp;&amp; state.data }} --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>data</td><td>service 返回的数据</td><td><code>TData</code> | <code>undefined</code></td></tr><tr><td>error</td><td>service 抛出的异常</td><td><code>Error</code> | <code>undefined</code></td></tr><tr><td>loading</td><td>service 是否正在执行</td><td><code>boolean</code></td></tr><tr><td>params</td><td>当次执行的 service 的参数数组。比如你触发了 <code>run(1, 2, 3)</code>，则 params 等于 <code>[1, 2, 3]</code></td><td><code>TParams</code> | <code>[]</code></td></tr><tr><td>run</td><td><ul><li> 手动触发 service 执行，参数会传递给 service</li><li>异常自动处理，通过 <code>onError</code> 反馈</li></ul></td><td><code>(...params: TParams) =&gt; void</code></td></tr><tr><td>runAsync</td><td>与 <code>run</code> 用法一致，但返回的是 Promise，需要自行处理异常。</td><td><code>(...params: TParams) =&gt; Promise&lt;TData&gt;</code></td></tr><tr><td>refresh</td><td>使用上一次的 params，重新调用 <code>run</code></td><td><code>() =&gt; void</code></td></tr><tr><td>refreshAsync</td><td>使用上一次的 params，重新调用 <code>runAsync</code></td><td><code>() =&gt; Promise&lt;TData&gt;</code></td></tr><tr><td>mutate</td><td>直接修改 <code>data</code></td><td><code>(data?: TData ) =&gt; void</code></td></tr><tr><td>cancel</td><td>忽略当前 Promise 的响应</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>manual</td><td><ul><li> 默认 <code>false</code>。 即在初始化时自动执行 service。</li><li>如果设置为 <code>true</code>，则需要手动调用 <code>runAsync</code> 触发执行。 </li></ul></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultParams</td><td>首次默认执行时，传递给 service 的参数</td><td><code>Object</code></td><td>-</td></tr><tr><td>onBefore</td><td>service 执行前触发</td><td><code>(params: TParams) =&gt; void</code></td><td>-</td></tr><tr><td>onSuccess</td><td>service resolve 时触发</td><td><code>(data: TData, params: TParams) =&gt; void</code></td><td>-</td></tr><tr><td>onError</td><td>service reject 时触发</td><td><code>(e: Error, params: TParams) =&gt; void</code></td><td>-</td></tr><tr><td>onFinally</td><td>service 执行完成时触发</td><td><code>(params: TParams, data?: TData, e?: Error) =&gt; void</code></td><td>-</td></tr><tr><td>dataFilter</td><td>直接修改 <code>data</code> ,对返回的数据做处理,比如需要返回 data 下的 list,<code>注意对data做空判断</code></td><td><code>(data) =&gt; data?.list</code></td><td>- <code>(data) =&gt; data</code></td></tr></tbody></table>`,
    5
  );
function i(r, u) {
  const a = n("UseRequestDemo");
  return e(), o("div", null, [p, d(a), l]);
}
const m = s(c, [
  ["render", i],
  ["__file", "useRequest-basic.html.vue"],
]);
export { m as default };
