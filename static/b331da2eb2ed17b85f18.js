(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{201:function(t,n,l){"use strict";l.r(n);var e={computed:{data:function(){return{title:"[译] 函数式 TypeScript",description:"函数式 TypeScript",keywords:"翻译,TypeScript,函数式编程",pathname:"functional-refactor-typescript",translation:{author:"@Victor Savkin",social:"https://twitter.com/victorsavkin",from:"https://vsavkin.com/functional-typescript-316f0e003dc6#.h1njvc96o"},create_time:"2016-09-28",prev:{title:"[译] yarn 和 npm 命令行小抄",pathname:"npm-vs-yarn-cheat-sheet"},next:{title:"笔记：TypeScript 中引用全局变量",pathname:"ts-note-on-global-reference"}}}}},v=l(2),component=Object(v.a)(e,function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("post",{attrs:{data:t.data}},[l("p",[l("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01aeda500508da54ce.png",expression:"`https://p.ssl.qhimg.com/t01aeda500508da54ce.png`"}],attrs:{alt:""}})]),t._v(" "),l("p",[t._v("谈到函数式编程时，我们常提到机制、方法，而不是核心原则。函数式编程不是关于 Monad、Monoid 和 Zipper 这些概念的，虽然它们确实很有用。从根本上来说，函数式编程就是关于如使用通用的可复用函数进行组合编程。"),l("strong",[t._v("本文是我在重构 TypeScript 代码时使用函数式的一些思考的结果。")])]),t._v(" "),l("p",[t._v("首先，我们需要用到以下几项技术：")]),t._v(" "),l("ul",[l("li",[t._v("尽可能使用函数代替简单值")]),t._v(" "),l("li",[t._v("数据转换过程管道化")]),t._v(" "),l("li",[t._v("提取通用函数")])]),t._v(" "),l("p",[t._v("来，开始吧！")]),t._v(" "),l("p",[t._v("假设我们有两个类，Employee 和 Department。Employee 有 name 和 salary 属性，Department 只是 Employee 的简单集合。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-class"},[l("span",{staticClass:"hljs-keyword"},[t._v("class")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("Employee")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("constructor")]),t._v("(public name: string, public salary: number) {}\n}\n\n"),l("span",{staticClass:"hljs-class"},[l("span",{staticClass:"hljs-keyword"},[t._v("class")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("Department")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("constructor")]),t._v("(public employees: Employee[]) {}\n\n  works(employee: Employee): boolean {\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),l("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".employees.indexOf(employee) > "),l("span",{staticClass:"hljs-number"},[t._v("-1")]),t._v(";\n  }\n}")])]),l("p",[t._v("我们要重构的是 averageSalary 函数。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], minSalary: number, department?: Department")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n   "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" total = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n   "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" count = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n\n   employees.forEach("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" {\n     "),l("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("(minSalary <= e.salary && (department === "),l("span",{staticClass:"hljs-literal"},[t._v("undefined")]),t._v(" || department.works(e))){\n       total += e.salary;\n       count += "),l("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n     }\n   });\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" total === "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / count;\n }")])]),l("p",[t._v("averageSalary 函数接收 employee 数组、最低薪资 minSalary 以及可选的 department 作为参数。如果传了 department 参数，函数会计算该部门中所有员工的平均薪资；若不传，则对全部员工进行计算。")]),t._v(" "),l("p",[t._v("该函数的使用方式如下：")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("describe("),l("span",{staticClass:"hljs-string"},[t._v('"average salary"')]),t._v(", () => {\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" empls = [\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Employee("),l("span",{staticClass:"hljs-string"},[t._v('"Jim"')]),t._v(", "),l("span",{staticClass:"hljs-number"},[t._v("100")]),t._v("),\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Employee("),l("span",{staticClass:"hljs-string"},[t._v('"John"')]),t._v(", "),l("span",{staticClass:"hljs-number"},[t._v("200")]),t._v("),\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Employee("),l("span",{staticClass:"hljs-string"},[t._v('"Liz"')]),t._v(", "),l("span",{staticClass:"hljs-number"},[t._v("120")]),t._v("),\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Employee("),l("span",{staticClass:"hljs-string"},[t._v('"Penny"')]),t._v(", "),l("span",{staticClass:"hljs-number"},[t._v("30")]),t._v(")\n  ];\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" sales = "),l("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" Department([empls["),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("], empls["),l("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("]]);\n\n  it("),l("span",{staticClass:"hljs-string"},[t._v('"calculates the average salary"')]),t._v(", () => {\n    expect(averageSalary(empls, "),l("span",{staticClass:"hljs-number"},[t._v("50")]),t._v(", sales)).toEqual("),l("span",{staticClass:"hljs-number"},[t._v("150")]),t._v(");\n    expect(averageSalary(empls, "),l("span",{staticClass:"hljs-number"},[t._v("50")]),t._v(")).toEqual("),l("span",{staticClass:"hljs-number"},[t._v("140")]),t._v(");\n  });\n});")])]),l("p",[t._v("需求虽简单粗暴，可就算不提代码难以拓展，其混乱是显而易见的。若新增条件，函数签名及接口就不得不发生变动，if 语句也会也越来越臃肿可怕。")]),t._v(" "),l("p",[t._v("我们一起用一些函数式编程的办法重构这个函数吧。")]),t._v(" "),l("h2",{attrs:{id:"-"}},[t._v("使用函数代替简单值")]),t._v(" "),l("p",[l("strong",[t._v("使用函数代替简单值看起来似乎不太直观，但这却是整理归纳代码的强大办法。")]),t._v("在我们的例子中，这样做，意味着要将 minSalary 和 department 参数替换成两个条件检验的函数。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("type Predicate = "),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e: Employee")]),t._v(") =>")]),t._v(" boolean;\n\n"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], salaryCondition: Predicate,\n  departmentCondition?: Predicate")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" total = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" count = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n\n  employees.forEach("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" {\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("(salaryCondition(e) && (departmentCondition === "),l("span",{staticClass:"hljs-literal"},[t._v("undefined")]),t._v(" || departmentCondition(e))){\n      total += e.salary;\n      count += "),l("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n    }\n  });\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" total === "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / count;\n}\n\n"),l("span",{staticClass:"hljs-comment"},[t._v("// ...")]),t._v("\n\nexpect(averageSalary(empls, (e) => e.salary > "),l("span",{staticClass:"hljs-number"},[t._v("50")]),t._v(", (e) => sales.works(e))).toEqual("),l("span",{staticClass:"hljs-number"},[t._v("150")]),t._v(");")])]),l("p",[l("strong",[t._v(" 我们所做的就是将 salary、department 两个条件接口统一起来。")]),t._v("而此前这两个条件是写死的，现在它们被明确定义了，并且遵循一致的接口。"),l("strong",[t._v("这次整合允许我们将所有条件作为数组传递。")])]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], conditions: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" total = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" count = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n\n  employees.forEach("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" {\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("(conditions.every("),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("c")]),t._v(" =>")]),t._v(" c(e))){\n      total += e.salary;\n      count += "),l("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n    }\n  });\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" (count === "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / count;\n}\n\n"),l("span",{staticClass:"hljs-comment"},[t._v("//...")]),t._v("\n\nexpect(averageSalary(empls, ["),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" e.salary > "),l("span",{staticClass:"hljs-number"},[t._v("50")]),t._v(", (e) => sales.works(e)])).toEqual("),l("span",{staticClass:"hljs-number"},[t._v("150")]),t._v(");")])]),l("p",[t._v("条件数组只不过是组合的条件，可以用一个简单的组合器将它们放到一起，这样看起来更加明晰。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("and")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("predicates: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("Predicate")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" predicates.every("),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("p")]),t._v(" =>")]),t._v(" p(e));\n}\n\n"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], conditions: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" total = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" count = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(";\n\n  employees.forEach("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" {\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("(and(conditions)(e)){\n      total += e.salary;\n      count += "),l("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n    }\n  });\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" (count == "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / count;\n}")])]),l("p",[t._v("值得注意的是，“and” 组合器是通用的，可以复用并且还可能拓展为库。")]),t._v(" "),l("p",[l("strong",[t._v("提起结果")])]),t._v(" "),l("p",[t._v("现在，averageSalary 函数已健壮得多了。"),l("strong",[t._v("我们可以加入新条件，无需破坏函数接口或改变函数实现。")])]),t._v(" "),l("h2",{attrs:{id:"-"}},[t._v("数据转换过程管道化")]),t._v(" "),l("p",[t._v("函数式编程的另外一个很有用的实践是将所有数据转换过程变成管道。在本例中，就是将 filter 过程提取到循环外面。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], conditions: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" filtered = employees.filter(and(conditions));\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" total = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" count = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("\n\n  filtered.forEach("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" {\n    total += e.salary;\n    count += "),l("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(";\n  });\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" (count == "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / count;\n}")])]),l("p",[t._v("这样一来计数的 count 就没什么用了。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], conditions: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")])]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" filtered = employees.filter(and(conditions));\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" total = "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("\n  filtered.forEach("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(") =>")]),t._v(" {\n    total += e.salary;\n  });\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" (filtered.length == "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / filtered.length;\n}")])]),l("p",[t._v("接下来，如在叠加之前将 salary 摘取出来，求和过程就变成简单的 reduce 了。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], conditions: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" filtered = employees.filter(and(conditions));\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" salaries = filtered.map("),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(" =>")]),t._v(" e.salary);\n\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" total = salaries.reduce("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("a,b")]),t._v(") =>")]),t._v(" a + b, "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(");\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" (salaries.length == "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / salaries.length;\n}")])]),l("h2",{attrs:{id:"-"}},[t._v("提取通用函数")]),t._v(" "),l("p",[t._v("接着我们发现，最后两行代码和当前域完全没什么关系。其中不包含任何与员工、部门相关的信息。仅仅只是一个计算平均数的函数。所以也将其提取出来。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("average")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("nums: number[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" total = nums.reduce("),l("span",{staticClass:"hljs-function"},[t._v("("),l("span",{staticClass:"hljs-params"},[t._v("a,b")]),t._v(") =>")]),t._v(" a + b, "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(");\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" (nums.length == "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") ? "),l("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(" : total / nums.length;\n}\n\n"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("averageSalary")]),t._v("("),l("span",{staticClass:"hljs-params"},[t._v("employees: Employee[], conditions: Predicate[]")]),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("number")]),t._v(" ")]),t._v("{\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" filtered = employees.filter(and(conditions));\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" salaries = filtered.map("),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("e")]),t._v(" =>")]),t._v(" e.salary);\n  "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" average(salaries);\n}")])]),l("p",[t._v("又一次，提取出的函数是完全通用的。")]),t._v(" "),l("p",[t._v("最后，将所有 salary 部分提出来之后，我们得到终极方案。")]),t._v(" "),l("pre",[l("code",{staticClass:"hljs lang-javascript"},[t._v("function employeeSalaries(employees: Employee[], conditions: Predicate[]): number[] {\n  const filtered = employees.filter(and(conditions));\n  return filtered.map(e => e.salary);\n}\n\nfunction averageSalary(employees: Employee[], conditions: Predicate[]): number {\n  return average(employeeSalaries(employees, conditions));\n}")])]),l("p",[t._v("对比原始方案和终极方案，我敢说，毫无疑问，后者更棒。首先，它更通用（我们可以不破坏函数接口的情况下添加新类型的判断条件）。其次，我们从可变状态（mutable state）和 if 语句中解脱出来，这使代码更容易阅读、理解。")]),t._v(" "),l("h2",{attrs:{id:"-"}},[t._v("何时收手")]),t._v(" "),l("p",[t._v("函数式风格的编程中，我们会编写许多小型函数，它们接收一个集合，返回新的集合。这些函数能够以不同方式组合、复用 —— 棒极了。不过，这种风格的一个缺点是代码可能会变得过度抽象，导致难以读懂，那些函数组合在一起到底要干嘛？")]),t._v(" "),l("p",[t._v("我喜欢使用乐高来类比：乐高积木能够以不同形式放在一起 —— 它们是可组合的。但注意，并不是所有积木都是一小块。所以，在使用本文所述技巧进行代码重构时，千万别妄图将一切都变成接收数组、返回数组的函数。诚然，这样一些函数组合使用极度容易，可它们也会显著降低我们对程序的理解能力。")]),t._v(" "),l("h2",{attrs:{id:"-"}},[t._v("小结")]),t._v(" "),l("p",[t._v("本文展示了如何使用函数式思维重构 TypeScript 代码。我所遵循的是以下几点规则：")]),t._v(" "),l("ul",[l("li",[t._v("尽可能使用函数代替简单值")]),t._v(" "),l("li",[t._v("数据转换过程管道化")]),t._v(" "),l("li",[t._v("提取通用函数")])]),t._v(" "),l("h2",{attrs:{id:"-"}},[t._v("了解更多")]),t._v(" "),l("p",[t._v("强烈推荐以下两本书：")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://leanpub.com/javascript-allonge",target:"_blank"}},[t._v("“JavaScript Allonge” by Reginald Braithwaite")])]),t._v(" "),l("li",[l("a",{attrs:{href:"http://shop.oreilly.com/product/0636920028857.do",target:"_blank"}},[t._v("“Functional JavaScript” by Michael Fogus")])])]),t._v(" "),l("hr"),t._v(" "),l("p",[l("a",{attrs:{href:"https://twitter.com/victorsavkin",target:"_blank"}},[t._v("关注 @victorsavkin")]),t._v("  获得更多关于 Angular 和 TypeScript 的知识。")])])},[],!1,null,null,null);n.default=component.exports}}]);