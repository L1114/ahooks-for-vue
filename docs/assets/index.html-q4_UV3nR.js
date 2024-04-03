import{_ as l,r as t,o as i,c as u,a as e,d as n,e as s,f as a}from"./app-fEsgeMaf.js";const d={},k=a('<h1 id="缓存-swr" tabindex="-1"><a class="header-anchor" href="#缓存-swr" aria-hidden="true">#</a> 缓存 &amp; SWR</h1><p>如果设置了 <code>options.cacheKey</code>，<code>useRequest</code> 会将当前请求成功的数据缓存起来。下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，也就是 SWR 的能力。</p><p>你可以通过 <code>options.staleTime</code> 设置数据保持新鲜时间，在该时间内，我们认为数据是新鲜的，不会重新发起请求。</p><p>你也可以通过 <code>options.cacheTime</code> 设置数据缓存时间，超过该时间，我们会清空该条缓存数据。</p><p>接下来通过几个例子来体验缓存这些功能。</p><h3 id="swr" tabindex="-1"><a class="header-anchor" href="#swr" aria-hidden="true">#</a> SWR</h3><p>下面的示例，我们设置了 <code>cacheKey</code>，在组件第二次加载时，会优先返回缓存的内容，然后在背后重新发起请求。你可以通过点击按钮来体验效果。</p>',7),r=a(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Article <span class="token keyword">from</span> <span class="token string">&quot;./Article.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>show<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>set<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>show / hidden<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Article</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mockFetchData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ahooks-for-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>mockFetchData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cacheKey</span><span class="token operator">:</span> <span class="token string">&quot;Article-1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    loading: {{ loading }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    time: {{ data?.time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    data: {{ data?.data }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="数据保持新鲜" tabindex="-1"><a class="header-anchor" href="#数据保持新鲜" aria-hidden="true">#</a> 数据保持新鲜</h3><p>通过设置 <code>staleTime</code>，我们可以指定数据新鲜时间，在这个时间内，不会重新发起请求。下面的示例设置了 5s 的新鲜时间，你可以通过点击按钮来体验效果</p>`,3),v=a(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> StaleTime <span class="token keyword">from</span> <span class="token string">&quot;./StaleTime.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>show<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>set<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>show / hidden<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StaleTime</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mockFetchData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ahooks-for-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>mockFetchData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cacheKey</span><span class="token operator">:</span> <span class="token string">&quot;Article-1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    loading: {{ loading }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    time: {{ data?.time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    data: {{ data?.data }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="数据共享" tabindex="-1"><a class="header-anchor" href="#数据共享" aria-hidden="true">#</a> 数据共享</h3>`,2),g=n("code",null,"cacheTime",-1),m=n("code",null,"staleTime",-1),h={href:"https://github.com/alibaba/hooks/issues/2313",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>同一个 <code>cacheKey</code> 的内容，在全局是共享的，这会带来以下几个特性：</p><ul><li>请求 <code>Promise</code> 共享：相同的 <code>cacheKey</code> 同时只会有一个在发起请求，后发起的会共用同一个请求 <code>Promise</code></li><li>数据同步：当某个 <code>cacheKey</code> 发起请求时，其它相同 <code>cacheKey</code> 的内容均会随之同步</li></ul><p>下面的示例中，初始化时，两个组件只会发起一个请求。并且两篇文章的内容永远是同步的。</p><code src="./demo/share.tsx"></code><h3 id="参数缓存" tabindex="-1"><a class="header-anchor" href="#参数缓存" aria-hidden="true">#</a> 参数缓存</h3><p>缓存的数据包括 <code>data</code> 和 <code>params</code>，通过 <code>params</code> 缓存机制，我们可以记忆上一次请求的条件，并在下次初始化。</p><p>下面的示例中，我们可以从缓存的 <code>params</code> 中初始化 <code>keyword</code></p><code src="./demo/params.tsx"></code><h3 id="删除缓存" tabindex="-1"><a class="header-anchor" href="#删除缓存" aria-hidden="true">#</a> 删除缓存</h3><p>ahooks 提供了一个 <code>clearCache</code> 方法，可以清除指定 <code>cacheKey</code> 的缓存数据。</p><code src="./demo/clearCache.tsx"></code><h3 id="自定义缓存" tabindex="-1"><a class="header-anchor" href="#自定义缓存" aria-hidden="true">#</a> 自定义缓存</h3><p>通过配置 <code>setCache</code> 和 <code>getCache</code>，可以自定义数据缓存，比如可以将数据存储到 <code>localStorage</code>、<code>IndexDB</code> 等。</p><p>请注意：</p><ol><li><code>setCache</code> 和 <code>getCache</code> 需要配套使用。</li><li>在自定义缓存模式下，<code>cacheTime</code> 和 <code>clearCache</code> 不会生效，请根据实际情况自行实现。</li></ol><code src="./demo/setCache.tsx"></code><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CachedData<span class="token operator">&lt;</span>TData<span class="token punctuation">,</span> TParams<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> TData<span class="token punctuation">;</span>
  params<span class="token operator">:</span> TParams<span class="token punctuation">;</span>
  time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>cacheKey</td><td>请求的唯一标识。相同 <code>cacheKey</code> 的数据全局同步（<code>cacheTime</code>、<code>staleTime</code> 参数会使该机制失效，见示例：<a href="#%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB">数据共享</a>）。</td><td><code>string</code></td><td>-</td></tr><tr><td>cacheTime</td><td><ul><li> 设置缓存数据回收时间。默认缓存数据 5 分钟后回收 </li><li> 如果设置为 <code>-1</code>, 则表示缓存数据永不过期</li></ul></td><td><code>number</code></td><td><code>300000</code></td></tr><tr><td>staleTime</td><td><ul><li> 缓存数据保持新鲜时间。在该时间间隔内，认为数据是新鲜的，不会重新发请求 </li><li> 如果设置为 <code>-1</code>，则表示数据永远新鲜</li></ul></td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>setCache</td><td><ul><li> 自定义设置缓存 </li><li><code>setCache</code> 和 <code>getCache</code> 需要配套使用</li><li> 在自定义缓存模式下，<code>cacheTime</code> 和 <code>clearCache</code> 不会生效，请根据实际情况自行实现。</li></ul></td><td><code>(data: CachedData) =&gt; void;</code></td><td>-</td></tr><tr><td>getCache</td><td>自定义读取缓存</td><td><code>(params: TParams) =&gt; CachedData</code></td><td>-</td></tr></tbody></table><h3 id="clearcache" tabindex="-1"><a class="header-anchor" href="#clearcache" aria-hidden="true">#</a> clearCache</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> clearCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ahooks&#39;</span><span class="token punctuation">;</span>

<span class="token function">clearCache</span><span class="token punctuation">(</span>cacheKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>支持清空单个缓存，或一组缓存</li><li>如果 <code>cacheKey</code> 为空，则清空所有缓存数据</li></ol><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><ul><li>只有成功的请求数据才会缓存</li><li>缓存的数据包括 <code>data</code> 和 <code>params</code></li></ul>`,25);function y(f,w){const p=t("useRequest-cache-demo"),o=t("useRequest-cache-demo2"),c=t("ExternalLinkIcon");return i(),u("div",null,[k,e(p),r,e(o),v,n("blockquote",null,[n("p",null,[s("注意：如果没有发起新请求，不会触发数据共享。"),g,s("、"),m,s(" 参数会使数据共享失效。"),n("a",h,[s("#2313"),e(c)])])]),b])}const _=l(d,[["render",y],["__file","index.html.vue"]]);export{_ as default};
