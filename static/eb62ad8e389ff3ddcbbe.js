(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{239:function(t,v,_){"use strict";_.r(v);var l={computed:{data:function(){return{title:"使用 ava 和 jsdom 测试前端界面",description:"使用 ava 和 jsdom 测试前端界面",keywords:"原创,测试,JavaScript",pathname:"test-with-ava-jsdom",translation:null,create_time:"2016-06-29",prev:{title:"判断资源并行加载完成的三种办法：计数、Promise及 $.Deferred",pathname:"when-are-all-resources-all-loaded"},next:{title:"[译] 防火墙背后的笔记：Web 设计在中国",pathname:"notes-from-behind-the-firewall-the-state-of-web-design-in-china"}}}}},n=_(2),component=Object(n.a)(l,function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("post",{attrs:{data:t.data}},[_("h2",{attrs:{id:"2016-09-03-"}},[t._v("2016-09-03 更新")]),t._v(" "),_("p",[t._v("随着在工作学习中更多地接触、使用测试工具，发现自己在本文中的一些记录是不准确、不正确的。")]),t._v(" "),_("p",[t._v("今天（九月三日）在家看了 NingJs 的直播，其中有一个分享是关于测试框架的，非常棒，之后有可能的话还是找来视频再学习下。")]),t._v(" "),_("p",[t._v("是的，两个月前的理解，是很初级很浅陋的。")]),t._v(" "),_("p",[t._v("继续学习，继续钻研吧。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("交代前因")]),t._v(" "),_("p",[t._v("前些天接手了一个旧项目。幸好不是在原来的基础上做些修修改改的工作，可以算是开发新版的。")]),t._v(" "),_("p",[t._v("把前面同事留下来的代码 down 下来，看了一下。总体还是挺好的。还有 "),_("code",[t._v("macha + chai")]),t._v(" 的测试目录。")]),t._v(" "),_("p",[t._v("我也是最近一段时间开始接触测试。很久之前看了阮大神写的 mocha 教程，不过也就看看，写写简单的 demo。")]),t._v(" "),_("p",[t._v("前同事留下的测试，是基于浏览器的，主要还是功能测试。这里不详细说怎么在浏览器端使用 mocha 测试了。因为涉及到交互的反馈、追踪，所以采用的方式是，先用 iframe 加载待测页面，然后用 "),_("code",[t._v("contentWindow")]),t._v(" 的方式拿到 iframe 的环境，再做一些操作。手动触发一些功能，然后再去判断相应的变化有没有发生。")]),t._v(" "),_("p",[t._v("本地启动了一个 server，浏览器里跑了几遍测试。最后发现的问题是，有一个点击测试怎么都过不了。于是又开启了阅读代码的过程。")]),t._v(" "),_("p",[t._v("最后发现了问题所在，页面使用的是自己封装的 tap 事件，整个事件系统也是对原生 Element 原型的拓展。可是怎么触发 tap 呢？前同事用了 "),_("code",[t._v("touchend")]),t._v("。可是并没有用啊， tap 事件的触发可是结合了从 touchstart 开启一系列事件参数的判断的。")]),t._v(" "),_("p",[t._v("后来我就想，浏览器端功能测试，能不能也拿到命令行上面来呢？")]),t._v(" "),_("h2",{attrs:{id:"-mocha-ava"}},[t._v("从 mocha 转到 ava")]),t._v(" "),_("p",[t._v("正在此时，我想起了 "),_("code",[t._v("jsdom")]),t._v(" 这个大神级作品。")]),t._v(" "),_("p",[t._v("一开始打算用 "),_("code",[t._v("mocha + jsdom")]),t._v(" 跑一把。"),_("del",[t._v("折腾了几次发现，mocha 这家伙不好适应异步的工作，这事情很难搞啊。")])]),t._v(" "),_("p",[t._v("可能要交代下我做了什么，嗯，我加载了一个 jquery 脚本，这样就得外部文件，于是就有异步场景了。试了好多遍，mocha 还是没能实现我的期望。（你也可以拿 mocha 试试看，多试几次，如果单纯靠那个 "),_("code",[t._v("done")]),t._v(" 你就能成功，那么请私信我哟。）")]),t._v(" "),_("p",[t._v("又想想白天乱逛 github 的时候，在一些个项目中看到了 "),_("code",[t._v("ava")]),t._v(" 这个测试工具。搜索一番，据说正适用于异步场景。")]),t._v(" "),_("p",[t._v("好，那就来试试看呗。前因交代清楚了，下面开始正式进入教程阶段。")]),t._v(" "),_("h2",{attrs:{id:"-demo"}},[t._v("开始讲 demo")]),t._v(" "),_("p",[t._v("我将自己的 demo 放到了 github 上，地址是"),_("a",{attrs:{href:"https://github.com/AngusFu/jsdom-ava-demo",target:"_blank"}},[t._v("https://github.com/AngusFu/jsdom-ava-demo")]),t._v("。你可以直接克隆项目，然后在本地跑起来。")]),t._v(" "),_("p",[t._v("因为是 demo，项目内容很简单，两个 js，一个用于测试 html 文件。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("测试场景")]),t._v(" "),_("p",[t._v("先说测试场景：页面上有一个红色背景的 div，通过原生的 addEventListener 绑定了 click 事件。点击之后，将背景色变换为绿色。就酱简单？对，主要就这个，一方面我是想测试下 jsdom 对事件系统和 css 解析的支持（手动触发事件，css 解析和值变化），一方面是想试试这种异步场景下怎么更好地测试。")]),t._v(" "),_("p",[t._v("那些对测试脚本运行速度有非常严格要求的同学请想好了再往后看。因为根据我的经验，jsdom + ava 这俩组合起来，速度确实慢得不行。我还没仔细探究原因，但想来无非以下几点：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("测试脚本要经过 babel 6 编译一遍，有耗时；")])]),t._v(" "),_("li",[_("p",[t._v("jsdom 系统比较庞大，解析起来费劲；")])]),t._v(" "),_("li",[_("p",[t._v("我使用了 jsdom 的 jQueryify 方法从外部加载了 jQuery 文件（但这方法确实给力）；")])]),t._v(" "),_("li",[_("p",[t._v("ava 本身其他方面的问题；")])])]),t._v(" "),_("p",[t._v("暂且忍着点。")]),t._v(" "),_("p",[t._v("核心 html 如下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-html"},[_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),_("span",{staticClass:"css"},[t._v("\n    "),_("span",{staticClass:"hljs-selector-tag"},[t._v("div")]),t._v(" {"),_("span",{staticClass:"hljs-attribute"},[t._v("width")]),t._v(": "),_("span",{staticClass:"hljs-number"},[t._v("500px")]),t._v("; "),_("span",{staticClass:"hljs-attribute"},[t._v("height")]),t._v(": "),_("span",{staticClass:"hljs-number"},[t._v("500px")]),t._v("; "),_("span",{staticClass:"hljs-attribute"},[t._v("background-color")]),t._v(": red;}\n")]),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"div"')]),t._v(">")]),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n\n"),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),_("span",{staticClass:"javascript"},[t._v("\n    "),_("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".getElementById("),_("span",{staticClass:"hljs-string"},[t._v('"div"')]),t._v(").onclick = "),_("span",{staticClass:"hljs-function"},[_("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" ("),_("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n        "),_("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".style.backgroundColor = "),_("span",{staticClass:"hljs-string"},[t._v("'green'")]),t._v(";\n    };\n")]),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])]),_("h2",{attrs:{id:"-"}},[t._v("测试工具安装")]),t._v(" "),_("p",[t._v("下面来谈工具的安装。")]),t._v(" "),_("p",[t._v("首先安装 jsdom，这倒是很简单：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-bash"},[t._v("$ npm install --save jsdom")])]),_("p",[t._v("接着安装 ava，最好先全局安装一遍：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-bash"},[t._v("\n$ npm install -g ava\n\n$ npm install --save ava")])]),_("p",[t._v("然后为了方便使用 "),_("code",[t._v("npm test")]),t._v(" 命令，执行下面的命令：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-bash"},[t._v("$ ava --init")])]),_("p",[t._v("这一行的目的是将 ava 命令放到你的 "),_("code",[t._v("package.json")]),t._v(" 中的 "),_("code",[t._v("scripts")]),t._v(" 字段中，方便之后使用 "),_("code",[t._v("npm test")]),t._v(" 直接开启跑测试。当然你也可以不管这一步，我就比较喜欢自己敲 "),_("code",[t._v("ava xx.js")]),t._v(" 这样子。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("编写测试")]),t._v(" "),_("p",[t._v("好了，环境安装完毕。下面来看脚本。")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[t._v("\n"),_("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" fs "),_("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),_("span",{staticClass:"hljs-string"},[t._v("'fs'")]),t._v(";\n\n"),_("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { jsdom } "),_("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),_("span",{staticClass:"hljs-string"},[t._v("'jsdom'")]),t._v(";\n\n"),_("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" test "),_("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),_("span",{staticClass:"hljs-string"},[t._v("'ava'")]),t._v(";")])]),_("p",[t._v("ava 在运行时会通过 babel 6 对测试脚本进行编译，因此完全可以自由发挥，generator、async & await 什么的都尽情地用吧。而且作者也是建议和支持这样做的，简单明了的测试脚本，重要性有时候可能和测试本身一样重要。")]),t._v(" "),_("p",[t._v("引入 fs 是为了读取我们的 html 文件。")]),t._v(" "),_("p",[t._v("关于 jsdom 的用法，更多的可以参考 "),_("a",{attrs:{href:"https://github.com/tmpvar/jsdom",target:"_blank"}},[t._v("https://github.com/tmpvar/jsdom")]),t._v("，看项目的文档。这里我使用的是简单易懂的 "),_("code",[t._v("require('jsdom').jsdom")]),t._v(" 形式，便于以同步的形式解析生成我们需要的 window 对象，如下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[t._v("\n"),_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(" = jsdom(fs.readFileSync("),_("span",{staticClass:"hljs-string"},[t._v("'./test.html'")]),t._v(")).defaultView;")])]),_("p",[t._v("一个挺好用的方法是 "),_("code",[t._v("jsdom.jQueryify")]),t._v("，能向页面注入 jQuery。不过这是个异步的方法（废话），所以这里我使用了 Promise，也是为了方便之后使用 async & await 语法。")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-function"},[_("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),_("span",{staticClass:"hljs-title"},[t._v("jsdomTest")]),t._v("("),_("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n    "),_("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Promise")]),t._v("("),_("span",{staticClass:"hljs-function"},[_("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" ("),_("span",{staticClass:"hljs-params"},[t._v("resolve, reject")]),t._v(") ")]),t._v("{ \n        jsdom.jQueryify("),_("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(", "),_("span",{staticClass:"hljs-string"},[t._v('"http://apps.bdimg.com/libs/jquery/2.1.4/jquery.js"')]),t._v(", "),_("span",{staticClass:"hljs-function"},[_("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" ("),_("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n            resolve("),_("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".jQuery);\n        });\n    });\n}")])]),_("p",[t._v("ava 的测试用例写起来也挺简单，来看代码：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[t._v("\ntest("),_("span",{staticClass:"hljs-string"},[t._v("'点击测试'")]),t._v(", "),_("span",{staticClass:"hljs-keyword"},[t._v("async")]),t._v(" t => {\n    "),_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" $ = "),_("span",{staticClass:"hljs-keyword"},[t._v("await")]),t._v(" jsdomTest();\n\n    "),_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" $div = $("),_("span",{staticClass:"hljs-string"},[t._v("'#div'")]),t._v(");\n\n    "),_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" colorBeforeClick, colorAfterClick;\n\n    "),_("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(colorBeforeClick = $div.css("),_("span",{staticClass:"hljs-string"},[t._v("'background-color'")]),t._v("));\n\n    $div.trigger("),_("span",{staticClass:"hljs-string"},[t._v("'click'")]),t._v(");\n\n    "),_("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(colorAfterClick = $div.css("),_("span",{staticClass:"hljs-string"},[t._v("'background-color'")]),t._v("));\n\n    t.not(colorBeforeClick, colorAfterClick, "),_("span",{staticClass:"hljs-string"},[t._v("'bgColor changed'")]),t._v(");\n});")])]),_("p",[_("code",[t._v("test")]),t._v(" 的第一个参数是测试用例的名称，第二个参数是一个函数，该函数会注入 "),_("code",[t._v("t")]),t._v(" 对象。我们所有的断言都是通过这个注入的 "),_("code",[t._v("t")]),t._v(" 进行的。")]),t._v(" "),_("p",[t._v("友情提示：ava 的文档地址，"),_("a",{attrs:{href:"https://github.com/avajs/ava",target:"_blank"}},[t._v("https://github.com/avajs/ava")]),t._v("，也有中文版，但是没更新同步，所以建议还是看英文，否则用了一些过时的 API，以后升级之后追悔莫及。")]),t._v(" "),_("p",[t._v("来说上面的代码。首先我们使用的是 async & await 语法，整个看起来比回调函数嵌套要整洁许多，整个流程看起来也相对清楚。")]),t._v(" "),_("p",[t._v("第一步是先等待 jQuery 注入成功，拿到 "),_("code",[t._v("$")]),t._v("。其实这一步可有可无，我纯粹是为了测试 jsdom API，并且懒得手动写 dispatch 事件的代码才这么干的。")]),t._v(" "),_("p",[t._v("接下来就开始 DOM 查询，然后先获取 div 当前的背景色并打印出来。接着手动触发 click 事件，然后再次获取 div 的背景色并打印。最后将触发点击前后的两个颜色值拿来对比。")]),t._v(" "),_("p",[t._v("依葫芦画瓢，差不多就这么搞定了。")]),t._v(" "),_("p",[t._v("打开命令行，进入工作目录，然后开始测试：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-bash"},[t._v("\n$  ava -v parallel.js")])]),_("p",[t._v("相信我，"),_("code",[t._v("-v")]),t._v(" 参数可以让你的命令行界面显得比较安静一些。")]),t._v(" "),_("p",[t._v("如果你想要使用 "),_("code",[t._v("npm test")]),t._v(" 这样的命令来测试，请进一步阅读文档进行相关配置（将上面的 "),_("code",[t._v("ava")]),t._v(" 换成 "),_("code",[t._v("nom test")]),t._v("是没用的哦）。这里主要还是为了简便。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("友情提示")]),t._v(" "),_("p",[t._v("友情提示第二波：会不会怀疑，触发点击事件之后，颜色立马就变了？不存在延迟、异步么？答案是 yes，真的不存在。假如你和我一样在这里犹豫了，那么说明存在这样两种可能性：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("js 基础不够牢，对相关机制的了解还不透彻")])]),t._v(" "),_("li",[_("p",[t._v("你被各种异步玩怕了（hybrid / RN 后遗症 ）")])])]),t._v(" "),_("p",[t._v("当时为了应对“潜在的异步”（啊我想到了迫害狂想症），我特意做了几百毫秒的 "),_("code",[t._v("setTimeout")]),t._v(" 延时。结果呢，断言的谓词（not、same、notSame等等）各种正向、反向都试了一遍，测试永远通过。什么鬼？说好的良好的异步支持呢？后来再去看文档，发现人家写得清清楚楚：")]),t._v(" "),_("blockquote",[_("p",[t._v("You must define all tests synchronously. They can't be defined inside setTimeout, setImmediate, etc.\n所有测试必须同步定义。不能放在 setTimeout、setImmediate 等方法里面。")])]),t._v(" "),_("p",[t._v("所以，真的，认真读文档是很有必要的。")]),t._v(" "),_("p",[t._v("真正遇到要延时的，怎么办？我想，Promise 会解救你的。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("并行与串行")]),t._v(" "),_("p",[t._v("ava 声称是很高效的。通常情况下，同一个文件里测试都是并行的，并不一定按照顺序执行。")]),t._v(" "),_("p",[t._v("还以上面的代码为例。为了测试一下，我选择了投机取巧。不是并行吗？那我就检测 jQuery 存不存在就不行了吗？因为我们的 "),_("code",[t._v("test")]),t._v(" 中，是异步加载 jQuery 的。所以如果测试是并行的，那么不一定能够检测到 "),_("code",[t._v("window.$")]),t._v(" 的存在。")]),t._v(" "),_("p",[t._v("所以就有了 "),_("a",{attrs:{href:"https://github.com/AngusFu/jsdom-ava-demo/blob/master/parallel.js",target:"_blank"}},[t._v("parallel.js")]),t._v(" 这个文件。添加的测试用例如下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[t._v("\ntest("),_("span",{staticClass:"hljs-string"},[t._v("'串行测试'")]),t._v(", "),_("span",{staticClass:"hljs-function"},[_("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" ("),_("span",{staticClass:"hljs-params"},[t._v("t")]),t._v(") ")]),t._v("{\n    "),_("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),_("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".$)\n    t.true(!!"),_("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".$, "),_("span",{staticClass:"hljs-string"},[t._v("'串行失败'")]),t._v(");\n});")])]),_("p",[t._v("可是，如果我就要串行呢？")]),t._v(" "),_("p",[t._v("还好作者也想到了这种情况。将所有的 "),_("code",[t._v("test")]),t._v(" 改成 "),_("code",[t._v("test.serial")]),t._v(" 即可（见 "),_("a",{attrs:{href:"https://github.com/AngusFu/jsdom-ava-demo/blob/master/serial.js",target:"_blank"}},[t._v("serial.js")]),t._v("）。")]),t._v(" "),_("p",[t._v("需要说明的是，所谓的串行执行，只是在同一个测试文件中存在，同时测试多个文件的时候，就总体而言仍然是并行的。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("结尾")]),t._v(" "),_("p",[t._v("ava 还有很多的用法和需要注意的地方。最好的办法还是看文档，然后自己写 demo，反复领会，并应用在实际业务中。")]),t._v(" "),_("p",[t._v("上面提到的内容，可能有不少错误。希望懂行的大神们能够提出来。")]),t._v(" "),_("p",[t._v("突然想到古人说，“苟日新，又日新，日日新”。")]),t._v(" "),_("p",[t._v("虽然经过今人考证，这也许只是类似甲骨文的祭祀记录的误读。但几千年来，这种“新”的精神始终在。")]),t._v(" "),_("p",[t._v("程序世界里，变化更是无时不在。今天的工具，明天也许就会被淘汰。")]),t._v(" "),_("p",[t._v("其实说到底，能够解决需求，能够方便高效使用的，才是最好的。")]),t._v(" "),_("p",[t._v("向做出这些工具的大神们致敬。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("更新")]),t._v(" "),_("h3",{attrs:{id:"a-"}},[t._v("a 标签点击事件的坑")]),t._v(" "),_("p",[_("code",[t._v("a")]),t._v(" 标签的点击事件用了事件代理，然后通过手动触发无效。")]),t._v(" "),_("p",[t._v("经测试，在浏览器也有这种问题。")]),t._v(" "),_("p",[t._v("解决办法是直接使用 "),_("code",[t._v("$('a')[0].click()")]),t._v("，原生的 "),_("code",[t._v("click")]),t._v(" 方法比较靠谱。")]),t._v(" "),_("p",[t._v("参考： "),_("a",{attrs:{href:"http://stackoverflow.com/questions/773639/how-can-i-simulate-an-anchor-click-via-jquery",target:"_blank"}},[t._v("http://stackoverflow.com/questions/773639/how-can-i-simulate-an-anchor-click-via-jquery")])])])},[],!1,null,null,null);v.default=component.exports}}]);