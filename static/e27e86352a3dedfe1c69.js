(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{237:function(t,n,v){"use strict";v.r(n);var _={computed:{data:function(){return{title:"[译] 自动化、跨浏览器的 JavaScript 单元测试",description:"自动化、跨浏览器的 JavaScript 单元测试",keywords:"翻译,测试,单元测试",pathname:"set-up-automated-cross-browser-javascript-unit-testing",translation:{author:"@Philip Walton",social:"https://twitter.com/philwalton",from:"https://philipwalton.com/articles/learning-how-to-set-up-automated-cross-browser-javascript-unit-testing/"},create_time:"2016-08-15",prev:{title:"[译] WebAssembly  初尝",pathname:"build-your-first-thing-with-web-assembly"},next:{title:"[译] JavaScript  与函数式编程",pathname:"JavaScript-and-Functional-Programming"}}}}},l=v(2),component=Object(l.a)(_,function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("post",{attrs:{data:t.data}},[v("p",[t._v("大家都知道在不同浏览器上测试代码有多重要。多数时候我会觉得，开发者社区中的朋友们这一点做得非常棒 —— 至少是在初次发布项目的时候。")]),t._v(" "),v("p",[t._v("测试做得不好的是在每次修改代码的时候。")]),t._v(" "),v("p",[t._v("我个人也为此内疚。“自动化、跨浏览器的 JavaScript 单元测试”，这在我的 todo list 中已陈列数年，可每次坐下来打算认真弄明白时，又放弃了。我知道，有一部分是惰性所致，不过此话题的优质信息的惊人匮乏也难辞其咎。")]),t._v(" "),v("p",[t._v("有很多工具和框架（如 Karma）声称“使自动化，JavaScript 测试变简单”，但经验告诉我，这些工具所引入的复杂度，远超出它们所摆脱的麻烦（待会儿再细说）。在我的经验中，只要“工作就行”的工具，对专家来说是很好，不过学起来麻烦。我想要的是，理解这个过程在底层如何工作，这样万一测试程序挂掉（该来的最后总会来），我也能修复它。")]),t._v(" "),v("p",[t._v("对我来说，理解工作原理的最佳方法就是从头开始重造一遍。因此，我决定自己来造轮子，与社区分享我所学到的东西。")]),t._v(" "),v("p",[t._v("我写这篇文章，因为这正是几年前我刚开始发布开源项目时希望找到的。如果你自己从来没试过自动化、跨浏览器的 JavaScript 单元测试，但一直想学，那本文就是为你而写的。本文会向你解释整个工作过程，展示如何动手。")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("手动测试")]),t._v(" "),v("p",[t._v("在介绍自动化测试之前，我觉得有必要了解同样的页面在手动测试中是怎样的。")]),t._v(" "),v("p",[t._v("毕竟，自动化就是使用机器以解决现有工作流中的重复部分。没有完整了解手动测试，就想开始玩自动化，也不太可能理解自动化流程。")]),t._v(" "),v("p",[t._v("在手动测试中，在测试文件中编写测试用例，可能像下面这样：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-js"},[v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" assert = "),v("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),v("span",{staticClass:"hljs-string"},[t._v("'assert'")]),t._v(");\n"),v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" SomeClass = "),v("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),v("span",{staticClass:"hljs-string"},[t._v("'../lib/some-class'")]),t._v(");\n\ndescribe("),v("span",{staticClass:"hljs-string"},[t._v("'SomeClass'")]),t._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n  describe("),v("span",{staticClass:"hljs-string"},[t._v("'someMethod'")]),t._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n    it("),v("span",{staticClass:"hljs-string"},[t._v("'accepts thing A and transforms it into thing B'")]),t._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n      "),v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" sc = "),v("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" SomeClass();\n      assert.equal(sc.someMethod("),v("span",{staticClass:"hljs-string"},[t._v("'A'")]),t._v("), "),v("span",{staticClass:"hljs-string"},[t._v("'B'")]),t._v(");\n    });\n  });\n});")])]),v("p",[t._v("上面这个例子使用 "),v("a",{attrs:{href:"https://mochajs.org/",target:"_blank"}},[t._v("Mocha")]),t._v(" 和 Node.js 的 "),v("a",{attrs:{href:"https://nodejs.org/api/assert.html",target:"_blank"}},[v("code",[t._v("assert")])]),t._v(" 模块，不过使用哪种测试或断言库并不是那么重要，用什么都行。")]),t._v(" "),v("p",[t._v("Mocha 在 Node.js 中运行，你可能会在命令行中运行下面的命令：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-bash"},[t._v("mocha "),v("span",{staticClass:"hljs-built_in"},[t._v("test")]),t._v("/some-class-test.js")])]),v("p",[t._v("要在浏览器中运行测试，需要一个 HTML 文件，文件中用 script 标签来加载脚本；又因为浏览器不理解 "),v("code",[t._v("require")]),t._v(" 声明，你还需要一个像 "),v("a",{attrs:{href:"http://browserify.org/",target:"_blank"}},[t._v("browserify")]),t._v(" 或 "),v("a",{attrs:{href:"https://webpack.github.io/",target:"_blank"}},[t._v("webpack")]),t._v(" 这样的模块打包工具来解析依赖。")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-bash"},[t._v("browserify "),v("span",{staticClass:"hljs-built_in"},[t._v("test")]),t._v("/*-test.js > "),v("span",{staticClass:"hljs-built_in"},[t._v("test")]),t._v("/index.js")])]),v("p",[t._v("很棒的是，这些模块打包工具会将所有测试文件（以及其他任何依赖）打包为一个文件，这样在测试页面中加载就变得简单了。"),v("a",{attrs:{href:"#footnote-1"}},[t._v("[1]")])]),t._v(" "),v("p",[t._v("通常使用 Mocha 的测试文件长这样：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-html"},[v("span",{staticClass:"hljs-meta"},[t._v("<!DOCTYPE html>")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("html")]),t._v(">")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("head")]),t._v(">")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("meta")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("charset")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"utf-8"')]),t._v(">")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("title")]),t._v(">")]),t._v("Tests"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("title")]),t._v(">")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("link")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"../node_modules/mocha/mocha.css"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("rel")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"stylesheet"')]),t._v(" />")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"../node_modules/mocha/mocha.js"')]),t._v(">")]),v("span",{staticClass:"undefined"}),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("head")]),t._v(">")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("body")]),t._v(">")]),t._v("\n\n  "),v("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- A container element for the visual Mocha results --\x3e")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"mocha"')]),t._v(">")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n\n  "),v("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- Mocha setup and initiation code --\x3e")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),v("span",{staticClass:"javascript"},[t._v("\n  mocha.setup("),v("span",{staticClass:"hljs-string"},[t._v("'bdd'")]),t._v(");\n  "),v("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".onload = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n    mocha.run();\n  };\n  ")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n  "),v("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- The script under test --\x3e")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"index.js"')]),t._v(">")]),v("span",{staticClass:"undefined"}),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("body")]),t._v(">")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("html")]),t._v(">")])])]),v("p",[t._v("如果你没在用 Node.js，那起步的时候你所做的可能就已经和上面的文件差不多，唯一的区别是所有的依赖可能是通过一个个 script 标签列出来的。")]),t._v(" "),v("h3",{attrs:{id:"-"}},[t._v("检测错误")]),t._v(" "),v("p",[t._v("测试框架可以知道测试是不是失败了，因为任何适合只要断言结果不是 true，断言库就会抛出错误。测试框架在 try/catch 代码块中运行每条测试，这样就能捕获任何可能抛出的错误，然后通过网页显示或者控制台打印出错误。")]),t._v(" "),v("p",[t._v("多数测试框架（如 Mocha）提供钩子（hooks），以便连通测试过程，使页面中其他脚本也能访问测试结果。对自动化测试来说，这是很重要的一个特性，因为自动化测试要工作，就得从测试脚本中拿到结果。")]),t._v(" "),v("h3",{attrs:{id:"-"}},[t._v("手动测试的好处")]),t._v(" "),v("p",[t._v("在浏览器中手动测试的很大的一点好处是，如果某个测试没有通过，可以使用浏览器的开发者工具 debug。")]),t._v(" "),v("p",[t._v("简单的代码如下：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-js"},[t._v("describe("),v("span",{staticClass:"hljs-string"},[t._v("'SomeClass'")]),t._v(", () => {\n  describe("),v("span",{staticClass:"hljs-string"},[t._v("'someMethod'")]),t._v(", () => {\n    it("),v("span",{staticClass:"hljs-string"},[t._v("'accepts thing A and transforms it into thing B'")]),t._v(", () => {\n      "),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" sc = "),v("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" SomeClass();\n\n      "),v("span",{staticClass:"hljs-keyword"},[t._v("debugger")]),t._v(";\n      assert.equal(sc.someMethod("),v("span",{staticClass:"hljs-string"},[t._v("'A'")]),t._v("), "),v("span",{staticClass:"hljs-string"},[t._v("'B'")]),t._v(");\n    });\n  });\n});")])]),v("p",[t._v("重新打包，打开浏览器开发者工具，刷新页面，然后就能单步调试代码，轻松地跟踪问题的根源。")]),t._v(" "),v("p",[t._v("与此形成对比的是，多数现有的流行的自动化测试框架做起来却很困难！它们提供的部分方便之处就是打包单元测试，自动生成测试的页面。")]),t._v(" "),v("p",[t._v("在没有测试未通过之前，这也挺好，但万一有测试失败了，想要重现、在本地 debug 就没那么容易了。")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("自动化测试")]),t._v(" "),v("p",[t._v("尽管手动测试有些好处，缺点却也不少。打开几个不同的浏览器跑测试用例，每次的变动单调无趣还容易出错。更不用提，多数人都不会在本地开发机上装上所有版本的想要测试的浏览器。")]),t._v(" "),v("p",[t._v("如果想认真测试代码，确保每次变动都能进行恰当的测试，那就需要自动化了。不管你做得多好，手动测试容易造成遗忘和忽略，最终还挺浪费时间的。")]),t._v(" "),v("p",[t._v("不过自动化测试也有不好的地方。太多太多的自动化测试工具引入了一系列问题。构建过程稍有不同，测试稀奇古怪，错误调试起来苦不堪言。")]),t._v(" "),v("p",[t._v("在搭建自己的自动化测试系统时，我可不想再踩坑了，也不想放弃手动测试所带来的任何便利。所以在开始之前，我决定列一个需求清单。")]),t._v(" "),v("p",[t._v("毕竟，如果引入了新的问题，增加了复杂度，自动化系统就算不上那么成功。")]),t._v(" "),v("h3",{attrs:{id:"-"}},[t._v("需求")]),t._v(" "),v("ul",[v("li",[t._v("我需要通过命令行运行测试")]),t._v(" "),v("li",[t._v("我需要在本地调试未通过的测试")]),t._v(" "),v("li",[t._v("我需要通过 "),v("code",[t._v("npm")]),t._v(" 安装所有测试依赖，这样任何人都能使用 "),v("code",[t._v("npm install && npm test")]),t._v(" 使代码跑起来")]),t._v(" "),v("li",[t._v("我希望测试过程在持续化集成（CI）机器上跑起来，和在我的开发机上一样。这样一来，构建是一样的，无需检查新的变化就能调试错误")]),t._v(" "),v("li",[t._v("我希望所有测试能自动运行，无论何时，只要代码发生变化或是进行 pull request")])]),t._v(" "),v("p",[t._v("脑子大概有了这个粗略的清单，接下来就该深入探究下，自动化的跨浏览器测试在流行的云测试机中是如何工作的。")]),t._v(" "),v("h3",{attrs:{id:"-"}},[t._v("云测试如何工作")]),t._v(" "),v("p",[t._v("现在已经有大量提供云测试的服务商，他们各有千秋。因为我在写开源代码，所以我只看那些为开源项目提供免费计划的服务商，在这当中，"),v("a",{attrs:{href:"https://saucelabs.com/opensauce/",target:"_blank"}},[t._v("Sauce Labs")]),t._v(" 是唯一一家不需要我提供 email 就能开始新开源项目的。")]),t._v(" "),v("p",[t._v("最让我惊喜的是，开始阅读 Sauce Labs 中关于 JavaScript 单元测试文档的时候，我发现，这实际上是多么简单明了。许多测试框架号称让测试变得简单，但我却（错误地）以为那很难！")]),t._v(" "),v("p",[t._v("之前强调了，我不想让自动化测试和手动测试有什么根本的不同。结果我发现，Sauce Labs 所提供的自动测试方法几乎和我手动测试的过程一个样。")]),t._v(" "),v("p",[t._v("下面是测试步骤：")]),t._v(" "),v("ol",[v("li",[t._v("给 Sauce Labs 提供你要测试的页面地址，并告诉它你要在哪些浏览器/平台上测试;")]),t._v(" "),v("li",[t._v("Sauce Labs 使用 "),v("a",{attrs:{href:"http://www.seleniumhq.org/projects/webdriver/",target:"_blank"}},[t._v("selenium webdriver")]),t._v(" 为你所提供的每一种浏览器/平台组合加载页面。")]),t._v(" "),v("li",[t._v("Webdriver 检查页面是否有测试未通过，并保存结果。")]),t._v(" "),v("li",[t._v("Sauce Labs 将结果呈现给你。")])]),t._v(" "),v("p",[t._v("就这么简单。")]),t._v(" "),v("p",[t._v("我曾错误地以为，需要将 JavaScript 代码提交给 Sauce Labs，然后在他们的机器上运行。实际上并非如此，他们只需要你提供的 URL。这就像人工测试一样，唯一的不同是，Sauce Labs 处理打开各种浏览器的工作，并为你记录测试结果。")]),t._v(" "),v("h3",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),v("p",[t._v("Sauce Labs 运行单元测试的 API 包括两个方法：")]),t._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-StartJSUnitTests",target:"_blank"}},[t._v("开始 JS 单元测试（Start JS Unit Tests）")])])]),t._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-GetJSUnitTestStatus",target:"_blank"}},[t._v("获取 JS 单元测试状态（Get JS Unit Test Status）")])])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-StartJSUnitTests",target:"_blank"}},[t._v("开始 JS 单元测试")]),t._v(" 的方法初始化单个 HTML 页面（就是我们提供的 URL）测试，在你所提供的各种浏览器/平台组合上。")]),t._v(" "),v("p",[t._v("文档中给出了使用 "),v("code",[t._v("curl")]),t._v(" 的例子：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-bash"},[t._v("curl https://saucelabs.com/rest/v1/SAUCE_USERNAME/js-tests \\\n  -X POST \\\n  -u SAUCE_USERNAME:SAUCE_ACCESS_KEY \\\n  -H "),v("span",{staticClass:"hljs-string"},[t._v("'Content-Type: application/json'")]),t._v(" \\\n  --data "),v("span",{staticClass:"hljs-string"},[t._v('\'{"url": "https://example.com/tests.html",  "framework": "mocha", "platforms": [["Windows 7", "firefox", "27"], ["Linux", "chrome", "latest"]]}\'')])])]),v("p",[t._v("因为我们要做的是 JavaScript 单元测试，我会给出使用 "),v("a",{attrs:{href:"https://www.npmjs.com/package/request",target:"_blank"}},[t._v("request")]),t._v("  node 模块的例子，如果你在使用 Node.js，这可能更接近你使用的最后结果:")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-js"},[t._v("request({\n  "),v("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("`https://saucelabs.com/rest/v1/"),v("span",{staticClass:"hljs-subst"},[t._v("${username}")]),t._v("/js-tests`")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v("method")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("'POST'")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v("auth")]),t._v(": {\n    "),v("span",{staticClass:"hljs-attr"},[t._v("username")]),t._v(": process.env.SAUCE_USERNAME,\n    "),v("span",{staticClass:"hljs-attr"},[t._v("password")]),t._v(": process.env.SAUCE_ACCESS_KEY\n  },\n  "),v("span",{staticClass:"hljs-attr"},[t._v("json")]),t._v(": "),v("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v("body")]),t._v(": {\n    "),v("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("'https://example.com/tests.html'")]),t._v(",\n    "),v("span",{staticClass:"hljs-attr"},[t._v("framework")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("'mocha'")]),t._v(",\n    "),v("span",{staticClass:"hljs-attr"},[t._v("platforms")]),t._v(": [\n      ["),v("span",{staticClass:"hljs-string"},[t._v("'Windows 7'")]),t._v(", "),v("span",{staticClass:"hljs-string"},[t._v("'firefox'")]),t._v(", "),v("span",{staticClass:"hljs-string"},[t._v("'27'")]),t._v("],\n      ["),v("span",{staticClass:"hljs-string"},[t._v("'Linux'")]),t._v(", "),v("span",{staticClass:"hljs-string"},[t._v("'chrome'")]),t._v(", "),v("span",{staticClass:"hljs-string"},[t._v("'latest'")]),t._v("]\n    ]\n  }\n}, (err, response) => {\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (err) {\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".error(err);\n  } "),v("span",{staticClass:"hljs-keyword"},[t._v("else")]),t._v(" {\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(response.body);\n  }\n});")])]),v("p",[t._v("注意，在 POST 的 body 中的 "),v("code",[t._v("framework: 'mocha'")]),t._v("。Sauce Labs 支持许多流行的 JavaScript 单元测试框架，如 Mocha，Jasmine，QUnit，以及 YUI。“支持”仅仅意味着，Sauce Lab 的 Webdriver 知道去哪找到测试结果（尽管多数情况下，你还是得自己填这些 —— 等会儿再细说）。")]),t._v(" "),v("p",[t._v("如果你所使用的测试框架不在上述列表中，可以设置 "),v("code",[t._v("framework: 'custom'")]),t._v("，这样 Sauce Labs 就会去寻找一个叫 "),v("code",[t._v("window.global_test_results")]),t._v(" 的全局变量。结果的格式在文档的 "),v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/Reporting+JavaScript+Unit+Test+Results+to+Sauce+Labs+Using+a+Custom+Framework",target:"_blank"}},[t._v("custom framework")]),t._v(" 小节中列出来了。")]),t._v(" "),v("h4",{attrs:{id:"webdriver-mocha-"}},[t._v("Webdriver 获取 Mocha 测试结果")]),t._v(" "),v("p",[t._v("就算一开始请求时你已经告诉 Sauce Labs 你在使用 Mocha，你还是得更新页面的 HTML，将测试结果保存在一个 Sauce Labs 能够访问的全局变量中。")]),t._v(" "),v("p",[t._v("为支持 Mocha，将页面中的如下代码：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-html"},[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),v("span",{staticClass:"javascript"},[t._v("\nmocha.setup("),v("span",{staticClass:"hljs-string"},[t._v("'bdd'")]),t._v(");\n"),v("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".onload = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n  mocha.run();\n};\n")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])]),v("p",[t._v("修改成：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-html"},[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),v("span",{staticClass:"javascript"},[t._v("\nmocha.setup("),v("span",{staticClass:"hljs-string"},[t._v("'bdd'")]),t._v(");\n"),v("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".onload = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" runner = mocha.run();\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" failedTests = [];\n\n  runner.on("),v("span",{staticClass:"hljs-string"},[t._v("'end'")]),t._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".mochaResults = runner.stats;\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".mochaResults.reports = failedTests;\n  });\n\n  runner.on("),v("span",{staticClass:"hljs-string"},[t._v("'fail'")]),t._v(", logFailure);\n\n  "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),v("span",{staticClass:"hljs-title"},[t._v("logFailure")]),t._v("("),v("span",{staticClass:"hljs-params"},[t._v("test, err")]),t._v(")")]),t._v("{\n    "),v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" flattenTitles = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),v("span",{staticClass:"hljs-params"},[t._v("test")]),t._v(")")]),t._v("{\n      "),v("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" titles = [];\n      "),v("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (test.parent.title){\n        titles.push(test.parent.title);\n        test = test.parent;\n      }\n      "),v("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" titles.reverse();\n    };\n\n    failedTests.push({\n      "),v("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": test.title,\n      "),v("span",{staticClass:"hljs-attr"},[t._v("result")]),t._v(": "),v("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(",\n      "),v("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": err.message,\n      "),v("span",{staticClass:"hljs-attr"},[t._v("stack")]),t._v(": err.stack,\n      "),v("span",{staticClass:"hljs-attr"},[t._v("titles")]),t._v(": flattenTitles(test)\n    });\n  };\n};\n")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])]),v("p",[t._v("以上代码与 Mocha 样板默认代码的唯一区别在于，该逻辑将测试结果赋值给 Sauce Labs 所期望的 "),v("code",[t._v("window.mochaResults")]),t._v(" 变量。新的代码不会影响浏览器中的手动测试，所以还可以像原来一样使用。")]),t._v(" "),v("p",[t._v("再强调此前提过的一点，Sauce Labs “运行”测试的时候，并非真正在运行什么东西，它只是访问一个网页，然后等到 "),v("code",[t._v("window.mochaResults")]),t._v(" 对象被发现有值了。然后再记录结果。")]),t._v(" "),v("h4",{attrs:{id:"-"}},[t._v("判断测试是否通过")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-StartJSUnitTests",target:"_blank"}},[t._v("开始 JS 单元测试 (Start JS Unit Tests)")]),t._v(" 方法告诉 Sauce Labs 按照队列在你所要求的浏览器/平台中运行测试，但它并未范围测试结果。")]),t._v(" "),v("p",[t._v("它所返回的仅仅只是队列中任务的 ID。响应大概像下面这样：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-json"},[t._v("{\n  "),v("span",{staticClass:"hljs-attr"},[t._v('"js tests"')]),t._v(": [\n    "),v("span",{staticClass:"hljs-string"},[t._v('"9b6a2d7e6c8d4fd2afeeb0ff7e54e694"')]),t._v(",\n    "),v("span",{staticClass:"hljs-string"},[t._v('"d38688ec7256497da6966f4523ddee76"')]),t._v(",\n    "),v("span",{staticClass:"hljs-string"},[t._v('"14054e68ccd344c0bed77a798a9ce1e8"')]),t._v(",\n    "),v("span",{staticClass:"hljs-string"},[t._v('"dbc54181f7d947458f52201ea5fcb901"')]),t._v("\n  ]\n}")])]),v("p",[t._v("要判断测试是否通过，可以调用"),v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-GetJSUnitTestStatus",target:"_blank"}},[t._v("获取 JS 单元测试状态（Get JS Unit Test Status）")]),t._v("方法，这个方面接受一个任务 ID 列表，返回每个任务的当前状态。")]),t._v(" "),v("p",[t._v("定期调用这个方法，直到所有的工作完成。")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[t._v("request({\n  "),v("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("`https://saucelabs.com/rest/v1/"),v("span",{staticClass:"hljs-subst"},[t._v("${username}")]),t._v("/js-tests/status`")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v("method")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("'POST'")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v("auth")]),t._v(": {\n    "),v("span",{staticClass:"hljs-attr"},[t._v("username")]),t._v(": process.env.SAUCE_USERNAME,\n    "),v("span",{staticClass:"hljs-attr"},[t._v("password")]),t._v(": process.env.SAUCE_ACCESS_KEY\n  },\n  "),v("span",{staticClass:"hljs-attr"},[t._v("json")]),t._v(": "),v("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v("body")]),t._v(": jsTests, "),v("span",{staticClass:"hljs-comment"},[t._v("// The response.body from the first API call.")]),t._v("\n\n}, (err, response) => {\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (err) {\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".error(err);\n  } "),v("span",{staticClass:"hljs-keyword"},[t._v("else")]),t._v(" {\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(response.body);\n  }\n});")])]),v("p",[t._v("响应大致如下：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-json"},[t._v("{\n  "),v("span",{staticClass:"hljs-attr"},[t._v('"completed"')]),t._v(": "),v("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(",\n  "),v("span",{staticClass:"hljs-attr"},[t._v('"js tests"')]),t._v(": [\n    {\n      "),v("span",{staticClass:"hljs-attr"},[t._v('"url"')]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v('"https://saucelabs.com/jobs/75ac4cadb85e415fae957f7811d778b8"')]),t._v(",\n      "),v("span",{staticClass:"hljs-attr"},[t._v('"platform"')]),t._v(": [\n        "),v("span",{staticClass:"hljs-string"},[t._v('"Windows 10"')]),t._v(",\n        "),v("span",{staticClass:"hljs-string"},[t._v('"chrome"')]),t._v(",\n        "),v("span",{staticClass:"hljs-string"},[t._v('"latest"')]),t._v("\n      ],\n      "),v("span",{staticClass:"hljs-attr"},[t._v('"result"')]),t._v(": {\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"passes"')]),t._v(": "),v("span",{staticClass:"hljs-number"},[t._v("29")]),t._v(",\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"tests"')]),t._v(": "),v("span",{staticClass:"hljs-number"},[t._v("30")]),t._v(",\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"end"')]),t._v(": {},\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"suites"')]),t._v(": "),v("span",{staticClass:"hljs-number"},[t._v("7")]),t._v(",\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"reports"')]),t._v(": [],\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"start"')]),t._v(": {},\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"duration"')]),t._v(": "),v("span",{staticClass:"hljs-number"},[t._v("97")]),t._v(",\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"failures"')]),t._v(": "),v("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(",\n        "),v("span",{staticClass:"hljs-attr"},[t._v('"pending"')]),t._v(": "),v("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("\n      },\n      "),v("span",{staticClass:"hljs-attr"},[t._v('"id"')]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v('"1f74a237d5ba4a47b5a42570ae1e7999"')]),t._v(",\n      "),v("span",{staticClass:"hljs-attr"},[t._v('"job_id"')]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v('"75ac4cadb85e415fae957f7811d778b8"')]),t._v("\n    },\n    // ... the rest of the jobs\n  ]\n}")])]),v("p",[t._v("一旦 "),v("code",[t._v("response.body.complete")]),t._v(" 属性变为 "),v("code",[t._v("true")]),t._v("，所有测试结束，然后就能遍历以获取测试结果。")]),t._v(" "),v("h3",{attrs:{id:"-localhost-"}},[t._v("通过 localhost 测试")]),t._v(" "),v("p",[t._v("前面说过，Sauce Labs 是通过访问 URL “运行”测试的。所以这也意味着你所使用的 URL 必须是互联网上能公开访问的。")]),t._v(" "),v("p",[t._v("这样一来，如果要通过 "),v("code",[t._v("localhost")]),t._v(" 跑测试，那就有问题了。")]),t._v(" "),v("p",[t._v("已经有一些解决该问题的工具了，包括 "),v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy",target:"_blank"}},[t._v("Sauce Connect")]),t._v(" (官方推荐)，这是 Sauce Labs 创建的一个代理服务器，它在本地服务器与 Sauce Labs 虚拟机之间开了一个安全连接。")]),t._v(" "),v("p",[t._v("Sauce Connect 是按照安全的要求来设计的，通过它，外人几乎不可能访问到你的代码。不过它的一个缺点是配置、使用极其复杂。")]),t._v(" "),v("p",[t._v("如果代码安全性很重要，Sauce Connect 可能值得一试；否则的话，还有一些更简单的类似方案。")]),t._v(" "),v("p",[t._v("我选择的是 "),v("a",{attrs:{href:"https://ngrok.com/",target:"_blank"}},[t._v("ngrok")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"ngrok"}},[t._v("ngrok")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://ngrok.com/",target:"_blank"}},[t._v("ngrok")]),t._v(" 是建立与 localhost 之间的安全信道（secure tunnels）的工具。它提供一个公开的 URL"),v("a",{attrs:{href:"#footnote-2"}},[t._v("[2]")]),t._v(" 给本地的 Web 服务器，这个 URL 恰恰就是在 Sauce Labs 上运行测试所需要的。")]),t._v(" "),v("p",[t._v("如果你在虚拟机上做过开发或手动测试，可能已经听说过 ngrok；如果没有，建议你好好去看看。这是个非常有用的工具。")]),t._v(" "),v("p",[t._v("在开发机上安装 ngrok，和下载二进制文件、加入到 PATH 一样简单；不过，如果你要在 Node 中使用 ngrok，最后还是通过 npm 来安装。")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[t._v("npm install ngrok")])]),v("p",[t._v("在 Node 中通过以下代码，可以开启一个 ngrok 进程：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-javascript"},[v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" ngrok = "),v("span",{staticClass:"hljs-built_in"},[t._v("require")]),t._v("("),v("span",{staticClass:"hljs-string"},[t._v("'ngrok'")]),t._v(");\n\nngrok.connect(port, (err, url) => {\n  "),v("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (err) {\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".error(err);\n  } "),v("span",{staticClass:"hljs-keyword"},[t._v("else")]),t._v(" {\n    "),v("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),v("span",{staticClass:"hljs-string"},[t._v("`Tests now accessible at: "),v("span",{staticClass:"hljs-subst"},[t._v("${url}")]),t._v("`")]),t._v(");\n  }\n});")])]),v("p",[t._v("一旦有了测试文件的公开 URL，使用 Sauce Labs 跨浏览器测试本地代码基本上就很简单啦！")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("过程整合")]),t._v(" "),v("p",[t._v("本文涵盖了不少话题，可能会给人以这样的印象：自动化跨浏览器的 JavaScript 单元测试很复杂。但实际上并不是这样的。")]),t._v(" "),v("p",[t._v("文章的框架是从我的角度来设定的 —— 我在试着解决自己的问题。而且就我自己的经验来看，真正的复杂之处仅仅是因为缺乏相关信息，整个过程如何工作，如何将所有这些整合起来。")]),t._v(" "),v("p",[t._v("如果理解了所有这些步骤，那就很简单了。总结起来就是这样：")]),t._v(" "),v("p",[v("strong",[t._v("最初的手动过程：")])]),t._v(" "),v("ol",[v("li",[t._v("编写测试，创建一个运行测试的 HTML 页面；")]),t._v(" "),v("li",[t._v("在一两个本地浏览器中运行测试，确保正常工作。")])]),t._v(" "),v("p",[v("strong",[t._v("添加自动化：")])]),t._v(" "),v("ol",[v("li",[t._v("新建 Sauce Labs 账号，获取用户名 和 access key；")]),t._v(" "),v("li",[t._v("更新测试页面的源码，使 Sauce Labs 能够通过全局变量读取测试结果；")]),t._v(" "),v("li",[t._v("使用 ngrok 创建安全信道连接本地测试页面，使其能公开访问；")]),t._v(" "),v("li",[t._v("列出测试的浏览器/平台列表，调用 "),v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-StartJSUnitTests",target:"_blank"}},[t._v("Start JS Unit Tests")]),t._v(" 方法；")]),t._v(" "),v("li",[t._v("周期调用 "),v("a",{attrs:{href:"https://wiki.saucelabs.com/display/DOCS/JavaScript+Unit+Testing+Methods#JavaScriptUnitTestingMethods-GetJSUnitTestStatus",target:"_blank"}},[t._v("Get JS Unit Test Status")]),t._v(" 直至测试结束；")]),t._v(" "),v("li",[t._v("报告测试结果。")])]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("更简单的方式")]),t._v(" "),v("p",[t._v("我知道本文开始的时候，我说了很多，你不需要任何框架来完成自动化、跨浏览器的 JavaScript 单元测试，我仍然坚信这一点。但尽管上述步骤很简单，你可能也并不想每个项目都重复去做。")]),t._v(" "),v("p",[t._v("我之前也有很多想要加入自动化测试的老项目，因此对我来说，将这些逻辑打包成模块是很有意义的。")]),t._v(" "),v("p",[t._v("强烈建议你自己尝试去实现，这样才能全面了解它如何工作。但如果你没有时间，且希望能快速搭建测试，建议你尝试我创建的 "),v("a",{attrs:{href:"https://github.com/philipwalton/easy-sauce",target:"_blank"}},[t._v("Easy Sauce")]),t._v(" 项目。")]),t._v(" "),v("h3",{attrs:{id:"easy-sauce"}},[t._v("Easy Sauce")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/philipwalton/easy-sauce",target:"_blank"}},[t._v("Easy Sauce")]),t._v(" 是一个 Node 包，一个命令行工具（"),v("code",[t._v("easy-sauce")]),t._v("）。它也是我现在使用的跨浏览器测试工具。")]),t._v(" "),v("p",[v("code",[t._v("easy-sauce")]),t._v(" 命令需要一个 HTML 测试文件的路径（默认为 "),v("code",[t._v("/test/")]),t._v("），一个启动本地服务器的端口（默认为 "),v("code",[t._v("1337")]),t._v("），以及以个测试的浏览器/平台列表。接下来 "),v("code",[t._v("easy-sauce")]),t._v(" 会在 Sauce Lab 云端运行测试，将结果打印到控制台上并退出，返回合适的状态码，标明测试是否通过。")]),t._v(" "),v("p",[t._v("为了方便 npm 包，"),v("code",[t._v("easy-sauce")]),t._v(" 默认会从 "),v("code",[t._v("package.json")]),t._v(" 中读取配置项，不用单纯储存它们。这样有个额外好处就是，使用你的包的用户，能够很清楚地看到你所支持的浏览器/平台。")]),t._v(" "),v("p",[t._v("关于 "),v("code",[t._v("easy-sauce")]),t._v(" 的完整使用指南，请移步 Github 上的"),v("a",{attrs:{href:"https://github.com/philipwalton/easy-sauce",target:"_blank"}},[t._v("文档")]),t._v("。")]),t._v(" "),v("p",[t._v("最后，我想强调的是，这个项目是专门来解决的我的用例的。虽然我觉得它可能对很多其他开发者会很有用，但我无意将其调转为功能齐全的测试解决方案。")]),t._v(" "),v("p",[v("code",[t._v("easy-sauce")]),t._v(" 的整个点在于，填补了我（我相信很多开发者也是如此）与合适的测试之间的复杂性裂缝。")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("总结")]),t._v(" "),v("p",[t._v("本文开始的时候，我写了一个需求列表。有了 Easy Sauce，现在我可以满足所有我工作项目上的需求。")]),t._v(" "),v("p",[t._v("如果你的项目还没用上自动化跨浏览器单元测试，我想鼓励你尝试下 Easy Sauce。就算你不使用它，至少你得有相关知识完成自己的解决方案，或者对现有工具有更好的理解。")]),t._v(" "),v("p",[t._v("测试愉快！")]),t._v(" "),v("p",{attrs:{id:"footnote-1"}},[t._v("\n1. 使用模板打包工具的一个缺点是堆栈跟踪（stack traces）目前对 source map 的支持还不是很好。Chrome 的一个解决办法是 "),v("a",{attrs:{href:"https://github.com/evanw/node-source-map-support#browser-support",target:"_blank"}},[t._v("node-source-map-support")]),t._v(" 模块。\n")]),t._v(" "),v("p",{attrs:{id:"footnote-2"}},[t._v("\n2. ngrok 生成的 URL 是公开的，这意味着理论上网络上的任何人都可以访问。不过，URL 是随机生成的，而测试只会跑那么几分钟，某人发现它的几率相当低。虽然没有 Sauce Connect 那么安全，相对也还是安全的。\n")])])},[],!1,null,null,null);n.default=component.exports}}]);