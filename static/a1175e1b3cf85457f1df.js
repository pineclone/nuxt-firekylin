(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{229:function(t,e,v){"use strict";v.r(e);var _={computed:{data:function(){return{title:"Chrome 中的 “Tab to Search” 与 Open Search",description:"Chrome 中的 “Tab to Search” 与 Open Search",keywords:"原创,技巧",pathname:"opensearch",translation:null,create_time:"2017-05-08",prev:{title:"[译] GraphQL 的庐山真面目",pathname:"so-whats-this-graphql-thing-i-keep-hearing-about"},next:{title:"[译] 浏览器中的 ES6 module 实现",pathname:"es-modules-in-browsers"}}}}},n=v(2),component=Object(n.a)(_,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("post",{attrs:{data:t.data}},[v("h2",{attrs:{id:"-"}},[t._v("描述")]),t._v(" "),v("p",[t._v("在 Chrome 中新建标签页，输入网址的时候，浏览器会根据书签、历史记录进行自动补全，通过 Tab 键可以在浏览器提供的补全选项中切换。")]),t._v(" "),v("p",[t._v("有时可以发现，点击 Tab 的时候，地址栏右侧会出现“按 "),v("code",[t._v("tab")]),t._v(" 键可通过 XX 进行搜索”的提示。")]),t._v(" "),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww3.sinaimg.cn/large/006tNbRwly1fffki13mxvj30z80aw0tu.jpg",expression:"`https://ww3.sinaimg.cn/large/006tNbRwly1fffki13mxvj30z80aw0tu.jpg`"}],attrs:{alt:""}})]),t._v(" "),v("p",[t._v("再次点击 Tab，地址栏中文字，就变成了一段蓝色文字：“使用 XX 搜索”。")]),t._v(" "),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww3.sinaimg.cn/large/006tNbRwly1fffkisv96kj30t605idg5.jpg",expression:"`https://ww3.sinaimg.cn/large/006tNbRwly1fffkisv96kj30t605idg5.jpg`"}],attrs:{alt:""}})]),t._v(" "),v("p",[t._v("这时候就可以直接在地址栏中输入你要搜索的关键词，然后点击回车键，页面就会直接跳转到搜索页。")]),t._v(" "),v("p",[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ww2.sinaimg.cn/large/006tNbRwly1fffkjwhpavj316g0piq5c.jpg",expression:"`https://ww2.sinaimg.cn/large/006tNbRwly1fffkjwhpavj316g0piq5c.jpg`"}],attrs:{alt:""}})]),t._v(" "),v("p",[t._v("很多网站都能通过这种方式进行快捷搜索。常用的如谷歌、百度这些搜索引擎，后来发现，知乎、掘金、Github 等等网站也能实现。")]),t._v(" "),v("p",[t._v("奇舞周刊网站提供了技术文章的搜索功能，和一般搜索有所不同的是，奇舞周刊的 url 是将搜索词放在 url 的 hash 部分的。这样是否也能实现呢？")]),t._v(" "),v("h2",{attrs:{id:"-"}},[t._v("功能实现")]),t._v(" "),v("p",[t._v("带着这个问题，首先通过搜索引擎找答案。找到了，是一个叫做 OpenSearch 的方案。")]),t._v(" "),v("p",[t._v("解决方案很简单，在 HTML 文档的 "),v("code",[t._v("head")]),t._v(" 部分添加一个 "),v("code",[t._v("<link>")]),t._v(" 标签：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-html"},[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("link")]),t._v("\n    "),v("span",{staticClass:"hljs-attr"},[t._v("rel")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"search"')]),t._v("\n    "),v("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"/opensearch.xml"')]),t._v("\n    "),v("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"application/opensearchdescription+xml"')]),t._v("\n/>")])])]),v("p",[t._v("接着创建一个 XML 文件。文件内容如下：")]),t._v(" "),v("pre",[v("code",{staticClass:"hljs lang-xml"},[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("OpenSearchDescription")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("xmlns")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"http://a9.com/-/spec/opensearch/1.1/"')]),t._v(">")]),t._v("\n    "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("ShortName")]),t._v(">")]),t._v("奇舞周刊搜索"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("ShortName")]),t._v(">")]),t._v("\n    "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("Description")]),t._v(">")]),t._v("奇舞周刊为您提供技术文章搜索支持。"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("Description")]),t._v(">")]),t._v("\n    "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("Url")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"text/html"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("method")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"get"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("template")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"https://weekly.75team.com/search.html#{searchTerms}"')]),t._v("/>")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("OpenSearchDescription")]),t._v(">")])])]),v("p",[t._v("上面这段是最简单的配置。"),v("code",[t._v("ShortName")]),t._v(" 相当于前面举例中的 “XX”。"),v("code",[t._v("Description")]),t._v(" 字段目前尚未在实际操作的 UI 呈现中看到。"),v("code",[t._v("Url")]),t._v(" 字段的关键在 "),v("code",[t._v("template")]),t._v(" 属性，该属性值是搜索页地址模板。")]),t._v(" "),v("p",[t._v("需要注意的是，这个 XML 文档必须放在当前域名下的 server 上。关于 OpenSearch XML 文档的各个地址配置，请参考 "),v("a",{attrs:{href:"http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document",target:"_blank"}},[t._v("OpenSearch 规范")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"-form-"}},[t._v("通过 Form 实现")]),t._v(" "),v("p",[t._v("此外，根据 "),v("a",{attrs:{href:"http://dev.chromium.org/tab-to-search",target:"_blank"}},[t._v("Chromium 的文档")]),t._v("描述，还有一种方式可以实现 “Tab to search”，即当网站中存在一个用户提交的表单时，Chrome 会自动将该网站添加到可搜索站点列表中。该表单必须满足以下几点条件：")]),t._v(" "),v("ul",[v("li",[t._v("必须以 GET 方式提交；")]),t._v(" "),v("li",[t._v("提交目标是 HTTP 地址；")]),t._v(" "),v("li",[t._v("没有 JavaScript 脚本处理表单的 "),v("code",[t._v("onsubmit")]),t._v("；")]),t._v(" "),v("li",[t._v('只能有一个 type="text" 的 '),v("code",[t._v("input")]),t._v(" 元素；")]),t._v(" "),v("li",[t._v("不包含 password、file、textarea 等元素；")]),t._v(" "),v("li",[t._v("其他 "),v("code",[t._v("input")]),t._v(" 元素必须保持默认状态。")])]),t._v(" "),v("p",[t._v("最后需要注意一点，无论是哪种方式，"),v("strong",[t._v("在地址栏中选择的网址不能带有路径")]),t._v("，这时候才能完成 “Tab to search” 的任务。")]),t._v(" "),v("p",[t._v("更多信息，请查阅参考文档。")]),t._v(" "),v("h2",{attrs:{id:"references"}},[t._v("References")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://dev.chromium.org/tab-to-search",target:"_blank"}},[t._v("chromium.org - Tab to Search")])]),t._v(" "),v("li",[v("a",{attrs:{href:"http://www.wikiwand.com/en/OpenSearch",target:"_blank"}},[t._v("wikiwand.com - OpenSearch")])]),t._v(" "),v("li",[v("a",{attrs:{href:"http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document",target:"_blank"}},[t._v("opensearch.org - OpenSearch Description")])]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.zhihu.com/question/28018277",target:"_blank"}},[t._v("知乎问答 - Chrome 是如何判断一个网站是搜索引擎的?")])])])])},[],!1,null,null,null);e.default=component.exports}}]);