(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{204:function(t,e,l){"use strict";l.r(e);var r={computed:{data:function(){return{title:"[译] HTTP2 Server Push 实践：单 Link  报头包含多资源场景",description:"HTTP2 Server Push 实践：单 Link  报头包含多资源场景",keywords:"翻译,HTTP2,Server Push",pathname:"http-2-server-push-with-multiple-assets-per-link-header",translation:{author:"John Graham-Cumming",social:"https://blog.cloudflare.com/author/john-graham-cumming/",from:"https://blog.cloudflare.com/http-2-server-push-with-multiple-assets-per-link-header/"},create_time:"2016-07-17",prev:{title:"[译] 盘点即将影响世界的九大创新",pathname:"9-innovations-that-could-become-the-next-big-thing"},next:{title:"[译] Hybrid or Native： 适合工作的才是最好的",pathname:"hybrid-or-native-mobile-app-use-the-right-tool-for-the-job"}}}}},v=l(2),component=Object(v.a)(r,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("post",{attrs:{data:t.data}},[l("h2",{attrs:{id:"-"}},[t._v("译者注")]),t._v(" "),l("p",[t._v("译者在做自己的一个小工具（抓取博客的 Chrome 扩展）的时候，使用 jQuery 辅助作为 DOM 解析器，为了避免加载图片、脚本、样式表等无用的资源，在将字符串传给 "),l("code",[t._v("$")]),t._v(" 的时候，先对字符串中的相关标签进行了处理。")]),t._v(" "),l("p",[t._v("但遇到"),l("a",{attrs:{href:"https://www.qianduan.net/",target:"_blank"}},[t._v("某个网站")]),t._v("的时候，一直疑惑不解，"),l("strong",[t._v("明明已经做了替换")]),t._v("，但通过 Chrome Devtools 能看到，"),l("strong",[t._v("部分资源还是会下载")]),t._v("。几经折腾，发现还是因为自己"),l("strong",[t._v("懂得太少")]),t._v("了。")]),t._v(" "),l("p",[t._v("查看请求该页面时的 header，可以看到了如下信息：")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("link:"),l("span",{staticClass:"xml"},[l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("assets")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("css")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("screen.css")]),t._v("?"),l("span",{staticClass:"hljs-attr"},[t._v("v")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v("5bb156d854")]),t._v(">")]),t._v("; rel=preload; as=style, "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("content")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("images")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("2015")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("10")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("avatar.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("content")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("images")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("2015")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("10")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("avatar.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("content")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("images")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("2015")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("10")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("avatar.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("content")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("images")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("2015")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("10")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("avatar.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("content")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("images")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("2015")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("10")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("avatar.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("<//"),l("span",{staticClass:"hljs-attr"},[t._v("www.qianduan.net")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("give-me-five")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("xitu.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("<//"),l("span",{staticClass:"hljs-attr"},[t._v("www.qianduan.net")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("apps")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("shinning.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("<//"),l("span",{staticClass:"hljs-attr"},[t._v("www.qianduan.net")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("apps")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("shakeme.jpg")]),t._v(">")]),t._v("; rel=preload; as=image, "),l("span",{staticClass:"hljs-tag"},[t._v("<//"),l("span",{staticClass:"hljs-attr"},[t._v("www.qianduan.net")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("give-me-five")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("qianduan_wechat.jpg")]),t._v(">")]),t._v("; rel=preload; as=image")])])]),l("p",[t._v("于是，大概能猜出来上述问题的原因。这有点类似如一些站点会使用的 "),l("code",[t._v('<link rel="preload" href="/styles/other.css" as="style">')]),t._v(" 标签（顺带一句，截至 2016 年 7 月 17 日，"),l("a",{attrs:{href:"http://caniuse.com/#search=preload",target:"_blank"}},[t._v("caniuse")]),t._v(" 数据：China = 26.83%；Global = 44.59%）。")]),t._v(" "),l("p",[t._v("于是深入挖掘了一下。来看看 "),l("a",{attrs:{href:"https://w3c.github.io/preload/#introduction",target:"_blank"}},[t._v("W3C 标准")]),t._v("是怎么说的（同样由译者翻译）：")]),t._v(" "),l("p",[t._v("例如，应用可以使用 preload 关键词，提前、高优先级、不阻塞渲染地拉取的 CSS 资源，它会在适当的时候被使用：")]),t._v(" "),l("p",[t._v("例一：使用标签")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-html"},[l("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- 通过声明标签预加载样式表 --\x3e")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("link")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("rel")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"preload"')]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"/styles/other.css"')]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("as")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"style"')]),t._v(">")]),t._v("\n\n"),l("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- 或者通过 JavaScript 预加载样式表  --\x3e")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),l("span",{staticClass:"javascript"},[t._v("\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" res = "),l("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".createElement("),l("span",{staticClass:"hljs-string"},[t._v('"link"')]),t._v(");\n    res.rel = "),l("span",{staticClass:"hljs-string"},[t._v('"preload"')]),t._v(";\n    res.as = "),l("span",{staticClass:"hljs-string"},[t._v('"style"')]),t._v(";\n    res.href = "),l("span",{staticClass:"hljs-string"},[t._v('"styles/other.css"')]),t._v(";\n    "),l("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".head.appendChild(res);\n")]),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])]),l("p",[t._v("例二：使用  HTTP Header")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("Link: "),l("span",{staticClass:"xml"},[l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("https:")]),t._v("//"),l("span",{staticClass:"hljs-attr"},[t._v("example.com")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("other")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("styles.css")]),t._v(">")]),t._v("; rel=preload; as=style")])])]),l("p",[t._v("上面的例子说明，资源可以通过声明性标记、HTTP header link 来指定，或者使用 JavaScript 预定。")]),t._v(" "),l("p",[t._v("记录以下资源备忘：")]),t._v(" "),l("ul",[l("li",[l("p",[l("a",{attrs:{href:"https://w3c.github.io/preload/",target:"_blank"}},[t._v("https://w3c.github.io/preload/")])])]),t._v(" "),l("li",[l("p",[l("a",{attrs:{href:"http://caniuse.com/#search=preload",target:"_blank"}},[t._v("http://caniuse.com/#search=preload")])])]),t._v(" "),l("li",[l("p",[l("a",{attrs:{href:"http://stackoverflow.com/questions/36641137/how-exactly-does-link-rel-preload-work",target:"_blank"}},[t._v("http://stackoverflow.com/questions/36641137/how-exactly-does-link-rel-preload-work")])])]),t._v(" "),l("li",[l("p",[l("a",{attrs:{href:"https://blog.cloudflare.com/http-2-server-push-with-multiple-assets-per-link-header/?",target:"_blank"}},[t._v("https://blog.cloudflare.com/http-2-server-push-with-multiple-assets-per-link-header/")]),t._v("（也就是本文）")])])]),t._v(" "),l("p",[t._v("译文标题为意译，原标题为 "),l("code",[t._v("HTTP/2 Server Push with multiple assets per Link header")]),t._v("，恐有不当，特此说明。")]),t._v(" "),l("p",[t._v("另，为加强理解 "),l("code",[t._v("link")]),t._v(" 报头与 "),l("code",[t._v("HTTP/2 Server Push")]),t._v(" 二者，译文正文后附有 W3C preload 标准中 "),l("a",{attrs:{href:"https://w3c.github.io/preload/#server-push-http-2",target:"_blank"}},[t._v("“Server Push (HTTP/2)”")]),t._v(" 一节译文。或有助于读懂本文。")]),t._v(" "),l("font",{staticStyle:{color:"red"}},[l("strong",[t._v("注： 译文中凡是 “link 响应头” 的名词，英文为 “Link header”，翻译为“响应头 Link 字段”或许更恰当。")])]),t._v(" "),l("h2",{attrs:{id:"-"}},[t._v("正文")]),t._v(" "),l("p",[t._v("四月份的时候，我们"),l("a",{attrs:{href:"https://blog.cloudflare.com/announcing-support-for-http-2-server-push-2/",target:"_blank"}},[t._v("宣布")]),t._v("为所有的 CloudFlare  网站添加了 "),l("a",{attrs:{href:"https://www.cloudflare.com/http2/server-push/",target:"_blank"}},[t._v("HTTP/2 Server Push")]),t._v(" 试验性支持。这样做是为了让客户能够在该新功能的基础上进行迭代。")]),t._v(" "),l("p",[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://blog.cloudflare.com/content/images/2016/06/1673801831_a93ecfc3c4_z.jpg",expression:"`https://blog.cloudflare.com/content/images/2016/06/1673801831_a93ecfc3c4_z.jpg`"}],attrs:{alt:""}})]),t._v(" "),l("p",[l("small",[l("a",{attrs:{href:"https://creativecommons.org/licenses/by/2.0/",target:"_blank"}},[t._v("CC BY 2.0")]),t._v(" "),l("a",{attrs:{href:"https://www.flickr.com/photos/mryipyop/1673801831/in/photolist-3xUEYg-nMS6rx-jvSsLx-9oBV3s-8KH2YK-o54g8R-8h4bmw-eapSfS-cj4No3-nMSXLP-nMRZQJ-iNpH9k-hcr3m3-nMS6ui-5RDVrK-fAaYES-nMXwba-cNFT3N-iZDTWg-k5VzKt-jeJE8T-7bM32E-d3rznG-89jZ9e-aVLkBT-4y2kdD-qtKzjY-62Yv2h-5WcKeC-87jJdA-5Es3vn-bQ8W5a-7DhbKd-hE5oza-6NutL7-5WLwFt-hcnrny-5WAoU1-5mSoVV-8RSQ7A-gXiVcG-5Wp6pS-8GFkMr-hcoeN9-bC1zH5-ePG8BQ-hcokfv-hcpgme-hcqQ59-qUkfTa",target:"_blank"}},[t._v("image")]),t._v(" by "),l("a",{attrs:{href:"https://blog.cloudflare.com/http-2-server-push-with-multiple-assets-per-link-header/Mike",target:"_blank"}},[t._v("https://www.flickr.com/photos/mryipyop/")])])]),t._v(" "),l("p",[t._v("我们的 Server Push 实现，利用了 "),l("a",{attrs:{href:"https://blog.cloudflare.com/announcing-support-for-http-2-server-push-2/#fnref:1",target:"_blank"}},[t._v("HTTP "),l("code",[t._v("Link")])]),t._v(" 报头，这在 W3C "),l("a",{attrs:{href:"https://www.w3.org/TR/preload/",target:"_blank"}},[t._v("Preload")]),t._v(" 工作草案中有详细描述。")]),t._v(" "),l("p",[t._v("同样，我们还展示了，如何在 "),l("a",{attrs:{href:"https://blog.cloudflare.com/using-http-2-server-push-with-php/",target:"_blank"}},[t._v("PHP 代码")]),t._v(" 中实现 Server Push，许多人已经开始测试、使用该特性了。")]),t._v(" "),l("p",[t._v("然而，我们的初始版本有很严格的限制：使用 Server Push，则每个 "),l("code",[t._v("link")]),t._v(" 报头中，最多只能指定一个资源，另外，很多 CMS 和 Web 开发平台都不允许存在多个 "),l("code",[t._v("link")]),t._v(" 报头。")]),t._v(" "),l("p",[t._v("现在该问题已得到解决，多个资源可以通过单个 "),l("code",[t._v("link")]),t._v(" 报头推送。修改是实时生效的，如果你的浏览器支持 HTTP/2 的话，你正在阅读的本文就使用了该方式推送资源。")]),t._v(" "),l("p",[t._v("当 CloudFlare 读到源服务器（origin web server）的 "),l("code",[t._v("link")]),t._v(" 报头时，它从中移除其中已通过 Server Push 推送给浏览器的资源。这样一来，要 debug "),l("code",[t._v("link")]),t._v(" 和 Server Push 问题就困难了，所以我们又加上了一个叫做 "),l("code",[t._v("Cf-H2-Pushed")]),t._v(" 的报头，它包含已经推送过的资源。")]),t._v(" "),l("p",[t._v("举个例子。打开最近的"),l("a",{attrs:{href:"https://blog.cloudflare.com/the-complete-guide-to-golang-net-http-timeouts/",target:"_blank"}},[t._v("这篇博客")]),t._v("，源服务器就会发送以下报头：")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("Cache-Control: public, max-age="),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("\nContent-Encoding: gzip\nContent-Length: "),l("span",{staticClass:"hljs-number"},[t._v("33640")]),t._v("\nContent-Type: text/html; charset=utf"),l("span",{staticClass:"hljs-number"},[t._v("-8")]),t._v("\n"),l("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v(": Wed, "),l("span",{staticClass:"hljs-number"},[t._v("29")]),t._v(" Jun "),l("span",{staticClass:"hljs-number"},[t._v("2016")]),t._v(" "),l("span",{staticClass:"hljs-number"},[t._v("16")]),t._v(":"),l("span",{staticClass:"hljs-number"},[t._v("09")]),t._v(":"),l("span",{staticClass:"hljs-number"},[t._v("37")]),t._v(" GMT\nExpires: Wed, "),l("span",{staticClass:"hljs-number"},[t._v("29")]),t._v(" Jun "),l("span",{staticClass:"hljs-number"},[t._v("2016")]),t._v(" "),l("span",{staticClass:"hljs-number"},[t._v("16")]),t._v(":"),l("span",{staticClass:"hljs-number"},[t._v("10")]),t._v(":"),l("span",{staticClass:"hljs-number"},[t._v("07")]),t._v(" GMT\nLink: </assets/css/screen.css?v=5fc240c512>; rel=preload; as=style,<//cdn.bizible.com/scripts/bizible.js>; rel=preload; as=script,</content/images/2016/06/Timeouts-001.png>; rel=preload; as=image,</content/images/2016/06/Timeouts-002.png>; rel=preload; as=image,<//platform.linkedin.com/in.js>; rel=preload; as=script,<https://code.jquery.com/jquery-1.11.3.min.js>; rel=preload; as=script,</assets/js/jquery.fitvids.js?v=5fc240c512>; rel=preload; as=script\nVary: Accept-Encoding\nX-Ghost-Cache-Status:From Cache\nX-Powered-By: Express")])]),l("p",[t._v("CloudFlare 决定使用使用 HTTP/2 Server Push 推送这些资源：")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-string"},[t._v("`/assets/css/screen.css?v=5fc240c512`")]),t._v(",\n"),l("span",{staticClass:"hljs-string"},[t._v("`/content/images/2016/06/Timeouts-001.png`")]),t._v(",\n"),l("span",{staticClass:"hljs-string"},[t._v("`/content/images/2016/06/Timeouts-002.png`")]),t._v(",\n"),l("span",{staticClass:"hljs-string"},[t._v("`/assets/js/jquery.fitvids.js?v=5fc240c512`")])])]),l("p",[t._v("响应通过 CloudFlare 的时候，这些资源将从 "),l("code",[t._v("link")]),t._v(" 报头终移除，通过 Server Push 推送，并被添加到 "),l("code",[t._v("Cf-H2-Pushed")]),t._v(" 报头中：")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("cache-control:public, max-age="),l("span",{staticClass:"hljs-number"},[t._v("30")]),t._v("\ncf-cache-status:EXPIRED\ncf-h2-pushed:</assets/css/screen.css?v=5fc240c512>,</content/images/2016/06/Timeouts-001.png>,</content/images/2016/06/Timeouts-002.png>,</assets/js/jquery.fitvids.js?v=5fc240c512>\ncontent-encoding:gzip\ncontent-type:text/html; charset=utf-8\ndate:Wed, 29 Jun 2016 16:09:37 GMT\nexpires:Wed, 29 Jun 2016 16:10:07 GMT\nlink:<//cdn.bizible.com/scripts/bizible.js>; rel=preload; as=script,<//platform.linkedin.com/in.js>; rel=preload; as=script,<https://code.jquery.com/jquery-1.11.3.min.js>; rel=preload; as=script\nserver:cloudflare-nginx\nstatus:200 OK\nvary:Accept-Encoding\nx-ghost-cache-status:From Cache\nx-powered-by:Express")])]),l("p",[t._v("在 Google Chrome 金丝雀版本（Google Chrome Canary）的开发者视图中可以看得很清楚。（译者注：翻译本文时译者使用的 Chrome 51.0.2704.106 m (64-bit) 确实无法看到 Push 信息，建议使用最新金丝雀版本一探究竟。）")]),t._v(" "),l("p",[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01b195f4dd002ab402.png",expression:"`https://p.ssl.qhimg.com/t01b195f4dd002ab402.png`"}],attrs:{alt:""}})]),t._v(" "),l("h3",{attrs:{id:"-"}},[t._v("结尾")]),t._v(" "),l("p",[t._v("如果你在使用  Server Push，请和我们联系。推送不同类型的资源（图片 vs 样式表 vs 脚本）、解决最佳的推送数量（目前我们支持 每页最多 50 条资源），我们对相关经验十分感兴趣。")]),t._v(" "),l("h2",{attrs:{id:"-server-push-http-2-"}},[t._v("附： Server Push (HTTP/2)")]),t._v(" "),l("p",[t._v("原文地址： "),l("a",{attrs:{href:"https://w3c.github.io/preload/#server-push-http-2",target:"_blank"}},[t._v("https://w3c.github.io/preload/#server-push-http-2")])]),t._v(" "),l("p",[t._v("HTTP/2 (["),l("a",{attrs:{href:"https://w3c.github.io/preload/#bib-RFC7540",target:"_blank"}},[t._v("RFC7540")]),t._v("]) 允许服务器先发制人地向客户端发送（“推送”）响应。推送的响应（pushed response）在语义上（semantically）与服务器对请求的响应（server responding to a request）是等价的，而且类似于预加载的响应（preloaded response）；它会被浏览器保存，在"),l("a",{attrs:{href:"https://w3c.github.io/preload/#dfn-match-a-preloaded-response",target:"_blank"}},[t._v("匹配到应用启动的其他请求")]),t._v("的时候被执行。像这样的，从应用角度来看，使用预加载和服务器推送的请求，并无差别。")]),t._v(" "),l("p",[t._v("服务器"),l("em",[t._v("可能")]),t._v("会为应用定义的那些有权限的 "),l("a",{attrs:{href:"https://w3c.github.io/preload/#dfn-preload-link",target:"_blank"}},[t._v("preload link")]),t._v(" 资源启用服务器推送。对那些声明的 "),l("a",{attrs:{href:"https://w3c.github.io/preload/#dfn-preload-link",target:"_blank"}},[t._v("preload link")]),t._v(" 资源来说，启用服务器推送消除了客户端和服务器之间的请求往返。可选地，如果某个通过 "),l("code",[t._v("link")]),t._v(" 报头("),l("a",{attrs:{href:"https://w3c.github.io/preload/#bib-RFC5988",target:"_blank"}},[t._v("RFC5988")]),t._v(")声明的资源不希望使用服务器推送，开发者*可以使用 "),l("code",[t._v("nopush")]),t._v(" 目标属性("),l("a",{attrs:{href:"https://w3c.github.io/preload/#bib-RFC5988",target:"_blank"}},[t._v("RFC5988")]),t._v("] section 5.4) 向服务器提供一个选择性退出的信号。示例如下：")]),t._v(" "),l("p",[t._v("例三")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("Link: "),l("span",{staticClass:"xml"},[l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("app")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("style.css")]),t._v(">")]),t._v("; rel=preload; as=style; nopush\nLink: "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("app")]),t._v("/"),l("span",{staticClass:"hljs-attr"},[t._v("script.js")]),t._v(">")]),t._v("; rel=preload; as=script")])])]),l("p",[t._v("Note：上面的示例，向一个可以使用 HTTP/2 推送的服务器提示， "),l("code",[t._v("/app/style.css")]),t._v(" 不应被推送（例如，来源方可能有额外信息显示其已经存在于缓存中），而  "),l("code",[t._v("/app/script.js")]),t._v(" 应当可以作为服务器推送的候选资源。")]),t._v(" "),l("p",[t._v("为 "),l("a",{attrs:{href:"https://w3c.github.io/preload/#dfn-preload-link",target:"_blank"}},[t._v("preload link")]),t._v(" 启用服务器推送是一个可选的优化项。比方说，服务器可能不会启用推送，如果它认为响应在客户端缓存中可以拿到：客户端会处理预加载指令，检查相关缓存，如果找不到资源则会发送请求。另外，服务器可能因为运维问题而不会启用推送，比如说可用服务器资源或者其他考量。最后，服务器推送的启用取决于协议的 HTTP/2 连接设置：客户端可能会限制或完全禁用服务器推送的使用。应用程序不应当依赖于服务器推送的可用性及其使用。")])],1)},[],!1,null,null,null);e.default=component.exports}}]);