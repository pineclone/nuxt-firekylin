(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{249:function(v,_,l){"use strict";l.r(_);var e={computed:{data:function(){return{title:"笔记：velocity 2016 第二天",description:"笔记：velocity 2016 第二天",keywords:"原创,笔记",pathname:"velocity-2016-day-2",translation:null,create_time:"2016-12-02",prev:{title:"前端界面 Modal 的控制",pathname:"accessible-modal"},next:{title:"笔记：velocity 2016 第一天",pathname:"velocity-2016-note-1"}}}}},t=l(2),component=Object(t.a)(e,function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("post",{attrs:{data:v.data}},[l("p",[v._v("有幸得到 Velocity 2016 大会门票，屁颠屁颠跑去听分享。")]),v._v(" "),l("p",[v._v("下面是第二天的笔记。记得比较简略，凑合看吧。")]),v._v(" "),l("p",[l("a",{attrs:{href:"http://velocity.oreilly.com.cn/2016/index.php?func=slidesvideos",target:"_blank"}},[v._v("PPT 下载通道")]),v._v("已经放出来了，感兴趣的可以自己跟踪一下。")]),v._v(" "),l("h1",{attrs:{id:"-"}},[v._v("阿里应用运维体系演变")]),v._v(" "),l("blockquote",[l("p",[v._v("分享者：阿里，毕玄")])]),v._v(" "),l("h2",{attrs:{id:"-"}},[v._v("工作范围")]),v._v(" "),l("ul",[l("li",[v._v("日常运维操作"),l("ul",[l("li",[v._v("变更")]),v._v(" "),l("li",[v._v("环境维护（OS 升级）")])])]),v._v(" "),l("li",[v._v("容量管理"),l("ul",[l("li",[v._v("如何分布机器")])])]),v._v(" "),l("li",[v._v("稳定性"),l("ul",[l("li",[v._v("监控、报警")]),v._v(" "),l("li",[v._v("故障处理")])])])]),v._v(" "),l("h2",{attrs:{id:"-"}},[v._v("脚本化")]),v._v(" "),l("ul",[l("li",[v._v("单机脚本")]),v._v(" "),l("li",[v._v("批量操作脚本")]),v._v(" "),l("li",[v._v("主要问题"),l("ul",[l("li",[v._v("复杂变更逻辑不好实现")])])]),v._v(" "),l("li",[v._v("发布到哪里了？运维自己都不知道")])]),v._v(" "),l("h2",{attrs:{id:"-"}},[v._v("工具化")]),v._v(" "),l("ul",[l("li",[v._v("编写软件系统"),l("ul",[l("li",[v._v("工具、运维团队")]),v._v(" "),l("li",[v._v("合并各工具团队")]),v._v(" "),l("li",[v._v("工具团队同时兼 OPS 工作")])])]),v._v(" "),l("li",[v._v("感受"),l("ul",[l("li",[v._v("实现了大量工具系统，然而并没有更幸福")]),v._v(" "),l("li",[v._v("成就感不足，很难得到认可")])])]),v._v(" "),l("li",[v._v("可能原因：工具质量不够高")]),v._v(" "),l("li",[v._v("主要问题："),l("ul",[l("li",[v._v("推进落地难度"),l("ul",[l("li",[v._v("思想转变，时间保障")])])]),v._v(" "),l("li",[v._v("软件质量"),l("ul",[l("li",[v._v("成功率")]),v._v(" "),l("li",[v._v("稳定性")]),v._v(" "),l("li",[v._v("性能")])])]),v._v(" "),l("li",[v._v("标准化")])])])]),v._v(" "),l("h2",{attrs:{id:"devops"}},[v._v("DevOps")]),v._v(" "),l("ul",[l("li",[v._v("借助 DevOps 推进工具化有效实现"),l("ul",[l("li",[v._v("《SRE：Google 运维解密》")])])]),v._v(" "),l("li",[v._v("运维团队交还给研发团队，日常运维逐步交给研发自行完成"),l("ul",[l("li",[v._v("挑战：工具化程度")])])]),v._v(" "),l("li",[v._v("借助 Docker，将 DevOps 思想落地"),l("ul",[l("li",[v._v("Dockerfile")])])])]),v._v(" "),l("h2",{attrs:{id:"-"}},[v._v("自动化")]),v._v(" "),l("ul",[l("li",[v._v("参与多个环节 => 无人值守（需要架构级的支撑，eg 机房流量一键切换）")]),v._v(" "),l("li",[v._v("主要问题"),l("ul",[l("li",[v._v("成功率：需要非常高，失败就需要人介入")]),v._v(" "),l("li",[v._v("架构支撑能力")])])])]),v._v(" "),l("h2",{attrs:{id:"-"}},[v._v("智能化")]),v._v(" "),l("ul",[l("li",[v._v("根据系统行为反馈，自动进行处理"),l("ul",[l("li",[v._v("大量的数据收集")]),v._v(" "),l("li",[v._v("大量经验收集")]),v._v(" "),l("li",[v._v("eg. 单机房故障自动切换")])])]),v._v(" "),l("li",[v._v("主要问题"),l("ul",[l("li",[v._v("数据准确性")]),v._v(" "),l("li",[v._v("经验格式化收集")]),v._v(" "),l("li",[v._v("机器学习介入，特征提取")])])])]),v._v(" "),l("h2",{attrs:{id:"summary"}},[v._v("Summary")]),v._v(" "),l("ul",[l("li",[v._v("DevOps 是大方向，需要机制保障")]),v._v(" "),l("li",[v._v("自动化里程碑...")]),v._v(" "),l("li",[v._v("….")])]),v._v(" "),l("h1",{attrs:{id:"-"}},[v._v("衡量服务的可运维性")]),v._v(" "),l("blockquote",[l("p",[v._v("分享者：来自 LinkedIn 的 李虓(xiao1)")])]),v._v(" "),l("h2",{attrs:{id:"-vs-"}},[v._v("服务可靠性 vs 可运维性")]),v._v(" "),l("ul",[l("li",[v._v("可靠性"),l("ul",[l("li",[v._v("高可用性")]),v._v(" "),l("li",[v._v("平均故障修复时间")])])]),v._v(" "),l("li",[v._v("可运维性"),l("ul",[l("li",[v._v("定义：保持服务运行在指定 SLA 所需要的运维人力时间成本")]),v._v(" "),l("li",[v._v("平均无故障工作时间（Mean Time Between Failures）")]),v._v(" "),l("li",[v._v("影响因素"),l("ul",[l("li",[v._v("变更")]),v._v(" "),l("li",[v._v("系统级软件")]),v._v(" "),l("li",[v._v("硬件、基础软件")]),v._v(" "),l("li",[v._v("依赖关系")]),v._v(" "),l("li",[v._v("扩容")])])])])]),v._v(" "),l("li",[v._v("可靠性 vs 可运维性"),l("ul",[l("li",[v._v("每年半天 or 每小时 5s")]),v._v(" "),l("li",[v._v("相关但不是因果关系")]),v._v(" "),l("li",[v._v("“维护税”")]),v._v(" "),l("li",[v._v("运维团队可持续发展")]),v._v(" "),l("li",[v._v("运维功能不可避免")])])])]),v._v(" "),l("h2",{attrs:{id:"service-score-card-"}},[v._v("Service Score Card(服务记分卡)")]),v._v(" "),l("ul",[l("li",[v._v("发布相关"),l("ul",[l("li",[v._v("发布频率")]),v._v(" "),l("li",[v._v("发布速度 —— 代码提交到进入生产环境的时间")]),v._v(" "),l("li",[v._v("发布成功率 —— 成功/回滚")]),v._v(" "),l("li",[v._v("回滚速度")])])]),v._v(" "),l("li",[v._v("生产环境相关"),l("ul",[l("li",[v._v("是否 rack diversified")]),v._v(" "),l("li",[v._v("是否支持 ipv6")]),v._v(" "),l("li",[v._v("可否热重启")])])]),v._v(" "),l("li",[v._v("架构相关"),l("ul",[l("li",[v._v("是否部署在多个数据中心")]),v._v(" "),l("li",[v._v("是否在多数据中心同时运行")]),v._v(" "),l("li",[v._v("是否支持热重启")]),v._v(" "),l("li",[v._v("...")])])]),v._v(" "),l("li",[v._v("对每项指标加权打分")]),v._v(" "),l("li",[v._v("打分汇总，A-F")]),v._v(" "),l("li",[v._v("根据开发、运维团队负责汇总")])]),v._v(" "),l("h2",{attrs:{id:"-"}},[v._v("方法")]),v._v(" "),l("ul",[l("li",[v._v("文化"),l("ul",[l("li",[v._v("得到开发团队支持")]),v._v(" "),l("li",[v._v("健康竞争机制，排行榜")]),v._v(" "),l("li",[v._v("鼓励运维团队提供解决方案")])])]),v._v(" "),l("li",[v._v("技术"),l("ul",[l("li",[v._v("数据收集"),l("ul",[l("li",[v._v("发布系统")]),v._v(" "),l("li",[v._v("监控系统")]),v._v(" "),l("li",[v._v("...")])])]),v._v(" "),l("li",[v._v("文档和自动化工具")])])])]),v._v(" "),l("h2",{attrs:{id:"summary"}},[v._v("Summary")]),v._v(" "),l("ul",[l("li",[v._v("关注可运维指标")]),v._v(" "),l("li",[v._v("关键指标的选择")]),v._v(" "),l("li",[v._v("数据驱动提高")]),v._v(" "),l("li",[v._v("提高可维护性，降低运维成本，有助于提供系统可用性。")])]),v._v(" "),l("h1",{attrs:{id:"data-integrity-in-stateful-services"}},[v._v("Data Integrity in Stateful Services")]),v._v(" "),l("blockquote",[l("p",[v._v("分享者： Laine Campbell")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Physical Integrity")])]),v._v(" "),l("li",[l("p",[v._v("Logical Integrity")])]),v._v(" "),l("li",[l("p",[v._v("Goals")]),v._v(" "),l("ul",[l("li",[v._v("Elimination"),l("ul",[l("li",[v._v("Eliminate Potential for Corruption and Data LOSS")])])]),v._v(" "),l("li",[v._v("Empowerment"),l("ul",[l("li",[v._v("Recover rapidly from mistakes")]),v._v(" "),l("li",[v._v("don't trust destructive requests")])])]),v._v(" "),l("li",[v._v("Detection"),l("ul",[l("li",[v._v("early detection of corruption")]),v._v(" "),l("li",[v._v("unit and regresion testing")]),v._v(" "),l("li",[v._v("data validation pipelines")]),v._v(" "),l("li",[v._v("tools for investigation")])])]),v._v(" "),l("li",[v._v("Flexibility"),l("ul",[l("li",[v._v("Tiered Storage")]),v._v(" "),l("li",[v._v("Replication and Data Portability")])])])])]),v._v(" "),l("li",[l("p",[v._v("What could go wrong")]),v._v(" "),l("ul",[l("li",[v._v("Planned Recovery"),l("ul",[l("li",[v._v("production deployments")]),v._v(" "),l("li",[v._v("environment duplication")]),v._v(" "),l("li",[v._v("Downstream services"),l("ul",[l("li",[v._v("analytics")]),v._v(" "),l("li",[v._v("compliance")])])]),v._v(" "),l("li",[v._v("...")])])]),v._v(" "),l("li",[v._v("Unplanned Recovery"),l("ul",[l("li",[v._v("Category")]),v._v(" "),l("li",[v._v("...")])])]),v._v(" "),l("li",[v._v("Operation ERRORS"),l("ul",[l("li",[v._v("Data DELETION")]),v._v(" "),l("li",[v._v("Data Corruption")]),v._v(" "),l("li",[v._v("Relaxed Constraint")]),v._v(" "),l("li",[v._v("Storage removal")])])]),v._v(" "),l("li",[v._v("Application ERRORS"),l("ul",[l("li",[v._v("removing...")]),v._v(" "),l("li",[v._v("character set multilation")]),v._v(" "),l("li",[v._v("...")])])])]),v._v(" "),l("p",[v._v("…….此处省略很多很多")])])]),v._v(" "),l("h1",{attrs:{id:"polymer-at-youtube"}},[v._v("Polymer at Youtube")]),v._v(" "),l("blockquote",[l("p",[v._v("分享者：来自 Youtube 的 Mikhail Sychev, TL  of next generation Youtube.com")])]),v._v(" "),l("h2",{attrs:{id:"intro"}},[v._v("Intro")]),v._v(" "),l("ul",[l("li",[v._v("1 billion users")])]),v._v(" "),l("h2",{attrs:{id:"techs-before"}},[v._v("Techs before")]),v._v(" "),l("ul",[l("li",[v._v("Spitfire templates")]),v._v(" "),l("li",[v._v("Google Closure for JS")]),v._v(" "),l("li",[v._v("SPF for page transitions")]),v._v(" "),l("li",[v._v("Custom layout framework")])]),v._v(" "),l("h2",{attrs:{id:"forward"}},[v._v("Forward")]),v._v(" "),l("ul",[l("li",[v._v("Performance")]),v._v(" "),l("li",[v._v("Focus on Future")]),v._v(" "),l("li",[v._v("Productivity")]),v._v(" "),l("li",[v._v("Shared plateform")]),v._v(" "),l("li",[v._v("Shared visual design")])]),v._v(" "),l("h2",{attrs:{id:"new-stack"}},[v._v("New Stack")]),v._v(" "),l("ul",[l("li",[v._v("Polymer for templating")]),v._v(" "),l("li",[v._v("… core styling")]),v._v(" "),l("li",[v._v("Closure for JS compilation")]),v._v(" "),l("li",[v._v("A bit of Spitfire for bootstrap")])]),v._v(" "),l("h2",{attrs:{id:"web-components"}},[v._v("Web  Components")]),v._v(" "),l("ul",[l("li",[v._v("demo: "),l("code",[v._v("<search-icon>")]),v._v("etc..")]),v._v(" "),l("li",[v._v("Custom Elements、templates、Shadow DOM ...")])]),v._v(" "),l("h2",{attrs:{id:"beyond-spec"}},[v._v("Beyond  Spec")]),v._v(" "),l("ul",[l("li",[l("code",[v._v("polymer-project.org")])]),v._v(" "),l("li",[v._v("A "),l("em",[v._v("opinionated")]),v._v(" "),l("strong",[v._v("library")])]),v._v(" "),l("li",[v._v("Sugars for Web Components")]),v._v(" "),l("li",[v._v("Encapsulated Reusable elems")]),v._v(" "),l("li",[v._v("500+ Google projects")])]),v._v(" "),l("h2",{attrs:{id:"provided-by-framework"}},[v._v("Provided by Framework")]),v._v(" "),l("ul",[l("li",[v._v("Template data bindings")]),v._v(" "),l("li",[v._v("Attribute handling")]),v._v(" "),l("li",[v._v("Polyfills")]),v._v(" "),l("li",[v._v("Flexbox based styling primitives")]),v._v(" "),l("li",[v._v("Components library")])]),v._v(" "),l("h2",{attrs:{id:"component-organization"}},[v._v("Component organization")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("HTML： "),l("code",[v._v("dom-module > template")])]),v._v(" "),l("ul",[l("li",[v._v("内部的 template： "),l("code",[v._v("dom-if")]),v._v(" "),l("code",[v._v("dom-repeat")])]),v._v(" "),l("li",[v._v("id => local to components")])])]),v._v(" "),l("li",[l("p",[v._v("JS")]),v._v(" "),l("pre",[l("code",{staticClass:"hljs lang-js"},[v._v("{\n    "),l("span",{staticClass:"hljs-attr"},[v._v("is")]),v._v(": ID\n  properties: {\n    [key]: {type, sobserver, } | "),l("span",{staticClass:"hljs-string"},[v._v("'any direct value'")]),v._v("\n  },\n  someMethod\n}")])])]),v._v(" "),l("li",[l("p",[v._v("CSS")]),v._v(" "),l("ul",[l("li",[v._v("shadow DOM, shady(?) DOM")]),v._v(" "),l("li",[v._v("scoped styles")]),v._v(" "),l("li",[v._v("polymer will do the polyfill")]),v._v(" "),l("li",[v._v("Flexbox")])])]),v._v(" "),l("li",[l("p",[v._v("Unit tests + data")]),v._v(" "),l("ul",[l("li",[v._v("low level")])])]),v._v(" "),l("li",[l("p",[v._v("Fn test + data")]),v._v(" "),l("ul",[l("li",[v._v("changes: predictable ")])])])]),v._v(" "),l("h2",{attrs:{id:"engineering-productivity"}},[v._v("Engineering Productivity")]),v._v(" "),l("ul",[l("li",[v._v("faster interaction cycle"),l("ul",[l("li",[v._v("better code organization")]),v._v(" "),l("li",[v._v("per comp testing")]),v._v(" "),l("li",[v._v("instant reload dev env")]),v._v(" "),l("li",[v._v("pre-made comps"),l("ul",[l("li",[v._v("about Material Design")])])])])])]),v._v(" "),l("h2",{attrs:{id:"perforamance"}},[v._v("Perforamance")]),v._v(" "),l("ul",[l("li",[v._v("Rule of one second")])]),v._v(" "),l("ul",[l("li",[v._v("Rendering control"),l("ul",[l("li",[v._v("comp reuse & in place update"),l("ul",[l("li",[v._v("no new DOM created, no DOM removed")]),v._v(" "),l("li",[v._v("update orders and values")])])]),v._v(" "),l("li",[v._v("FPS locking"),l("ul",[l("li",[v._v("every time new item injected, look up the time")])])]),v._v(" "),l("li",[v._v("Application Serving"),l("ul",[l("li",[v._v("chunking")])])])])]),v._v(" "),l("li",[v._v("Challenges"),l("ul",[l("li",[v._v("Browser support & detection")]),v._v(" "),l("li",[v._v("Bots, Extensions, search engines")]),v._v(" "),l("li",[v._v("Modularization")]),v._v(" "),l("li",[v._v("Bleeding edge")])])]),v._v(" "),l("li",[v._v("Mobile Challenges"),l("ul",[l("li",[v._v("Browser support")]),v._v(" "),l("li",[v._v("Performance")])])])]),v._v(" "),l("h1",{attrs:{id:"react-"}},[v._v("React 可视化开发框架")]),v._v(" "),l("blockquote",[l("p",[v._v("分享者：Accenture 的 Jeff Catania")]),v._v(" "),l("p",[v._v("声音有点小，对这方面兴趣有限，所以笔记做得不多。")])]),v._v(" "),l("h2",{attrs:{id:"rcdf-aardvark-"}},[v._v("RCDF(Aardvark)")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Tools")]),v._v(" "),l("ul",[l("li",[v._v("Manual Tools")]),v._v(" "),l("li",[v._v("Aided")]),v._v(" "),l("li",[v._v("Programmatic")])])]),v._v(" "),l("li",[l("p",[v._v("D3 + React => Aardvark standards")]),v._v(" "),l("p",[v._v("​")])])]),v._v(" "),l("h1",{attrs:{id:"qq-web-"}},[v._v("QQ 空间 Web 架构")]),v._v(" "),l("blockquote",[l("p",[v._v("分享者：QQ 刁维康")]),v._v(" "),l("p",[v._v("相对来说还是很传统的 hybrid 模式。说句实话，我总觉得这次分享的内容，我似乎在哪里看到过。应该是印象中的 QQ 的同学写的那些文章吧，有关于 QQ 空间 Hybrid 优化的，有手Q React 实践的，但我一时半会儿也找不到原文了。")]),v._v(" "),l("p",[v._v("总之就是充分利用缓存，充分利用 WebView 初始化的那段时间，然后就 socket 和 HTTP/CDN 之间如何选择的问题。嗯，还是非常棒的。")]),v._v(" "),l("p",[v._v("所以我一直在听，顺便做点其他的工作，木有做笔记。")])]),v._v(" "),l("p",[v._v("（略...）")])])},[],!1,null,null,null);_.default=component.exports}}]);