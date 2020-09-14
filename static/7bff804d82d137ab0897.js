(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{202:function(t,n,e){"use strict";e.r(n);var l={computed:{data:function(){return{title:"笔记：如何获取网站根域名",description:"笔记：如何获取网站根域名",keywords:"JavaScript,开发心得,原创",pathname:"get-root-domain-of-a-site",translation:null,create_time:"2017-04-26",prev:{title:"[译] Emoji.prototype.length  —— Unicode 字符那些事儿",pathname:"unicode-javascript-and-the-emoji-family"},next:{title:"周末闲谈",pathname:"2017-03-12-post"}}}}},_=e(2),component=Object(_.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("post",{attrs:{data:t.data}},[e("p",[t._v("首先声明，这里所说的“根域名”，并不是指“全球共有13台根逻辑域名服务器”这句话中的“根域名”。而是指某一个站点的“根域名”（更新：或者也可以称之为“当前网站的主域名”，目前笔者并没有找到标准称呼）。")]),t._v(" "),e("p",[t._v("百度搜索是“www.baidu.com”，百度翻译的域名是“fanyi.baidu.com”，百度地图的域名则是“map.baidu.com”。这些域名有共同的部分“baidu.com”。在本文中，我们将“baidu.com”这样的域名称为“根域名”。前端同学应该都知道，在“.baidu.com”这一域下的 cookie 可以在其他子站点下拿到（当然，前提是端口号和协议都保持一致）。")]),t._v(" "),e("p",[t._v("最近开发的过程中遇上了一个小问题。无论访问哪个子站点，都要通过 js 将 cookie 存放到根域名下。")]),t._v(" "),e("p",[t._v("一开始比较大意，直接拿正则匹配。问题是忽略了这世界上还存在“www.xxx.edu.cn”这样的站点。在这种情况下，显然我们不能认为”edu.cn“是根域名。想在一个叫“edu.cn”的域下存 cookie？对不起，浏览器做不到。（这句话很重要。）")]),t._v(" "),e("p",[t._v("正则匹配是做不到了。搜索了一下，网上也没有什么特别好的解决方案。无非是枚举出国内常见的一些顶级域名，然后再进行处理，如下面这个 PHP 的例子：")]),t._v(" "),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww2.sinaimg.cn/large/006tNbRwly1ff0e6map85j31000nuq53.jpg",expression:"`https://ww2.sinaimg.cn/large/006tNbRwly1ff0e6map85j31000nuq53.jpg`"}],attrs:{alt:""}})]),t._v(" "),e("p",[t._v("但如何确保我们枚举出的例子一定是完全的无遗漏的呢？不完美，放弃。")]),t._v(" "),e("h2",{attrs:{id:"psl"}},[t._v("PSL")]),t._v(" "),e("p",[t._v("接着上 github 上去找例子。倒是发现了一些解决域名的工具。比如一个名为 "),e("a",{attrs:{href:"https://github.com/wrangr/psl",target:"_blank"}},[t._v("psl")]),t._v(" 的仓库。")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://publicsuffix.org/",target:"_blank"}},[t._v("PSL")]),t._v(" 是 “Public Suffix List” 的缩写，这个“公共域名后缀列表”项目本来是供浏览器厂商使用的。可以访问"),e("a",{attrs:{href:"https://publicsuffix.org/",target:"_blank"}},[t._v("官网")]),t._v("，另外建议看看这篇"),e("a",{attrs:{href:"https://imququ.com/post/domain-public-suffix-list.html",target:"_blank"}},[t._v("《域名小知识：Public Suffix List》")]),t._v("。")]),t._v(" "),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww1.sinaimg.cn/large/006tNbRwly1ff0ei3m2wlj31f80ey0us.jpg",expression:"`https://ww1.sinaimg.cn/large/006tNbRwly1ff0ei3m2wlj31f80ey0us.jpg`"}],attrs:{alt:""}})]),t._v(" "),e("p",[t._v("我搜索到的这个 psl 仓库正是基于 PSL、使用 js 来解析域名的。粗略看了下，存放域名的 json 文件有 108 KB。吓死了。")]),t._v(" "),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww3.sinaimg.cn/large/006tNbRwly1ff0eipy8z6j31ku0i4abp.jpg",expression:"`https://ww3.sinaimg.cn/large/006tNbRwly1ff0eipy8z6j31ku0i4abp.jpg`"}],attrs:{alt:""}})]),t._v(" "),e("p",[t._v("另一款叫做 "),e("a",{attrs:{href:"https://github.com/peerigon/parse-domain/",target:"_blank"}},[t._v("parse-domain")]),t._v(" 的，光是生成的正则表达式文件就有 203 KB。")]),t._v(" "),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww4.sinaimg.cn/large/006tNbRwly1ff0elsqwolj31ju0jmaco.jpg",expression:"`https://ww4.sinaimg.cn/large/006tNbRwly1ff0elsqwolj31ju0jmaco.jpg`"}],attrs:{alt:""}})]),t._v(" "),e("p",[t._v("没办法，一个跑到浏览器上的前端脚本，本身不到 1500 行，为了一个判断引入上百 KB 的外部依赖，实在不划算。")]),t._v(" "),e("p",[t._v("于是只能自己另起炉灶，想想别的办法。")]),t._v(" "),e("h2",{attrs:{id:"document-domain"}},[t._v("document.domain")]),t._v(" "),e("p",[t._v("首先想到的是 "),e("code",[t._v("document.domain")]),t._v("。在一些需要跨域的场景中，可能会见到这货的身影。比如"),e("a",{attrs:{href:"http://www.tuicool.com/articles/jmY3Yr6",target:"_blank"}},[t._v("这篇文章")]),t._v(" 所描述的，“相同主域名不同子域名下的页面，可以设置 document.domain 让它们同域”。")]),t._v(" "),e("p",[t._v("经过测试发现，对于域名"),e("code",[t._v("c.example.edu.cn")]),t._v("下的页面，可以执行下面这句：")]),t._v(" "),e("pre",[e("code",{staticClass:"hljs lang-javascript"},[e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain = "),e("span",{staticClass:"hljs-string"},[t._v("'example.edu.cn'")]),t._v(";")])]),e("p",[t._v("而在 Chrome 下，下面这句则无法执行：")]),t._v(" "),e("pre",[e("code",{staticClass:"hljs lang-javascript"},[e("span",{staticClass:"hljs-comment"},[t._v("// DOMException")]),t._v("\n"),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain = "),e("span",{staticClass:"hljs-string"},[t._v("'edu.cn'")]),t._v(";")])]),e("p",[t._v("浏览器会抛出"),e("code",[t._v("DOMException")]),t._v("：")]),t._v(" "),e("blockquote",[e("p",[t._v("1 Uncaught DOMException: Failed to set the 'domain' property on 'Document': 'edu.cn' is not a suffix of 'c.example.edu.cn'.")])]),t._v(" "),e("p",[t._v("IE 也会报出“参数无效”的错误；Firefox 下同样会抛出错误：")]),t._v(" "),e("blockquote",[e("p",[t._v("NS_ERROR_DOM_BAD_DOCUMENT_DOMAIN: Illegal document.domain value")])]),t._v(" "),e("p",[t._v("从报错信息可以看到， DOMException 是可以捕获到的。那就好办了。")]),t._v(" "),e("p",[t._v("将域名（或页面当前的 "),e("code",[t._v("document.domain")]),t._v("） split 成数据 "),e("code",[t._v("['x', 'example', 'edu', 'cn']")]),t._v("，从右向左逐次加上一个元素，每次将单词使用句点连接并赋值给 "),e("code",[t._v("document.domain")]),t._v("。如果 catch 到错误，则进行下一次操作。一旦赋值成功，即可 break 循环。")]),t._v(" "),e("p",[t._v("上代码：")]),t._v(" "),e("pre",[e("code",{staticClass:"hljs lang-javascript"},[e("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" domain = "),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain;\n"),e("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" list = domain.split("),e("span",{staticClass:"hljs-string"},[t._v("'.'")]),t._v(");\n\n"),e("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" len = list.length;\n"),e("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" rootDomain = domain;\n\n"),e("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (len--) {\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("try")]),t._v(" {\n    "),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain = list.slice(len).join("),e("span",{staticClass:"hljs-string"},[t._v("'.'")]),t._v(");\n    rootDomain = "),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain;\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("break")]),t._v(";\n  } "),e("span",{staticClass:"hljs-keyword"},[t._v("catch")]),t._v(" (e) {}\n}\n\n"),e("span",{staticClass:"hljs-comment"},[t._v("// 还得恢复原值，避免产生副作用")]),t._v("\n"),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain = domain;\n\n"),e("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(rootDomain);")])]),e("p",[t._v("很好，经过简单测试，Chrome、IE 妥妥的。")]),t._v(" "),e("p",[t._v("然而 Firefox 挂了。挂在最后的还原阶段。也就是说，Firefox 允许修改 "),e("code",[t._v("document.domain")]),t._v("，但不允许修改成上一级之后，再回退到下一级。")]),t._v(" "),e("p",[t._v("此外（感谢老大），在 Safari 上测试发现，"),e("code",[t._v("document.domain = 'cn'")]),t._v(" 不会报错！什么鬼？请移步"),e("a",{attrs:{href:"https://imququ.com/post/document-domain-bug-in-webkit.html",target:"_blank"}},[t._v("《Webkit下最无敌的跨大域方案》")]),t._v("。")]),t._v(" "),e("p",[t._v("功亏一篑。心好累啊。")]),t._v(" "),e("h2",{attrs:{id:"cookie-"}},[t._v("Cookie 救火")]),t._v(" "),e("p",[t._v("最后想起前面提到的一句，“想在一个叫 edu.cn 的域下存 cookie？对不起，浏览器做不到。”")]),t._v(" "),e("p",[t._v("要不咱试试 cookie？动手！")]),t._v(" "),e("p",[t._v("道理同上，每次尝试在手动拼接的 domain 下面存 cookie，然后检查 cookie 是否保存成功。一旦成功，则 break 循环，并清除该 cookie。没有副作用，只是多操作几次 cookie。")]),t._v(" "),e("p",[t._v("换个思路，总算是解决了。")]),t._v(" "),e("p",[t._v("代码被我放在了 "),e("a",{attrs:{href:"https://github.com/AngusFu/browser-root-domain",target:"_blank"}},[t._v("Github")]),t._v(" 上。顺手贴在这里：")]),t._v(" "),e("pre",[e("code",{staticClass:"hljs lang-javascript"},[e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" KEY = "),e("span",{staticClass:"hljs-string"},[t._v("'__rT_dM__'")]),t._v(" + (+"),e("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),e("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("());\n"),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" R = "),e("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),e("span",{staticClass:"hljs-built_in"},[t._v("RegExp")]),t._v("("),e("span",{staticClass:"hljs-string"},[t._v("'(^|;)\\\\s*'")]),t._v(" + KEY + "),e("span",{staticClass:"hljs-string"},[t._v("'=1'")]),t._v(");\n"),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" Y1970 = ("),e("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),e("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("("),e("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(")).toUTCString();\n\n"),e("span",{staticClass:"hljs-built_in"},[t._v("module")]),t._v(".exports = "),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),e("span",{staticClass:"hljs-title"},[t._v("getRootDomain")]),t._v("("),e("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" domain = "),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".domain || location.hostname;\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" list = domain.split("),e("span",{staticClass:"hljs-string"},[t._v("'.'")]),t._v(");\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" len = list.length;\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" temp = "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(";\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" temp2 = "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(";\n\n  "),e("span",{staticClass:"hljs-keyword"},[t._v("while")]),t._v(" (len--) {\n    temp = list.slice(len).join("),e("span",{staticClass:"hljs-string"},[t._v("'.'")]),t._v(");\n    temp2 = KEY + "),e("span",{staticClass:"hljs-string"},[t._v("'=1;domain=.'")]),t._v(" + temp;\n\n    "),e("span",{staticClass:"hljs-comment"},[t._v("// try to set cookie")]),t._v("\n    "),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".cookie = temp2;\n\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (R.test("),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".cookie)) {\n      "),e("span",{staticClass:"hljs-comment"},[t._v("// clear")]),t._v("\n      "),e("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".cookie = temp2 + "),e("span",{staticClass:"hljs-string"},[t._v("';expires='")]),t._v(" + Y1970;\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" temp;\n    }\n  }\n};")])]),e("h2",{attrs:{id:"-20170504"}},[t._v("更新@20170504")]),t._v(" "),e("p",[t._v("今天在奇舞周刊的评论区看到有同学的评论。看来我遇到的问题，很早就有人遇到过了。\n顺着评论看了下，知乎的这个回答非常清晰："),e("a",{attrs:{href:"https://www.zhihu.com/question/20994750?sort=created",target:"_blank"}},[t._v("如何使用正则表达式得到一个 URL 中的主域名")]),t._v("。\n当初真没想到“主域名”这个词，满脑子都是“根域名”。结果就与这回答失之交臂。当然，如果早点遇到知乎的回答，也就不会有这篇文章了吧。")])])},[],!1,null,null,null);n.default=component.exports}}]);