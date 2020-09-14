(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{185:function(t,v,_){"use strict";_.r(v);var e={computed:{data:function(){return{title:"聊聊 JavaScript Date 对象",description:"闲谈 JavaScript 日期",keywords:"原创,JavaScript",pathname:"date-in-javascript",translation:null,create_time:"2016-08-31",prev:{title:"[译] HTTP 推送",pathname:"being-pushy"},next:{title:"[译] 渐进增强的键盘导航",pathname:"better-keyboard-navigation-with-progressive-enhancement"}}}}},n=_(2),component=Object(n.a)(e,function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("post",{attrs:{data:t.data}},[_("h2",{attrs:{id:"-"}},[t._v("时间的发现")]),t._v(" "),_("p",[t._v("日常生活中，各种形式的时间字符到处都是。")]),t._v(" "),_("p",[t._v("时间观念的产生，时间单位、计时工具的发明，给人类带来的变化实在一言难尽。")]),t._v(" "),_("p",[t._v("今天就来谈谈日期那些事儿。一起来看看 JavaScript 中的日期对象 Date。")]),t._v(" "),_("h2",{attrs:{id:"date-"}},[t._v("Date 对象")]),t._v(" "),_("p",[t._v("和其他对象如 Math、RegExp 等一样，Date 对象是 JavaScript 语言中的内建（build-in）对象。在工作中，Date 对象有着许多重要的应用。")]),t._v(" "),_("p",[t._v("创建一个 Date 实例很简单，下面简单回顾下常用的方法。")]),t._v(" "),_("p",[_("strong",[t._v("获取当前时间")])]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" now = "),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("();")])]),_("p",[t._v("注意，JavaScript 中的当前时间与操作系统相关。因此，在重要的 Web 应用中，应该会避免使用该时间，更可靠的方式是操作前先请求服务器获取时间，或者将工作直接交给服务端。")]),t._v(" "),_("p",[_("strong",[t._v("生成时间")])]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-comment"},[t._v("// 2016-08-31 23:27:22")]),t._v("\n"),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("("),_("span",{staticClass:"hljs-number"},[t._v("2016")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("7")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("31")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("23")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("27")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("22")]),t._v(");\n"),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("("),_("span",{staticClass:"hljs-string"},[t._v("'2016-08-31 23:27:22'")]),t._v(");\n"),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("("),_("span",{staticClass:"hljs-string"},[t._v("'2016/08/31 23:27:22'")]),t._v(");")])]),_("p",[t._v("上面只是最常见的几种形式。实际应用中会发现，Date 对象非常强大，能够解析多种格式的字符串。本文暂且略过不表。")]),t._v(" "),_("p",[t._v("值得一提的是，上面 "),_("code",[t._v("new Date('2016-08-31')")]),t._v(" 这种形式应当尽量避免。如果没有记错，iOS 系统环境中，这种格式会报错，遇到该格式的字符串时，应该一律先进行替换操作：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" string = "),_("span",{staticClass:"hljs-string"},[t._v("'2016-08-31'")]),t._v(";\n"),_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" date = "),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("(string.replace("),_("span",{staticClass:"hljs-regexp"},[t._v("/-/g")]),t._v(", "),_("span",{staticClass:"hljs-string"},[t._v("'/'")]),t._v("));")])]),_("p",[_("strong",[t._v("获取或修改更多时间细节")])]),t._v(" "),_("p",[t._v("Date 对象提供了一系列 "),_("code",[t._v("set")]),t._v(" "),_("code",[t._v("get")]),t._v(" 方法供我们使用。方法名也很语义化。在此略过。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("眼花缭乱的时间字符串")]),t._v(" "),_("p",[t._v("在工作中，常常会接触各种不同格式的时间字符串。除了那些格式整齐，地球人几乎都能读懂的之外，还有一些不那么为普通人所了解的格式。")]),t._v(" "),_("p",[t._v("与此同时，细心的同学可能注意到，在控制台中输入一个 Date 变量的引用，按下 "),_("code",[t._v(".")]),t._v(" 的那一刻，会有一大堆属性、方法提示。除去 "),_("code",[t._v("set")]),t._v(" "),_("code",[t._v("get")]),t._v(" 这一类方法之外，还有一堆 "),_("code",[t._v("to***String")]),t._v(" 形式的方法。相信多数同学用得不多。")]),t._v(" "),_("p",[t._v("往前数月，我也不太关注这些东西。但后来某次，后端返回的数据总是随机地有一些数据是 "),_("code",[t._v("2016-08-31T15:44:30.244Z")]),t._v(" 这种格式的。当时不明白其含义，只能自作聪明地拿正则表达式来匹配，作为容错方案。")]),t._v(" "),_("p",[t._v("接下来，自己的一个小爬虫工具想要支持 rss 解析。拿到的不少日期数据是 "),_("code",[t._v("Thu Aug 25 2016 01:31:50 GMT+0800 (CST)")]),t._v(" 这种格式的。")]),t._v(" "),_("p",[t._v("由此我开始试着去了解这些看上去奇奇怪怪的日期格式。")]),t._v(" "),_("p",[t._v("接下来，主要通过 JavaScript 中的 "),_("code",[t._v("to***String")]),t._v(" 系列方法，了解这些时间字符串。")]),t._v(" "),_("h2",{attrs:{id:"-to-string-"}},[t._v("一堆 "),_("code",[t._v("to***String")]),t._v(" 方法")]),t._v(" "),_("p",[t._v("首先，让我们写个简单的脚本，看看 Date 对象到底有哪些 "),_("code",[t._v("to***String")]),t._v(" 方法。")]),t._v(" "),_("p",[t._v("注意，这些方法是无法通过 "),_("code",[t._v("for in")]),t._v(" 循环取到的，也就是说，默认是 "),_("code",[t._v("enumerable: false")]),t._v("。")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("Object.getOwnPropertyDescriptor")]),t._v(" 方法可以查看这些细节。")]),t._v(" "),_("p",[t._v("以 "),_("code",[t._v("toString")]),t._v(" 为例，一起看下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-built_in"},[t._v("Object")]),t._v(".getOwnPropertyDescriptor("),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v(".prototype, "),_("span",{staticClass:"hljs-string"},[t._v("'toString'")]),t._v(");")])]),_("p",[t._v("结果如下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[t._v("{\n    "),_("span",{staticClass:"hljs-attr"},[t._v("writable")]),t._v(": "),_("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    "),_("span",{staticClass:"hljs-attr"},[t._v("enumerable")]),t._v(": "),_("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(",\n    "),_("span",{staticClass:"hljs-attr"},[t._v("configurable")]),t._v(": "),_("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    "),_("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),_("span",{staticClass:"hljs-function"},[_("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),_("span",{staticClass:"hljs-title"},[t._v("toString")]),t._v("("),_("span",{staticClass:"hljs-params"}),t._v("),\n    "),_("span",{staticClass:"hljs-title"},[t._v("__proto__")]),t._v(": "),_("span",{staticClass:"hljs-title"},[t._v("Object")]),t._v("\n}")])])]),_("p",[t._v("既然不能通过 "),_("code",[t._v("for in")]),t._v(" 遍历，那还有没有其他办法呢？")]),t._v(" "),_("p",[t._v("有的。"),_("code",[t._v("Object.getOwnPropertyNames")]),t._v(" 这个方法可以帮我们拿到对象自身属性的 key 值。")]),t._v(" "),_("p",[t._v("（写到这里，虽然看上去很啰嗦，但我总觉得有必要把细节记下来。万一下次又记不清了呢。）")]),t._v(" "),_("p",[t._v("接着，就可以愉快地取到所有的 "),_("code",[t._v("to***String")]),t._v(" 方法名了。")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" proto = "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v(".prototype;\n"),_("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" names = "),_("span",{staticClass:"hljs-built_in"},[t._v("Object")]),t._v(".getOwnPropertyNames(proto).filter("),_("span",{staticClass:"hljs-function"},[t._v("("),_("span",{staticClass:"hljs-params"},[t._v("name")]),t._v(") =>")]),t._v(" /^to[a-zA-Z]*"),_("span",{staticClass:"hljs-built_in"},[t._v("String")]),t._v("/.test(name));\n"),_("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(names);")])]),_("p",[t._v("一共有 9 个，如下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-json"},[t._v("[ "),_("span",{staticClass:"hljs-string"},[t._v('"toString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toDateString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toTimeString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toISOString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toUTCString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toGMTString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toLocaleString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toLocaleDateString"')]),t._v(",\n  "),_("span",{staticClass:"hljs-string"},[t._v('"toLocaleTimeString"')]),t._v("\n]")])]),_("p",[t._v("看名称大概也能知道，这 9 个方法可以分为三组。下面按组来细看。")]),t._v(" "),_("h2",{attrs:{id:"tostring-"}},[t._v("toString 系列")]),t._v(" "),_("p",[t._v("接下来，我们所有的实验，统一使用一个 Date 实例。需要说明的，我所使用的是 Chrome 52，所有实验都是在控制台中进行的。")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-comment"},[t._v("// 2016-09-02 10:49:22")]),t._v("\n"),_("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" date = "),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("Date")]),t._v("("),_("span",{staticClass:"hljs-number"},[t._v("2016")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("8")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("10")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("49")]),t._v(", "),_("span",{staticClass:"hljs-number"},[t._v("22")]),t._v(");")])]),_("p",[t._v("一并展示出所有结果吧，就是这么简单粗暴。")]),t._v(" "),_("p",[_("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01788a97c49c40d8e7.png",expression:"`https://p.ssl.qhimg.com/t01788a97c49c40d8e7.png`"}],attrs:{alt:"toString"}})]),t._v(" "),_("p",[t._v("注意到，"),_("code",[t._v("date + ''")]),t._v(" 和 "),_("code",[t._v("date.toString()")]),t._v(" 的结果是一样的。这不是偶然，它们实际上是等价的。这涉及到 JavaScript 中的"),_("strong",[t._v("隐式类型转换")]),t._v("。")]),t._v(" "),_("p",[t._v("根据 ECMA-262 标准，"),_("code",[t._v("toString()")]),t._v(" "),_("code",[t._v("toDateString()")]),t._v(" "),_("code",[t._v("toTimeString()")]),t._v(" 执行的结果，是实现相关的（implementation-dependent）。")]),t._v(" "),_("p",[t._v("以 "),_("code",[t._v("toDateString()")]),t._v(" 为例，看看标准中的是如何说的：")]),t._v(" "),_("blockquote",[_("p",[t._v("该方法返回一个 String 类型的值。该值是实现相关的，但其目的是以一种简便、便于阅读的形式，展示 Date 实例在当前时区内的“日期”部分。\n—— "),_("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html#sec-todatestring",target:"_blank"}},[t._v("ECMA-262 7ᵗʰ Edition ")])])]),t._v(" "),_("p",[t._v("再来看看结果中的 "),_("code",[t._v("GMT+0800")]),t._v(" 是什么鬼。所谓 "),_("code",[t._v("GMT")]),t._v("，是英文 “Greenwich Mean Time” 的缩写，完整翻译过来就是“格林尼治平时”，也就是通常所说的“格林尼治时间”，即位于英国伦敦郊区的皇家格林尼治天文台的标准时间。详细信息可以查看"),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Greenwich_Mean_Time",target:"_blank"}},[t._v("维基百科")]),t._v("。")]),t._v(" "),_("p",[t._v("至于“+0800”，则是"),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA",target:"_blank"}},[_("strong",[t._v("时区")])]),t._v("的概念了。这意味着，当前时间与标准时区相差 8 小时。")]),t._v(" "),_("p",[t._v("比如，此刻是北京时间 2016 年 9 月 2 日 13:07:22，也就是 "),_("code",[t._v("Fri Sep 02 2016 13:07:22 GMT+0800")]),t._v("，那么此时，格林尼治时区的时间就应该是 05:07:22。不过，从"),_("a",{attrs:{href:"http://www.timeanddate.com/time/zones/bst",target:"_blank"}},[t._v("世界时钟")]),t._v("中此时英国伦敦的时间是 06:07:22。为何会有此差别？因为 9 月 2 号的时候，伦敦使用的是 BST 时区，即 British Summer Time，也就是众所周知的“夏令时”。")]),t._v(" "),_("p",[_("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01a2428498bf539feb.png",expression:"`https://p.ssl.qhimg.com/t01a2428498bf539feb.png`"}],attrs:{alt:"时区图"}})]),t._v(" "),_("p",[t._v("像 BST、CST 这些标志，就像上面表格中的“中国标准时间”一样。这些是用来说明时区的，通常用缩写表示，不过这"),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA",target:"_blank"}},[t._v("并不是标准")]),t._v("。CST 正好就是中国标准时间（China Standar Time）的缩写，可以参考 "),_("a",{attrs:{href:"http://www.timeanddate.com/time/zones/cst-china",target:"_blank"}},[t._v("timeanddate")]),t._v(" 这个网站。")]),t._v(" "),_("p",[t._v("不过，上面仅仅是提到格林尼治时间。并不意味着真正用到了它。JavaScript 中实际使用到的，还是 UTC 时间。")]),t._v(" "),_("h2",{attrs:{id:"tolocalestring-"}},[t._v("toLocaleString 系列")]),t._v(" "),_("p",[t._v("执行结果如下图所示：")]),t._v(" "),_("p",[_("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01b54c2a69220c814e.png",expression:"`https://p.ssl.qhimg.com/t01b54c2a69220c814e.png`"}],attrs:{alt:"toLocaleString 系列"}})]),t._v(" "),_("p",[t._v('也很好理解。这三个方法，也是和实现相关的。[标准]中有一句很关键，“与宿主环境当前区域设置的约定保持一致”（"corresponds to the conventions of the host environment\'s current locale."）。')]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("标准时间系列")]),t._v(" "),_("p",[t._v("接着看 "),_("code",[t._v("toISOString()")]),t._v(" "),_("code",[t._v("toUTCString()")]),t._v(" "),_("code",[t._v("toGMTString()")]),t._v(" 三个方法。按照惯例，先看结果：")]),t._v(" "),_("p",[_("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t017844b50bac5b0ca6.png",expression:"`https://p.ssl.qhimg.com/t017844b50bac5b0ca6.png`"}],attrs:{alt:"toISOString() 与 toUTCString()、toGMTString()"}})]),t._v(" "),_("p",[t._v("这些年，想必各种商业广告已经帮我们普及了 ISO 的概念，八九岁的时候就知道，某某品牌的摩托车号称通过 ISO-2001 标准。ISO，全称是国际标准化组织（International Organization for Standardization），负责制定全世界工商业国际标准的国际标准。")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html#sec-date-time-string-format",target:"_blank"}},[t._v("JavaScript 标准")]),t._v("定义的时间交换格式（interchange format），是基于 ISO 8601 扩展格式的简化版本，格式是 “YYYY-MM-DDTHH:mm:ss.sssZ”。"),_("code",[t._v("toISOString()")]),t._v(" 返回的就是这样的字符串。")]),t._v(" "),_("p",[_("code",[t._v("T")]),t._v(" 只是一个字面量，标志着接下来的内容是时间（相对于前面的日期而言）。")]),t._v(" "),_("p",[_("code",[t._v("Z")]),t._v(" 标志着时差。直接使用 "),_("code",[t._v("Z")]),t._v("，意味着我们使用的是标准时间（UTC）。")]),t._v(" "),_("p",[t._v("在我们的例子中，"),_("code",[t._v("date.toISOString()")]),t._v(" 的结果是 "),_("code",[t._v("2016-09-02T02:49:22.000Z")]),t._v("，可以看到，和我们的实际时间 10:49:22 相差了 8 小时。")]),t._v(" "),_("p",[t._v("当然，"),_("code",[t._v("Z")]),t._v(" 的位置上，还可以使用"),_("code",[t._v("+HH:mm")]),t._v(" "),_("code",[t._v("-HH:mm")]),t._v(" 的形式。这样就是直接指定与标准时间的时差了。")]),t._v(" "),_("p",[t._v("例如，"),_("code",[t._v("2016-09-02T02:49:22.000Z")]),t._v(" 作为标准时间，相当于北京时间的 10:49:22，换一种形式就是 "),_("code",[t._v("2016-09-02T10:49:22.000+08:00")]),t._v("。 ")]),t._v(" "),_("p",[t._v("UTC 是“世界标准时间”的简称，又作“协调世界时” “世界协调时间”，英文是 Coordinated Universal Time。下面引用下"),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8D%8F%E8%B0%83%E4%B8%96%E7%95%8C%E6%97%B6",target:"_blank"}},[t._v("维基百科")]),t._v("中的说明：")]),t._v(" "),_("blockquote",[_("p",[t._v("协调世界时是世界上调节时钟和时间的主要时间标准，它与0度经线的平太阳时相差不超过1秒，并不遵守夏令时。协调世界时是最接近格林尼治标准时间(GMT)的几个替代时间系统之一……\n UTC基于国际原子时，并通过不规则的加入闰秒来抵消地球自转变慢的影响。")])]),t._v(" "),_("p",[t._v("我们注意到，"),_("code",[t._v("toUTCString()")]),t._v(" "),_("code",[t._v("toGMTString()")]),t._v(" 两者返回的字符串是一样的。实际上，这还是和具体实现有关。")]),t._v(" "),_("p",[t._v("还是引用"),_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%A0%BC%E6%9E%97%E5%B0%BC%E6%B2%BB%E5%B9%B3%E6%97%B6",target:"_blank"}},[t._v("维基百科")]),t._v("中的一段，来看看 UTC 时间和格林尼治时间的不同。")]),t._v(" "),_("blockquote",[_("p",[t._v("理论上来说，格林尼治标准时间的正午是指当太阳横穿格林尼治子午线时（也就是在格林尼治上空最高点时）的时间。由于地球在它的椭圆轨道里的运动速度不均匀，这个时刻可能与实际的太阳时有误差，最大误差达16分钟。\n由于地球每天的自转是有些不规则的，而且正在缓慢减速，因此格林尼治时间已经不再被作为标准时间使用。现在的标准时间，是由原子钟报时的协调世界时（UTC）。")])]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html#sec-date-constructor",target:"_blank"}},[t._v("ES 2016")]),t._v(" 中提到，"),_("code",[t._v("toGMTString()")]),t._v(" 主要是用来满足旧代码兼容性的，新代码中推荐使用 "),_("code",[t._v("toUTCString()")]),t._v("。标准还提到这么一句：")]),t._v(" "),_("blockquote",[_("p",[t._v("The function object that is the initial value of  Date.prototype.toGMTString is the same function object that is the initial value of  Date.prototype.toUTCString.")])]),t._v(" "),_("p",[t._v("也就是说，在 JavaScript 中，"),_("code",[t._v("toUTCString()")]),t._v(" "),_("code",[t._v("toGMTString()")]),t._v(" 这俩是一样的。")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[t._v("assertEqual(date.toGMTString, date,toUTCString);")])]),_("h2",{attrs:{id:"-"}},[t._v("日期提取工具")]),t._v(" "),_("p",[t._v("从字符串中提取时间，已经有很多工具，还相当智能，英文不必说，中文的“前天”“五天前”“上周三”之类的不在话下。")]),t._v(" "),_("p",[t._v("临时应急，也仅仅是为了辨别一些常用的日期字符串，我也写了一个小工具，主要是提取日期。")]),t._v(" "),_("p",[t._v("关键的正则表达式如下：")]),t._v(" "),_("pre",[_("code",{staticClass:"hljs lang-javascript"},[_("span",{staticClass:"hljs-comment"},[t._v("// 2012 年 2 月 28 日")]),t._v("\nre_zh  = "),_("span",{staticClass:"hljs-regexp"},[t._v("/(\\d{4})\\s*[^x00-xff]\\s*(\\d{1,2})\\s*[^x00-xff]\\s*(\\d{1,2})\\s*[^x00-xff]/")]),t._v(",\n\n"),_("span",{staticClass:"hljs-comment"},[t._v("// 2012-02-28, 2012.02.28, 2012/02/28")]),t._v("\nre_ymd = "),_("span",{staticClass:"hljs-regexp"},[t._v("/\\d{4}([\\/\\-\\.])\\d{1,2}(\\1)\\d{1,2}/")]),t._v(",\n\n"),_("span",{staticClass:"hljs-comment"},[t._v("// 02/28/2012 etc.")]),t._v("\nre_mdy = "),_("span",{staticClass:"hljs-regexp"},[t._v("/\\d{1,2}([\\/\\-\\.])\\d{1,2}(\\1)\\d{4}/")]),t._v(",\n\nre_en  = "),_("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" "),_("span",{staticClass:"hljs-built_in"},[t._v("RegExp")]),t._v("([\n    "),_("span",{staticClass:"hljs-comment"},[t._v('// toUTCString(): "Tue, 30 Aug 2016 03:01:19 GMT"')]),t._v("\n    /(\\w{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("}), (\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}) (\\w{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("}) (\\d{"),_("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("}) ((\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}):(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}):(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("})) GMT/.source,\n\n    "),_("span",{staticClass:"hljs-comment"},[t._v('// toString():  "Tue Aug 30 2016 11:02:45 GMT+0800 (中国标准时间)"')]),t._v("\n    /(\\w{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("}) (\\w{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("}) (\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}) (\\d{"),_("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("}) ((\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}):(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}):(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("})) GMT\\+\\d{"),_("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("}/.source,\n\n    "),_("span",{staticClass:"hljs-comment"},[t._v('// toISOString(): "2016-08-30T03:01:19.543Z"')]),t._v("\n    /(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("})-(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("})-(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("})T((\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}):(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}):(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}))\\.(\\d{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("})Z/.source,\n\n    "),_("span",{staticClass:"hljs-comment"},[t._v('// toDateString(): "Tue Aug 30 2016"')]),t._v("\n    /(\\w{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("}) (\\w{"),_("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("}) (\\d{"),_("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("}) (\\d{"),_("span",{staticClass:"hljs-number"},[t._v("4")]),t._v("})/.source\n].join("),_("span",{staticClass:"hljs-string"},[t._v("'|'")]),t._v("), "),_("span",{staticClass:"hljs-string"},[t._v("'m'")]),t._v(");")])]),_("p",[t._v("详细代码，可见 "),_("a",{attrs:{href:"https://github.com/AngusFu/date-parser",target:"_blank"}},[t._v("Github")]),t._v("。之后有时间，也会考虑加入更智能的识别功能。")]),t._v(" "),_("h2",{attrs:{id:"-"}},[t._v("参考")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.timeanddate.com/",target:"_blank"}},[t._v("http://www.timeanddate.com/")])]),t._v(" "),_("li",[_("a",{attrs:{href:"https://zh.wikipedia.org",target:"_blank"}},[t._v("wikipedia")])]),t._v(" "),_("li",[_("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html",target:"_blank"}},[t._v("ECMAScript® 2016 Language Specification")])]),t._v(" "),_("li",[_("a",{attrs:{href:"http://wwp.greenwichmeantime.com/",target:"_blank"}},[t._v("http://wwp.greenwichmeantime.com/")])])])])},[],!1,null,null,null);v.default=component.exports}}]);