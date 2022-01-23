import{c as n}from"./app.bbb7585b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<ul><li>Example-1</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u4F8B\u4E2D\u7684<code>useState</code>\u7684\u521D\u59CB\u5316\u662F\u5728<code>packages/react-reconciler/src/ReactFiberHooks.new.js</code>\u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">mountState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  initialState<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token constant">S</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">S</span><span class="token punctuation">,</span> Dispatch<span class="token operator">&lt;</span>BasicStateAction<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token function">mountWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// useState\u4F20\u5165\u7684\u53C2\u6570\u4E3A\u51FD\u6570\uFF0C\u5219\u6267\u884C\u8BE5\u51FD\u6570\u5F97\u51FAstate\uFF0C\u7136\u540E\u8D4B\u503C\u7ED9initialState</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> initialState <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// $FlowFixMe: Flow doesn&#39;t like mixed types</span>
    initialState <span class="token operator">=</span> <span class="token function">initialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> hook<span class="token punctuation">.</span>baseState <span class="token operator">=</span> initialState<span class="token punctuation">;</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">(</span>hook<span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">{</span>
    pending<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    interleaved<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    lanes<span class="token operator">:</span> NoLanes<span class="token punctuation">,</span>
    dispatch<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    lastRenderedReducer<span class="token operator">:</span> basicStateReducer<span class="token punctuation">,</span>
    lastRenderedState<span class="token operator">:</span> <span class="token punctuation">(</span>initialState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dispatch<span class="token operator">:</span> Dispatch<span class="token operator">&lt;</span>
    BasicStateAction<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>dispatch <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">dispatchAction</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    currentlyRenderingFiber<span class="token punctuation">,</span>
    queue<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Example-1\u4E2D\u7684setCount\u5176\u5B9E\u5C31\u662FdispatchAction</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>hook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mountWorkInProgressHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Hook <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hook<span class="token operator">:</span> Hook <span class="token operator">=</span> <span class="token punctuation">{</span>
    memoizedState<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    baseState<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    baseQueue<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u65B0\u7684\u72B6\u6001\u4FE1\u606F</span>
    queue<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u4FDD\u6301\u5F85\u66F4\u65B0\u7684\u961F\u5217</span>

    next<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5411\u4E0B\u4E00\u4E2Ahook\u5BF9\u8C61</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgressHook <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is the first hook in the list</span>
    currentlyRenderingFiber<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> workInProgressHook <span class="token operator">=</span> hook<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Append to the end of the list</span>
    workInProgressHook <span class="token operator">=</span> workInProgressHook<span class="token punctuation">.</span>next <span class="token operator">=</span> hook<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> workInProgressHook<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> dispatchAction<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u5982\u679C&#39;setXXX&#39;\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u5165\u4E86\u4E00\u4E2A\u56DE\u8C03\uFF0C\u4F1A\u6709\u9519\u8BEF\u63D0\u793A\uFF1B</span>
    <span class="token comment">// \u5982\u679C\u60F3\u62FF\u5230\u66F4\u65B0\u7684\u72B6\u6001\u53BB\u505A\u5176\u4ED6\u4E8B\u60C5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u62FF\u5230\u6700\u65B0\u7684\u72B6\u6001\uFF0C\u7136\u540E\u505A\u5176\u4ED6\u4E8B\u60C5\uFF1B</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> arguments<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
        <span class="token string">&quot;State updates from the useState() and useReducer() Hooks don&#39;t support the &quot;</span> <span class="token operator">+</span>
          <span class="token string">&#39;second callback argument. To execute a side effect after &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;rendering, declare it in the component body with useEffect().&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> eventTime <span class="token operator">=</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    lane<span class="token punctuation">,</span>
    action<span class="token punctuation">,</span>
    <span class="token literal-property property">eagerReducer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">eagerState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> alternate <span class="token operator">=</span> fiber<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    fiber <span class="token operator">===</span> currentlyRenderingFiber <span class="token operator">||</span>
    <span class="token punctuation">(</span>alternate <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> alternate <span class="token operator">===</span> currentlyRenderingFiber<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is a render phase update. Stash it in a lazily-created map of</span>
    <span class="token comment">// queue -&gt; linked list of updates. After this render pass, we&#39;ll restart</span>
    <span class="token comment">// and apply the stashed updates on top of the work-in-progress hook.</span>
    didScheduleRenderPhaseUpdateDuringThisPass <span class="token operator">=</span> didScheduleRenderPhaseUpdate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> pending <span class="token operator">=</span> queue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// This is the first update. Create a circular list.</span>
      update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    queue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInterleavedUpdate</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> interleaved <span class="token operator">=</span> queue<span class="token punctuation">.</span>interleaved<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>interleaved <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This is the first update. Create a circular list.</span>
        update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
        <span class="token comment">// At the end of the current render, this queue&#39;s interleaved updates will</span>
        <span class="token comment">// be transfered to the pending queue.</span>
        <span class="token function">pushInterleavedQueue</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        update<span class="token punctuation">.</span>next <span class="token operator">=</span> interleaved<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        interleaved<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span>interleaved <span class="token operator">=</span> update<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> pending <span class="token operator">=</span> queue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// This is the first update. Create a circular list.</span>
        update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      fiber<span class="token punctuation">.</span>lanes <span class="token operator">===</span> NoLanes <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>alternate <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> alternate<span class="token punctuation">.</span>lanes <span class="token operator">===</span> NoLanes<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The queue is currently empty, which means we can eagerly compute the</span>
      <span class="token comment">// next state before entering the render phase. If the new state is the</span>
      <span class="token comment">// same as the current state, we may be able to bail out entirely.</span>
      <span class="token keyword">const</span> lastRenderedReducer <span class="token operator">=</span> queue<span class="token punctuation">.</span>lastRenderedReducer<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lastRenderedReducer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> prevDispatcher<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          prevDispatcher <span class="token operator">=</span> ReactCurrentDispatcher<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
          ReactCurrentDispatcher<span class="token punctuation">.</span>current <span class="token operator">=</span> InvalidNestedHooksDispatcherOnUpdateInDEV<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token literal-property property">currentState</span><span class="token operator">:</span> <span class="token constant">S</span> <span class="token operator">=</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>lastRenderedState<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> eagerState <span class="token operator">=</span> <span class="token function">lastRenderedReducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// Stash the eagerly computed state, and the reducer used to compute</span>
          <span class="token comment">// it, on the update object. If the reducer hasn&#39;t changed by the</span>
          <span class="token comment">// time we enter the render phase, then the eager state can be used</span>
          <span class="token comment">// without calling the reducer again.</span>
          update<span class="token punctuation">.</span>eagerReducer <span class="token operator">=</span> lastRenderedReducer<span class="token punctuation">;</span>
          update<span class="token punctuation">.</span>eagerState <span class="token operator">=</span> eagerState<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is</span><span class="token punctuation">(</span>eagerState<span class="token punctuation">,</span> currentState<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Fast path. We can bail out without scheduling React to re-render.</span>
            <span class="token comment">// It&#39;s still possible that we&#39;ll need to rebase this update later,</span>
            <span class="token comment">// if the component re-renders for a different reason and by that</span>
            <span class="token comment">// time the reducer has changed.</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Suppress the error. It will throw again in the render phase.</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ReactCurrentDispatcher<span class="token punctuation">.</span>current <span class="token operator">=</span> prevDispatcher<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// $FlowExpectedError - jest isn&#39;t a global, and isn&#39;t recognized outside of tests</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;undefined&#39;</span> <span class="token operator">!==</span> <span class="token keyword">typeof</span> jest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warnIfNotScopedWithMatchingAct</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">warnIfNotCurrentlyActingUpdatesInDev</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTransitionLane</span><span class="token punctuation">(</span>lane<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> queueLanes <span class="token operator">=</span> queue<span class="token punctuation">.</span>lanes<span class="token punctuation">;</span>

      <span class="token comment">// If any entangled lanes are no longer pending on the root, then they</span>
      <span class="token comment">// must have finished. We can remove them from the shared queue, which</span>
      <span class="token comment">// represents a superset of the actually pending lanes. In some cases we</span>
      <span class="token comment">// may entangle more than we need to, but that&#39;s OK. In fact it&#39;s worse if</span>
      <span class="token comment">// we *don&#39;t* entangle when we should.</span>
      queueLanes <span class="token operator">=</span> <span class="token function">intersectLanes</span><span class="token punctuation">(</span>queueLanes<span class="token punctuation">,</span> root<span class="token punctuation">.</span>pendingLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Entangle the new transition lane with the other transition lanes.</span>
      <span class="token keyword">const</span> newQueueLanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>queueLanes<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
      queue<span class="token punctuation">.</span>lanes <span class="token operator">=</span> newQueueLanes<span class="token punctuation">;</span>
      <span class="token comment">// Even if queue.lanes already include lane, we don&#39;t know for certain if</span>
      <span class="token comment">// the lane finished since the last time we entangled it. So we need to</span>
      <span class="token comment">// entangle it again, just to be sure.</span>
      <span class="token function">markRootEntangled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> newQueueLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>enableDebugTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> DebugTracingMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getComponentNameFromFiber</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;Unknown&#39;</span><span class="token punctuation">;</span>
        <span class="token function">logStateUpdateScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulingProfiler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">markStateUpdateScheduled</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br></div></div>`,5);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
