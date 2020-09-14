(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{182:function(t,e,n){"use strict";n.r(e);var l={computed:{data:function(){return{title:"[译] 客户端存储",description:"客户端存储",keywords:"翻译,JavaScript,缓存,Client-Side Storage",pathname:"client-side-storage",translation:{author:"Michael Mahemoff",social:"http://twitter.com/mahemoff",from:"http://www.html5rocks.com/en/tutorials/offline/storage/"},create_time:"2016-06-25",prev:{title:"关于JavaScript 函数传参",pathname:"javascript-argument"},next:{title:"[译] Node.js 中的队列",pathname:"queues-in-node.js"}}}}},r=n(2),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("post",{attrs:{data:t.data}},[n("h2",{attrs:{id:"-"}},[t._v("介绍")]),t._v(" "),n("p",[t._v("本文是关于客户端存储（client-side storage）的。这是一个通用术语，包含几个独立但相关的 API： Web Storage、Web SQL Database、Indexed Database 和 File Access。每种技术都提供了在用户硬盘上 —— 而非通常存储数据的服务器 —— 存储数据的独特方式。这么做主要基于以下两点理由：（a）使 web app 离线可用； （b）改善性能。对于客户端存储使用情况的详细阐述，请看 HTML5Rocks 上的文章 《"),n("a",{attrs:{href:"http://www.html5rocks.com/tutorials/offline/whats-offline/",target:"_blank"}},[t._v('"离线": 这是什么意思？我为何要关心?')]),t._v("》。")]),t._v(" "),n("p",[t._v("这些 API 有着类似的作用范围和规则。因此，在去看细节之前，我们先了解他们的共同之处吧。")]),t._v(" "),n("h2",{attrs:{id:"-"}},[t._v("共同特点")]),t._v(" "),n("h3",{attrs:{id:"-"}},[t._v("基于客户端的存储")]),t._v(" "),n("p",[t._v("实际上，“客户端时间存储”的意思是，数据传给了浏览器的存储 API，它将数据存在本地设备中的一块区域，该区域同样也是它存储其他用户特定信息如个人偏好、缓存的地方。除了存储数据，这些 API 可以用来检索数据，且在某些情况下还能执行搜索和批处理操作。")]),t._v(" "),n("h3",{attrs:{id:"-"}},[t._v("置于沙盒中的")]),t._v(" "),n("p",[t._v("所有这四个存储 API 都将数据绑到一个单独的“源”（origin）上。例如，若 "),n("a",{attrs:{href:"http://abc.example.com",target:"_blank"}},[t._v("http://abc.example.com")]),t._v(" 保存了一些数据，那以后浏览器就只会允许 "),n("a",{attrs:{href:"http://abc.example.com",target:"_blank"}},[t._v("http://abc.example.com")]),t._v(" 获取这些数据。当我们谈论“源”（origin）的时候，这意味着域（domain）必须完全相同，所以 "),n("a",{attrs:{href:"http://example.com",target:"_blank"}},[t._v("http://example.com")]),t._v(" 和 "),n("a",{attrs:{href:"http://def.example.com",target:"_blank"}},[t._v("http://def.example.com")]),t._v(" 都不行。端口（port）也必须匹配，因此 "),n("a",{attrs:{href:"http://abc.example.com:123",target:"_blank"}},[t._v("http://abc.example.com:123")]),t._v(" 也是不能访问到 "),n("a",{attrs:{href:"http://abc.example.com",target:"_blank"}},[t._v("http://abc.example.com")]),t._v(" （端口默认为80）存储的数据。同样，协议也必须一样（像http vs https 等等）。")]),t._v(" "),n("h3",{attrs:{id:"-quotas-"}},[t._v("空间限制（Quotas）")]),t._v(" "),n("p",[t._v("你能想象，如果任何网站都被允许往毫不知情的硬盘里填充以千兆字节计的数据，该有多混乱。因此，浏览器对存储容量施加了限制。若你的应用试图超出限制，浏览器通常会显示一个对话框，让用户确认增加。您可能以为浏览器对单个源（origin）可使用的所有存储都加以同一单独的限制，但多数存储机制都是单独加以限制的。若 "),n("a",{attrs:{href:"http://www.w3.org/TR/quota-api/",target:"_blank"}},[t._v("Quota API")]),t._v(' 被采纳，这种情况可能会改变。但就现在来说，把浏览器当作一个二维矩阵，其维度分别是“源”（origin）和“存储”（storage）。例如， "'),n("a",{attrs:{href:"http://abc.example.com",target:"_blank"}},[t._v("http://abc.example.com")]),t._v('" 可能会允许最多存 5MB 的 Web Storage， 25MB 的 Web SQL 数据库，但因用户拒绝访问被禁止使用 Indexed DataBase。 Quota API 将问题放到一起来看，让您查询还有多少可用空间，有多少空间正在使用。')]),t._v(" "),n("p",[t._v("有些情况下，用户也能先看到有多少存储将被使用，例如，当用户在 Chrome 应用商店中安装一个应用时，他们将被提示预先接受其权限，其中包括存储限制。（而该应用的）manifest 中的可能有个值是 “unlimited_storage” （无限制存储）。")]),t._v(" "),n("h3",{attrs:{id:"-transactions-"}},[t._v("数据库处理（Transactions）")]),t._v(" "),n("p",[t._v("两个 “数据库” 的存储格式支持数据处理。目的和通常的关系型数据库使用数据处理是一样的：保证数据库完整。数据库处理（Transactions）防止 “竞争条件”（race conditions） —— 这种情况是：当两个操作序列在同一时间被应用到数据库中， 导致操作结果都无法被预测，而数据库也处于可疑的准确性（dubious accuracy）状态。")]),t._v(" "),n("h3",{attrs:{id:"-synchronous-and-asynchronous-modes-"}},[t._v("同步和异步模式（Synchronous and Asynchronous Modes）")]),t._v(" "),n("p",[t._v("多数存储格式都支持同步和异步模式。同步模式是阻塞的，意味着下一行 js 代码执行之前，存储操作会被完整执行。异步模式会使得后面的 js 代码在数据库操作完成之前执行。存储操作会背景环境中执行，当操作完成的时候，应用会以回调函数被调用这种形式接收通知，这个函数须在调用的时候被指定。")]),t._v(" "),n("p",[t._v("应当尽量避免使用同步模式，它虽然看起来比较简单，但操作完成时它会阻塞页面渲染，在某些情况下甚至会冻结整个浏览器。你可能注意到网站乃至是应用出现这种情况，点击一个按钮，结果所有东西都用不了，当你还在想是不是崩溃了？结果一切又突然恢复正常了。")]),t._v(" "),n("p",[t._v("某些 API 没有异步模式，如 “localStorage”， 使用这些API时，应当仔细做好性能监测，并随时准备切换到一个异步API，如果它造成了问题。")]),t._v(" "),n("h2",{attrs:{id:"api-"}},[t._v("API 概述及比较")]),t._v(" "),n("h3",{attrs:{id:"web-storage"}},[t._v("Web Storage")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://dev.w3.org/html5/webstorage/",target:"_blank"}},[t._v("Web Storage")]),t._v(" 是一个叫做 "),n("code",[t._v("localStorage")]),t._v(" 的持久对象。可以使用 "),n("code",[t._v('localStorage.foo = "bar"')]),t._v(" 保存值，之后可以使用 "),n("code",[t._v("localStorage.foo")]),t._v(" 获取到 —— 甚至是浏览器关闭之后重新打开。还可以使用一个叫做 "),n("code",[t._v("sessionStorage")]),t._v(" 的对象，工作方式一样，只是当窗口关闭之后会被清除掉。")]),t._v(" "),n("p",[t._v("Web Storage 是 "),n("a",{attrs:{href:"http://en.wikipedia.org/wiki/NoSQL#Key-value_store",target:"_blank"}},[t._v("NoSQL 键值对储存（NoSQL key-value store）")]),t._v("的一种.")]),t._v(" "),n("h6",{attrs:{id:"web-storage-"}},[t._v("Web Storage 的优点")]),t._v(" "),n("ol",[n("li",[t._v("数年以来，被所有现代浏览器支持， iOS 和 Android 系统下也支持（IE 从 IE8 开始支持 ）。")]),t._v(" "),n("li",[t._v("简单的API签名。")]),t._v(" "),n("li",[t._v("同步 API，调用简单。")]),t._v(" "),n("li",[t._v("语义事件可保持其他标签和窗口同步。")])]),t._v(" "),n("h6",{attrs:{id:"web-storage-"}},[t._v("Web Storage 的弱点")]),t._v(" "),n("ol",[n("li",[t._v("使用同步 API（这是得到最广泛支持的模式）存储大量的或者复杂的数据时性能差。")]),t._v(" "),n("li",[t._v("缺少索引导致检索大量的或复杂的数据时性能差。（搜索操作需要手动遍历所有项。）")]),t._v(" "),n("li",[t._v("存储或读取大量的或复杂的数据结构时性能差，因为需要手动序序列化成字符串或将字符串反序列化。主要的浏览器实现只支持字符串（尽管规范没这么说的）。")]),t._v(" "),n("li",[t._v("需要保证数据的持续性和完整性，因为数据是有效非结构化（effectively unstructured）的。")])]),t._v(" "),n("h3",{attrs:{id:"web-sql-database"}},[t._v("Web SQL Database")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.w3.org/TR/webdatabase/",target:"_blank"}},[t._v("Web SQL Database")]),t._v(" 是一个结构化的数据库，具备典型 "),n("a",{attrs:{href:"http://en.wikipedia.org/wiki/Structured_Query_Language",target:"_blank"}},[t._v("SQL驱动的关系数据库（SQL-powered relational database）")]),t._v("的所有功能和复杂度。Indexed Database 在两者之间。"),n("a",{attrs:{href:"http://www.w3.org/TR/webdatabase/",target:"_blank"}},[t._v("Web SQL Database")]),t._v(" 有自由形式的密钥值对，有点像 Web Storage，但也有能力从这些值来索引字段，所以搜索速度要快得多。")]),t._v(" "),n("h6",{attrs:{id:"web-sql-database-"}},[t._v("Web SQL Database 的优点")]),t._v(" "),n("ol",[n("li",[t._v("被主要的移动浏览器（Android Browser, Mobile Safari, Opera Mobile）以及一些 PC 浏览器（Chrome, Safari, Opera） 支持。")]),t._v(" "),n("li",[t._v("作为异步 API， 总体而言性能很好。数据库交互不会锁定用户界面。（同步API也可用于 WebWorkers。）")]),t._v(" "),n("li",[t._v("良好的搜索性能，因为数据可以根据搜索键进行索引。")]),t._v(" "),n("li",[t._v("强大，因为它支持"),n("a",{attrs:{href:"http://en.wikipedia.org/wiki/Database_transaction",target:"_blank"}},[t._v("事务性数据库模型（transactional database model）")]),t._v("。")]),t._v(" "),n("li",[t._v("刚性的数据结构更容易保持数据的完整性。")])]),t._v(" "),n("h6",{attrs:{id:"web-sql-database-"}},[t._v("Web SQL Database 的弱点")]),t._v(" "),n("ol",[n("li",[t._v("过时，不会被 IE 或 Firefox 支持，在某些阶段可能会被从其他浏览器淘汰。")]),t._v(" "),n("li",[t._v("学习曲线陡峭，要求掌握关系数据库和SQL的知识。")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://en.wikipedia.org/wiki/Object-relational_impedance_mismatch",target:"_blank"}},[t._v("对象-关系阻抗失配（object-relational impedance mismatch）")]),t._v(".")]),t._v(" "),n("li",[t._v("降低敏捷性，因为数据库模式必须预先定义，与表中的所有记录必须匹配相同的结构。")])]),t._v(" "),n("h3",{attrs:{id:"indexed-database-indexeddb-"}},[t._v("Indexed Database (IndexedDB)")]),t._v(" "),n("p",[t._v("到目前为止，我们已经看到，Web Storage 和 Web SQL Database 都有各种的优势和弱点。 "),n("a",{attrs:{href:"http://www.w3.org/TR/IndexedDB/",target:"_blank"}},[t._v("Indexed Database")]),t._v(" 产生于这两个早期 API 的经验，可以看作是一种结合两者优点而不招致其劣势得到尝试。")]),t._v(" "),n("p",[t._v("Indexed Database 是一个 “对象存储” （object stores） 的集合，可以直接把对象放进去。这个存储有点像 SQL 表，但在这种情况下，对象的结构没有约束，所以不需要预先定义什么。所以这和 Web Storage 有点像，拥有多个数据库、每个数据库又有多个存储（store）的特点。但不像 Web Storage那样， 还拥有重要的性能优势： 异步接口，可以在存储上创建索引，以提高搜索速度。")]),t._v(" "),n("h6",{attrs:{id:"indexeddb-"}},[t._v("IndexedDB 的优点")]),t._v(" "),n("ol",[n("li",[t._v("作为异步API总体表现良好。数据库交互不会锁定用户界面。（同步 API 也可用于 WebWorkers。）")]),t._v(" "),n("li",[t._v("良好的搜索性能，因为数据可以根据搜索键进行索引。")]),t._v(" "),n("li",[t._v("支持版本控制。")]),t._v(" "),n("li",[t._v("强大，因为它支持"),n("a",{attrs:{href:"http://en.wikipedia.org/wiki/Database_transaction",target:"_blank"}},[t._v("事务性数据库模型（transactional database model）")]),t._v("。")]),t._v(" "),n("li",[t._v("因为数据模型简单，学习曲线也相当简单。")]),t._v(" "),n("li",[t._v("良好的浏览器支持: Chrome, Firefox, mobile FF, IE10.")])]),t._v(" "),n("h6",{attrs:{id:"indexeddb-"}},[t._v("IndexedDB 的弱点")]),t._v(" "),n("ol",[n("li",[t._v("非常复杂的API，导致大量的嵌套回调。")])]),t._v(" "),n("h3",{attrs:{id:"filesystem"}},[t._v("FileSystem")]),t._v(" "),n("p",[t._v("上面的 API 都是适用于文本和结构化数据，但涉及到大文件和二进制内容时，我们需要一些其他的东西。幸运的是，我们现在有了"),n("a",{attrs:{href:"http://dev.w3.org/2009/dap/file-system/file-dir-sys.html",target:"_blank"}},[t._v("文件系统 API 标准（FileSystem API standard）")]),t._v("。它给每个域一个完整的层次化的文件系统，至少在 Chrome 下面，这些都是用户的硬盘上的真正的文件。就单个文件的读写而言， API 建立在现有的 "),n("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/",target:"_blank"}},[t._v("File API")]),t._v("之上。")]),t._v(" "),n("h6",{attrs:{id:"filesystem-api-"}},[t._v("FileSystem（文件系统） API 的有点")]),t._v(" "),n("ol",[n("li",[t._v("可以存储大量的内容和二进制文件，很适合图像，音频，视频，PDF，等。")]),t._v(" "),n("li",[t._v("作为异步 API， 性能良好。")])]),t._v(" "),n("h6",{attrs:{id:"filesystem-api-"}},[t._v("FileSystem API 的弱点")]),t._v(" "),n("ol",[n("li",[t._v("很早的标准，只有 Chrome 和 Opera 支持。")]),t._v(" "),n("li",[t._v("没有事务（transaction）支持。")]),t._v(" "),n("li",[t._v("没有内建的搜索/索引支持。")])]),t._v(" "),n("h2",{attrs:{id:"-"}},[t._v("来看代码")]),t._v(" "),n("p",[t._v("本部分比较不同的 API 如何解决同一个问题。这个例子是一个 “地理情绪”（geo-mood） 签到系统，在那里你可以记录你在时间和地点的情绪。接口可让你在数据库类型之间切换。当然，在现实情况中，这可能显得有点作（contrived），数据库类型肯定比其他的更有意义，文件系统 API 根本不适用于这种应用！但为了演示的目的，如果我们能看到使用不同方式达到同样的结果，这还是有帮助的。还得注意，为了保值可读性，一些代码片段是经过重构的。")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/offline/storage/demo.html",target:"_blank"}},[t._v("现在可以来试试我们的“地理情绪”（geo-mood）应用。")])]),t._v(" "),n("p",[t._v("为了让 Demo 更有意思，我们将数据存储单独拿出来，使用"),n("a",{attrs:{href:"http://en.wikipedia.org/wiki/Polymorphism_in_object-oriented_programming",target:"_blank"}},[t._v("标准的面向对象的设计技术（standard object-oriented design techniques）")]),t._v("。 UI 逻辑只知道有一个 store；它无需知道 store 是如何实现的，因为每个 store 的方法是一样的。因此 UI 层代码可以称为 "),n("code",[t._v("store.setup()")]),t._v("，"),n("code",[t._v("store.count()")]),t._v(" 等等。实际上，我们的 store 有四种实现，每种对应一种存储类型。应用启动的时候，检查 URL 并实例化对应的 store。")]),t._v(" "),n("p",[t._v("为了保持 API 的一致性，所有的方法都是异步的，即它们将结果返回给调用方。Web Storage 的实现甚至也是这样的，其底层实现是本地的。")]),t._v(" "),n("p",[t._v("在下面的演示中，我们将跳过 UI 和定位逻辑，聚焦于存储技术。")]),t._v(" "),n("h3",{attrs:{id:"-store"}},[t._v("建立 Store")]),t._v(" "),n("p",[t._v("对 "),n("strong",[t._v("localStorage")]),t._v("，我们做个简单的检验看存储是否存在。如果不存在，则新建一个数组，并将其存储在  localStorage 的 checkins（签到） 键下面。首先，我们使用 JSON 对象将结构序列化为字符串，因为大多数浏览器只支持字符串存储。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("  (!localStorage.checkins) localStorage.checkins = "),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".stringify([]);")])]),n("p",[t._v("对 "),n("strong",[t._v("Web SQL Database")]),t._v("，数据库结构如果不存在的话，我们需要先创建。幸运的是，如果数据库不存在，"),n("code",[t._v("openDatabase")]),t._v(" 方法会自动创建数据库；同样，使用 SQL 句 “if not exists” 可以确保新的 checkins 表 如果已经存在的话不会被重写。我们需要预先定义好数据结构，也就是， checkins 表每列的名称和类型。每一行数据代表一次签到。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".db = openDatabase("),n("span",{staticClass:"hljs-string"},[t._v("'geomood'")]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v("'1.0'")]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v("'Geo-Mood Checkins'")]),t._v(", "),n("span",{staticClass:"hljs-number"},[t._v("8192")]),t._v(");\n"),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".db.transaction("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("tx")]),t._v(") ")]),t._v("{\n    tx.executeSql(\n        "),n("span",{staticClass:"hljs-string"},[t._v('"create table if not exists "')]),t._v("\n            + "),n("span",{staticClass:"hljs-string"},[t._v('"checkins(id integer primary key asc, time integer, latitude float,"')]),t._v("\n            + "),n("span",{staticClass:"hljs-string"},[t._v('"longitude float, mood string)"')]),t._v(",\n         [], "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n            "),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),n("span",{staticClass:"hljs-string"},[t._v('"siucc"')]),t._v("); \n        }\n    );\n});")])]),n("p",[n("strong",[t._v("Indexed Database")]),t._v(" 启动需要一些工作，因为它需要启用一个数据库版本系统。当我们连接数据库的时候要明确我们需要那个版本，如果当前数据库使用的是之前的版本或者还尚未被创建，会触发 "),n("code",[t._v("onupgradeneeded")]),t._v(" 事件，当升级完成后 "),n("code",[t._v("onsuccess")]),t._v(" 事件会被触发。如果无需升级，"),n("code",[t._v("onsuccess")]),t._v(" 事件马上就会触发。")]),t._v(" "),n("p",[t._v("另外一件事就是创建 “mood” 索引，以便之后能很快地查询到匹配的情绪。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" db;\n"),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" version = "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n"),n("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".indexedStore = {};\n"),n("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".indexedStore.setup = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("handler")]),t._v(") ")]),t._v("{ "),n("span",{staticClass:"hljs-comment"},[t._v("// attempt to open the database")]),t._v("\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" request = indexedDB.open("),n("span",{staticClass:"hljs-string"},[t._v('"geomood"')]),t._v(", version);  "),n("span",{staticClass:"hljs-comment"},[t._v("// upgrade/create the database if needed")]),t._v("\n    request.onupgradeneeded =  "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("event")]),t._v(")  ")]),t._v("{\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" db = request.result;\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("  (event.oldVersion <  "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(")  { "),n("span",{staticClass:"hljs-comment"},[t._v("// Version 1 is the first version of the database.")]),t._v("\n            "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" checkinsStore = db.createObjectStore("),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(",  { "),n("span",{staticClass:"hljs-attr"},[t._v("keyPath")]),t._v(":  "),n("span",{staticClass:"hljs-string"},[t._v('"time"')]),t._v("  });\n            checkinsStore.createIndex("),n("span",{staticClass:"hljs-string"},[t._v('"moodIndex"')]),t._v(",  "),n("span",{staticClass:"hljs-string"},[t._v('"mood"')]),t._v(",  { "),n("span",{staticClass:"hljs-attr"},[t._v("unique")]),t._v(":  "),n("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("  });\n        }\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("  (event.oldVersion <  "),n("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(")  {\n            "),n("span",{staticClass:"hljs-comment"},[t._v("// In future versions we'd upgrade our database here. ")]),t._v("\n            "),n("span",{staticClass:"hljs-comment"},[t._v("// This will never run here, because we're version 1.")]),t._v("\n        }\n        db = request.result;\n    };\n    request.onsuccess =  "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("ev")]),t._v(")  ")]),t._v("{  "),n("span",{staticClass:"hljs-comment"},[t._v("// assign the database for access outside")]),t._v("\n        db = request.result; handler();\n        db.onerror =  "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("ev")]),t._v(")  ")]),t._v("{\n            "),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),n("span",{staticClass:"hljs-string"},[t._v('"db error"')]),t._v(", "),n("span",{staticClass:"hljs-built_in"},[t._v("arguments")]),t._v(");\n        };\n    };\n};")])]),n("p",[t._v("最后，启动 "),n("strong",[t._v("FileSystem")]),t._v("。我们会把每种签到 JSON 编码后放在单独的文件中，它们都在 “checkins/” 目录下面。同样这并非 FileSystem API 最合适的用途，但对演示来说还挺好。")]),t._v(" "),n("p",[t._v("启动在整个文件系统中拿到一个控制手柄（handle），用来检查 “checkins/” 目录。如果目录不存在，使用 "),n("code",[t._v("getDirectory")]),t._v(" 创建。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("setup:  "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("handler")]),t._v(")  ")]),t._v("{\n    requestFileSystem(\n        "),n("span",{staticClass:"hljs-built_in"},[t._v("window")]),t._v(".PERSISTENT,\n        "),n("span",{staticClass:"hljs-number"},[t._v("1024")]),t._v("*"),n("span",{staticClass:"hljs-number"},[t._v("1024")]),t._v(",\n        "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("fs")]),t._v(")  ")]),t._v("{\n            fs.root.getDirectory(\n                "),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(",\n                {},  "),n("span",{staticClass:"hljs-comment"},[t._v('// no "create" option, so this is a read op')]),t._v("\n                "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("dir")]),t._v(")  ")]),t._v("{\n                    checkinsDir = dir;\n                    handler();\n                }, \n                "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"}),t._v(")  ")]),t._v("{\n                    fs.root.getDirectory( "),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(",  {"),n("span",{staticClass:"hljs-attr"},[t._v("create")]),t._v(":  "),n("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("},  "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("dir")]),t._v(")  ")]),t._v("{ checkinsDir = dir;\n                        handler();\n                    }, onError );\n                }\n            );\n        },\n        "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(")  ")]),t._v("{\n            "),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),n("span",{staticClass:"hljs-string"},[t._v('"error "')]),t._v("+e.code+"),n("span",{staticClass:"hljs-string"},[t._v('"initialising - see http://goo.gl/YW0TI"')]),t._v(");\n        }  \n    );\n}")])]),n("h3",{attrs:{id:"-check-in-"}},[t._v("保存一次签到 （Check-in）")]),t._v(" "),n("p",[t._v("使用 localStorage，我们只需要拿出 check-in 数组，在尾部添加一个，然后重新保存就行。我们还需要使用 JSON 对象的方法将其以字符串的方式存起来。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" checkins = "),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".parse(localStorage["),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v("]);\ncheckins.push(checkin);\nlocalStorage["),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v("] = "),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".stringify(checkins);")])]),n("p",[t._v("使用 Web SQL Database，所有的事情都在 transaction 中进行。我们要在 checkins 表 创建新的一行，这是一个简单的 SQL 调用，我们使用 “?” 语法，而不是把所有的签到数据都放到 “insert” 命令中，这样更整洁，也更安全。真正的数据——我们要保存的四个值——被放到第二行。“?” 元素会被这些值（"),n("code",[t._v("checkin.time")]),t._v("，"),n("code",[t._v("checkin.latitude")]),t._v("等等）替换掉。接下来的两个参数是操作完成之后被调用的函数，分别在成功和失败后调用。在这个应用中，我们对所有操作使用相同的通用错误处理程序。这样，成功回调函数就是我们传给搜索函数的句柄——确保句柄在成功的时候被调用，以便操作完成之后 UI 能接到通知（比如，更新目前为止的签到数量）。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("store.db.transaction("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("tx")]),t._v(") ")]),t._v("{\n    tx.executeSql(\n        "),n("span",{staticClass:"hljs-string"},[t._v('"insert into checkins "')]),t._v(" + "),n("span",{staticClass:"hljs-string"},[t._v('"(time, latitude, longitude, mood) values (?,?,?,?);"')]),t._v(", \n        [checkin.time, checkin.latitude, checkin.longitude, checkin.mood],\n        handler, \n        store.onError\n    ); \n});")])]),n("p",[t._v("一旦存储建立起来，将其存储到 IndexedDB 中就像 Web Storage 差不多简单，还有异步工作的优点。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" transaction = db.transaction("),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(",  "),n("span",{staticClass:"hljs-string"},[t._v("'readwrite'")]),t._v("); \ntransaction.objectStore("),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(").put(checkin); \ntransaction.oncomplete = handler;")])]),n("p",[t._v("使用 FileSystem API，新建文件并拿到相应的句柄，可以用 "),n("a",{attrs:{href:"http://www.w3.org/TR/file-writer-api/",target:"_blank"}},[t._v("FileWriter API")]),t._v(" 进行填充。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("fs.root.getFile(\n    "),n("span",{staticClass:"hljs-string"},[t._v('"checkins/"')]),t._v(" + checkin.time,\n    { "),n("span",{staticClass:"hljs-attr"},[t._v("create")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("exclusive")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(" }, \n    "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("file")]),t._v(") ")]),t._v("{\n        file.createWriter("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("writer")]),t._v(") ")]),t._v("{\n            writer.onerror = fileStore.onError;\n            "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" bb = "),n("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" WebKitBlobBuilder;\n            bb.append("),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".stringify(checkin));\n            writer.write(bb.getBlob("),n("span",{staticClass:"hljs-string"},[t._v('"text/plain"')]),t._v("));\n            handler(); }, fileStore.onError);\n    },\n    fileStore.onError\n);")])]),n("h3",{attrs:{id:"-"}},[t._v("搜索匹配项")]),t._v(" "),n("p",[t._v("接下来的函数找到所有匹配特定情绪的签到，例如，用户能看到他们在最近何时何地过得很开心。使用 localStorage， 我们必须手动遍历每次签到并将其与搜索的情绪对比，建立一个匹配列表。比较好的实践是返回存储数据的克隆，而不是实际的对象，因为搜索应该是一个只读的操作；所以我们将每个匹配的签到对象传递给通用的 "),n("code",[t._v("clone()")]),t._v(" 方法进行操作。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" allCheckins = "),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".parse(localStorage["),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v("]);\n"),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" matchingCheckins = [];\nallCheckins.forEach("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("checkin")]),t._v(") ")]),t._v("{\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (checkin.mood == moodQuery) {\n        matchingCheckins.push(clone(checkin));\n    } \n});\nhandler(matchingCheckins);")])]),n("p",[t._v("使用  Web SQL Database，我们执行一次查询，只返回我们需要的行。但我们仍需要手动遍历来累计签到数据，因为数据库 API 返回的是数据库行，而不是一个数组。（对大的结果集来说这是好事，但就现在而言这增加了我们需要的工作！）")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" matchingCheckins = [];\nstore.db.transaction("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("tx")]),t._v(") ")]),t._v("{\n    tx.executeSql(\n        "),n("span",{staticClass:"hljs-string"},[t._v('"select * from checkins where mood=?"')]),t._v(",\n        [moodQuery],\n        "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("tx, results")]),t._v(") ")]),t._v("{\n            "),n("span",{staticClass:"hljs-keyword"},[t._v("for")]),t._v(" ("),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" i = "),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("; i < results.rows.length; i++) {\n                matchingCheckins.push(clone(results.rows.item(i)));\n            }\n            handler(matchingCheckins); \n        },\n        store.onError\n    );\n});")])]),n("p",[t._v("当然，在 IndexedDB 解决方案使用索引，我们先前在 “mood” 表中创建的索引，称为“moodindex”。我们用一个指针遍历每次签到以匹配查询。注意这个指针模式也可以用于整个存储；因此，使用索引就像我们在商店里的一个窗口前，只能看到匹配的对象（类似于在传统数据库中的“视图”）。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" store = db.transaction("),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v("'readonly'")]),t._v(").objectStore("),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(");\n"),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" request = moodQuery ? store.index("),n("span",{staticClass:"hljs-string"},[t._v('"moodIndex"')]),t._v(").openCursor("),n("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" IDBKeyRange.only(moodQuery)) : store.openCursor();\nrequest.onsuccess = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("ev")]),t._v(") ")]),t._v("{\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" cursor = request.result;\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (cursor) {\n        handler(cursor.value);\n        cursor["),n("span",{staticClass:"hljs-string"},[t._v('"continue"')]),t._v("]();\n    } \n};")])]),n("p",[t._v("与许多传统的文件系统一样，FileSystem API 没有索引，所以搜索算法（如 Unix中的 “grep” 命令）必须遍历每个文件。我们从 “checkins/” 目录中拿到 "),n("a",{attrs:{href:"http://www.w3.org/TR/FileAPI/#dfn-filereader",target:"_blank"}},[t._v("Reader")]),t._v(" API ，通过 "),n("code",[t._v("readentries()")]),t._v(" 。对于每个文件，再使用一个 reader，使用 "),n("code",[t._v("readastext()")]),t._v(" 方法检查其内容。这些操作都是异步的，我们需要使用 "),n("code",[t._v("readnext()")]),t._v(" 将调用连在一起。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("checkinsDir.createReader().readEntries("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("files")]),t._v(") ")]),t._v("{\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" reader, fileCount = "),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(",\n        checkins = [];\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" readNextFile = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"}),t._v(") ")]),t._v("{\n        reader = "),n("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" FileReader();\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (fileCount == files.length) "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(";\n        reader.onload = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") ")]),t._v("{\n            "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" checkin = "),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".parse("),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".result);\n            "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (moodQuery == checkin.mood || !moodQuery) handler(checkin);\n            readNextFile();\n        };\n\n        files[fileCount++].file("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("file")]),t._v(") ")]),t._v("{\n            reader.readAsText(file);\n        });\n    };\n    readNextFile();\n});")])]),n("h3",{attrs:{id:"-"}},[t._v("匹配计数")]),t._v(" "),n("p",[t._v("最后，我们需要给所有签到计数。")]),t._v(" "),n("p",[t._v("对localStorage，我们简单的反序列化签到数组，读取其长度。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("handler("),n("span",{staticClass:"hljs-built_in"},[t._v("JSON")]),t._v(".parse(localStorage["),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v("]).length);")])]),n("p",[t._v("对 Web SQL Database，可以检索数据库中的每一行（"),n("code",[t._v("select * from checkins")]),t._v("），看结果集的长度。但如果我们知道我们在 SQL 中，有更容易和更快的方式 —— 我们可以执行一个特殊的 select 语句来检索计数。它将返回一行，其中一列包含计数。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("store.db.transaction("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("tx")]),t._v(") ")]),t._v("{\n    tx.executeSql("),n("span",{staticClass:"hljs-string"},[t._v('"select count(*) from checkins;"')]),t._v(", [], "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("tx, results")]),t._v(") ")]),t._v("{\n        handler(results.rows.item("),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(")["),n("span",{staticClass:"hljs-string"},[t._v('"count(*)"')]),t._v("]);\n    }, store.onError);\n});")])]),n("p",[t._v("不幸的是， IndexedDB 不提供任何计算方法，所以我们只能自己遍历。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" count = "),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n"),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" request = db.transaction(["),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v("], "),n("span",{staticClass:"hljs-string"},[t._v("'readonly'")]),t._v(").objectStore("),n("span",{staticClass:"hljs-string"},[t._v('"checkins"')]),t._v(").openCursor();\nrequest.onsuccess = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("ev")]),t._v(") ")]),t._v("{\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("var")]),t._v(" cursor = request.result;\n    cursor ? ++count && cursor["),n("span",{staticClass:"hljs-string"},[t._v('"continue"')]),t._v("]() : handler(count);\n};")])]),n("p",[t._v("对于文件系统， directory reader 的 "),n("code",[t._v("readentries()")]),t._v(" 方法提供一个文件列表，所以我们返回该列表的长度就好。")]),t._v(" "),n("pre",[n("code",{staticClass:"hljs lang-javascript"},[t._v("checkinsDir.createReader().readEntries("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v("("),n("span",{staticClass:"hljs-params"},[t._v("files")]),t._v(")  ")]),t._v("{\n    handler(files.length);\n});")])]),n("h2",{attrs:{id:"-"}},[t._v("总结")]),t._v(" "),n("p",[t._v("本文从较高层次的角度，讲述了现代客户端存储技术。你也可以看看 "),n("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/offline/whats-offline",target:"_blank"}},[t._v("《离线应用概述》（overview on offline apps）")]),t._v("这篇文章。")])])},[],!1,null,null,null);e.default=component.exports}}]);