(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{192:function(t,e,v){"use strict";v.r(e);var r={computed:{data:function(){return{title:"[译] 手把手教你写一个 Javascript 框架：执行调度",description:"手把手教你写一个 Javascript 框架：执行调度",keywords:"翻译,JavaScript,Event Loop",pathname:"execution-timing",translation:{author:"Bertalan Miklos",social:"https://blog.risingstack.com/author/bertalan/",from:"https://blog.risingstack.com/writing-a-javascript-framework-execution-timing-beyond-settimeout/"},create_time:"2016-11-14",prev:{title:"[译] 手把手教你写一个 Javascript 框架：沙箱求值",pathname:"sandbox-code-evaluation"},next:{title:"[译] 手把手教你写一个 Javascript 框架：数据绑定",pathname:"data-bind-dirty-checking"}}}}},o=v(2),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("post",{attrs:{data:t.data}},[v("p",[v("strong",[t._v("本文是“编写 JavaScript 框架”系列的第二章。在本章中，我将介绍 JavaScript 中异步执行代码的几种不同方式。你会读到关于事件循环相关的内容，以及像 setTimeout 和 Promise 等时间调度（timing）技术之间的差异。")])]),t._v(" "),v("p",[t._v("本系列主要是如何开发一个开源的客户端框架，框架名为 NX。我将在本系列中分享框架编写过程中如何克服遇到的主要困难。对 NX 感兴趣的朋友可以点击 NX 项目"),v("a",{attrs:{href:"http://nx-framework.com/",target:"_blank"}},[t._v("主页")]),t._v("查看。")]),t._v(" "),v("p",[t._v("本系列章节如下：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"/2016/nx-project-structure/"}},[t._v("项目结构（Project structuring）")])]),t._v(" "),v("li",[t._v("执行调度（Execution timing)（本章）")]),t._v(" "),v("li",[v("a",{attrs:{href:"/2016/sandbox-code-evaluation/"}},[t._v("沙箱求值（Sandboxed code evaluation）")])]),t._v(" "),v("li",[v("a",{attrs:{href:"/2016/data-bind-dirty-checking"}},[t._v("数据绑定简介")])]),t._v(" "),v("li",[v("a",{attrs:{href:"/2016/es6-proxy-data-binding/"}},[t._v("ES6 Proxy 实现数据绑定")])]),t._v(" "),v("li",[t._v("自定义元素")]),t._v(" "),v("li",[t._v("客户端路由")])]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("异步执行代码")]),t._v(" "),v("p",[t._v("说到异步执行代码，恐怕大部分人都很熟悉 "),v("code",[t._v("Promise")]),t._v("、"),v("code",[t._v("process.nextTick()")]),t._v("、"),v("code",[t._v("setTimeout()")]),t._v(" 以及 "),v("code",[t._v("requestAnimationFrame()")]),t._v(" 等方式吧。它们在内部都使用了事件循环（Event Loop），但就时间精确度而言，它们的表现却截然不同。")]),t._v(" "),v("p",[t._v("本章将解释它们之间的差异，并介绍如何实现像 NX 这样的现代框架所需要的时间调度系统。不必重造轮子，使用原生的事件循环就可以达到目的。")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("事件循环")]),t._v(" "),v("p",[t._v("所谓事件循环，实际 "),v("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/",target:"_blank"}},[t._v("ES6 标准")]),t._v(" 完全没有提到。JavaScript 自身只有任务、任务队列。更复杂的事件循环，分别由 NodeJS 和 "),v("a",{attrs:{href:"https://www.w3.org/TR/2016/CR-html51-20160621/webappapis.html#event-loops",target:"_blank"}},[t._v("HTML5 标准")]),t._v(" 各自说明。因为本系列是关于前端的，我将在此阐释后者。")]),t._v(" "),v("p",[t._v("事件循环之所以称为循环，是由原因的。它是一个寻找新任务并执行任务的无限循环。一次循环被称为一个 tick。单个 tick 内执行的代码称作任务（task）。")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (eventLoop.waitForTask()) {\n  eventLoop.processNextTask()\n}")])]),v("p",[t._v("所谓任务，是指那些可能在循环中安排其他任务的同步的代码片段。一种安排新任务的简单方式是使用 "),v("code",[t._v("setTimeout(taskFn)")]),t._v("。不过，任务也可能来自其他地方，如用户事件、网络请求或 DOM 操作。")]),t._v(" "),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/a0a33a05bacdd091.svg",expression:"`https://s.ssl.qhres.com/static/a0a33a05bacdd091.svg`"}],attrs:{alt:"Execution timing: Event loop with tasks"}})]),t._v(" "),v("h3",{attrs:{id:"-"}},[t._v("任务队列")]),t._v(" "),v("p",[t._v("来点更复杂的。事件循环中可以有多个任务队列，但有两个限制：来源相同的事件必须归属于同一队列；每个队列中的任务按照插入顺序执行。除此之外，浏览器是完全自由的。比如说，它可以自己决定接下来执行哪一个任务队列。")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (eventLoop.waitForTask()) {\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" taskQueue = eventLoop.selectTaskQueue()\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (taskQueue.hasNextTask()) {\n    taskQueue.processNextTask()\n  }\n}")])]),v("p",[t._v("这个模型放松了对时间的精确控制。浏览器在执行我们用 "),v("code",[t._v("setTimeout()")]),t._v(" 设置的任务之前，可能决定先处理完其他队列。")]),t._v(" "),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/9939d06126824a37.svg",expression:"`https://s.ssl.qhres.com/static/9939d06126824a37.svg`"}],attrs:{alt:"Execution timing: Event loop with task queues"}})]),t._v(" "),v("h3",{attrs:{id:"microtask-"}},[t._v("Microtask 队列")]),t._v(" "),v("p",[t._v("幸运的是，事件循环中还有一个单线队列。每个 tick 内，当前任务完成后，microtask 队列被完全清空。")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (eventLoop.waitForTask()) {\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" taskQueue = eventLoop.selectTaskQueue()\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (taskQueue.hasNextTask()) {\n    taskQueue.processNextTask()\n  }\n\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" microtaskQueue = eventLoop.microTaskQueue\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (microtaskQueue.hasNextMicrotask()) {\n    microtaskQueue.processNextMicrotask()\n  }\n}")])]),v("p",[t._v("设置 microtask 最简单的方式是 "),v("code",[t._v("Promise.resolve().then(microtaskFn)")]),t._v("。microtask 按照插入顺序执行，因为只有一个 microtask 队列，故不会造成混乱。")]),t._v(" "),v("p",[t._v("此外，在一个 microtask 中还能设置新的 microtask，它们会被插在同一个队列中，在同一 tick 中执行。")]),t._v(" "),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/1af9de1bdcd9143c.svg",expression:"`https://s.ssl.qhres.com/static/1af9de1bdcd9143c.svg`"}],attrs:{alt:"Execution timing: Event loop with microtask queue"}})]),t._v(" "),v("h3",{attrs:{id:"-"}},[t._v("渲染")]),t._v(" "),v("p",[t._v("还有一件事是渲染进度（rendering schedule）。不同于事件处理和解析，渲染不是由单独的背景任务完成的，而是由算法决定，"),v("strong",[t._v("可能")]),t._v("会在每次 tick 末尾执行。")]),t._v(" "),v("p",[t._v("在这方面，浏览器自由度很大：可能在每个任务之后渲染，但也可能一直执行数百个任务而不进行渲染。")]),t._v(" "),v("p",[t._v("还是很幸运，我们有 "),v("code",[t._v("requestAnimationFrame()")]),t._v("，它会在下一次渲染之前执行传入的函数。最终我们的事件循环模型如下所示：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (eventLoop.waitForTask()) {  \n  "),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" taskQueue = eventLoop.selectTaskQueue()\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (taskQueue.hasNextTask()) {\n    taskQueue.processNextTask()\n  }\n\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" microtaskQueue = eventLoop.microTaskQueue\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (microtaskQueue.hasNextMicrotask()) {\n    microtaskQueue.processNextMicrotask()\n  }\n\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (shouldRender()) {\n    applyScrollResizeAndCSS()\n    runAnimationFrames()\n    render()\n  }\n}")])]),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/8d12e1879951d36b.svg",expression:"`https://s.ssl.qhres.com/static/8d12e1879951d36b.svg`"}],attrs:{alt:"Execution timing: Event loop with rendering"}})]),t._v(" "),v("p",[t._v("接下来使用上面的这些知识，构建一个时间调度系统吧！")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("使用事件循环")]),t._v(" "),v("p",[t._v("和大多现代框架一样，"),v("a",{attrs:{href:"http://nx-framework.com",target:"_blank"}},[t._v("NX")]),t._v(" 专注于处理幕后 DOM 操作和数据绑定。它将操作分批异步执行，以提高性能。为正确调度这些任务，它依赖于 "),v("code",[t._v("Promises")]),t._v("、"),v("code",[t._v("MutationObservers")]),t._v(" 和 "),v("code",[t._v("requestAnimationFrame()")]),t._v("。")]),t._v(" "),v("p",[t._v("最佳的时间安排是这样的：")]),t._v(" "),v("ol",[v("li",[t._v("开发者编写的代码")]),t._v(" "),v("li",[t._v("NX 进行数据绑定、响应 DOM 操作")]),t._v(" "),v("li",[t._v("开发者定义的钩子")]),t._v(" "),v("li",[t._v("浏览器渲染")])]),t._v(" "),v("h3",{attrs:{id:"step-1"}},[t._v("Step 1")]),t._v(" "),v("p",[t._v("NX 使用 "),v("a",{attrs:{href:"https://ponyfoo.com/articles/es6-proxies-in-depth",target:"_blank"}},[t._v("ES6 Proxy")]),t._v(" 同步注册对象变动，使用 "),v("a",{attrs:{href:"https://davidwalsh.name/mutationobserver-api",target:"_blank"}},[t._v("MutationObserver")]),t._v(" 同步注册 DOM 操作（下一章会谈更多）。为优化性能，NX 将推迟响应（reaction），将其作为 mircotask 放到第二步。延迟响应对象变化由 "),v("code",[t._v("Promise.resolve().then(reaction)")]),t._v(" 实现的，而 MutationObserver 会自动处理，因为其内部就使用了 microtask 。")]),t._v(" "),v("h3",{attrs:{id:"step-2"}},[t._v("Step 2")]),t._v(" "),v("p",[t._v("来自开发者的代码（任务）运行完成。NX 注册的 microtask 响应开始执行。因为是 microtask，所以它们会按顺序执行。请注意，目前还是在同一个 tick 中。")]),t._v(" "),v("h3",{attrs:{id:"step-3"}},[t._v("Step 3")]),t._v(" "),v("p",[t._v("NX 使用 "),v("code",[t._v("requestAnimationFrame(hook)")]),t._v(" 运行开发者传过来的钩子。这可能发生在之后一次 tick 中。重点还是在于，这些钩子在下次渲染之前，所有数据、DOM、CSS 变动之后运行。")]),t._v(" "),v("h3",{attrs:{id:"step-4"}},[t._v("Step 4")]),t._v(" "),v("p",[t._v("浏览器渲染下一视图。也可能发生在稍后的 tick 中，但绝不会在上一步之前。")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("注意事项")]),t._v(" "),v("p",[t._v("基于原生事件循环，我们实现了一个简单而有效率的时间调度系统。理论上工作起来会很不错，不过时间调度是一件很微妙的事，小小的错误都可能导致一些奇怪的 bug。")]),t._v(" "),v("p",[t._v("在复杂系统中，很有必要设置一些关于时间调度的规则并在开发中遵守它们。以 NX 为例，我遵循了以下规则：")]),t._v(" "),v("ol",[v("li",[t._v("内部操作中绝对不要使用 "),v("code",[t._v("setTimeout(fn, 0)")])]),t._v(" "),v("li",[t._v("使用同一种方式注册 microtask")]),t._v(" "),v("li",[t._v("仅将 microtask 只于内部操作")]),t._v(" "),v("li",[t._v("不要将开发者钩子执行的时间窗口与其他东西混在一起")])]),t._v(" "),v("h3",{attrs:{id:"rule-1-and-2"}},[t._v("Rule 1 and 2")]),t._v(" "),v("p",[t._v("对数据操作和 DOM 操作的响应，应当按照操作发生的顺序执行。只要不将顺序搞混，延迟它们都是可以的。搞混执行顺序会让事情变得难以预测，也难以寻找问题原因。")]),t._v(" "),v("p",[v("code",[t._v("setTimeout(fn, 0)")]),t._v(" 完全无法预测。使用几种不同方法注册 microtask 也会导致执行顺序混乱。比如下面的例子中，"),v("code",[t._v("microtask2")]),t._v(" 会错误地先于 "),v("code",[t._v("microtask1")]),t._v(" 执行：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[v("span",{staticClass:"hljs-built_in"},[t._v("Promise")]),t._v(".resolve().then().then(microtask1) \n"),v("span",{staticClass:"hljs-built_in"},[t._v("Promise")]),t._v(".resolve().then(microtask2)")])]),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/e3915d5eb20c8af1.svg",expression:"`https://s.ssl.qhres.com/static/e3915d5eb20c8af1.svg`"}],attrs:{alt:"Execution timing: Microtask registration method"}})]),t._v(" "),v("h3",{attrs:{id:"rule-3-and-4"}},[t._v("Rule 3 and 4")]),t._v(" "),v("p",[t._v("将开发者代码执行的时间窗口与内部操作隔离开非常重要。将两者混在一起，会导致一些看似无法预测的行为，并最终迫使开发者学习框架内部工作机制。想必很多开发者都有类似的经历。")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("写在最后")]),t._v(" "),v("p",[t._v("如果对 NX 框架感兴趣，请访问 "),v("a",{attrs:{href:"http://nx-framework.com/",target:"_blank"}},[t._v("主页")]),t._v("。胆大的读者还可以在Github 上查看 "),v("a",{attrs:{href:"https://github.com/RisingStack/nx-framework",target:"_blank"}},[t._v("NX 源码")]),t._v(" 和 "),v("a",{attrs:{href:"https://github.com/RisingStack/nx-observe",target:"_blank"}},[t._v("nx-observe 源码")]),t._v("。")]),t._v(" "),v("p",[t._v("希望你喜欢这篇文章。下一章我们将讨论沙箱求值。")])])},[],!1,null,null,null);e.default=component.exports}}]);