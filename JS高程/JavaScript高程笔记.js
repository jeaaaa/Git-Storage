5种数据类型，typeof判断数据类型
undefined派生自null
alert（undefined == null ）//true
浮点数值需要的内存空间是保存整数值的两倍
八进制以0开头，十六进制以0x开头
浮点数值的最高进度是17位小数
Number.MIN_VALUE
Number.MAX_VALUE
isFinite() 确定一个数值是不是在最大数和最小数之间
isNaN() 判断是否是数值，是//false，否//true
Number(),parseInt(),parseFloat()把非数值转换为数值
Number()可用于任何数据类型
parseInt() 在转换字符串时，第二个参数可作为进制基数。整数
parseFloat() 只解析十进制，始终会忽略前导零，如果字符串包含的是一个可解析为整数的数（没有小数点，或者小数点后都是零）会返回整数。浮点数
toString() 转化为字符串，null和undefined没有这个方法
String() 将任何类型的值转为字符串，返回字面量

object()属性
 constructor：保存用于创建当前对象的函数
 hasOwnProperty(propertyName):用于检测给定的属性在当前对象实例中（而不是在实例原型中）是否存在，属性名必须以字符串形式指定
 isPrototypeOf(obejct)：用于检测传入的对象是否是当前对象的原型
 propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for...in语句
 toLocaleString() 返回对象的字符串表示，该字符串与执行环境的地区对应
 toString(): 返回对象的字符串表示
 valueOf() 返回对象的字符串，数字或布尔值表示

一元操作符
前置递增，++age等价于age=age+1
前置递减，--age等价于age=age-1
后置递增，age++
后置递减，age--
后置递增递减操作是包含他们的语句被求值之后才执行，（不会及时执行需二次调用）

一元加，放在数值前面，不会对数值产生任何影响
一元减，放在数值前面，对数值求负

布尔操作符
逻辑非（!）
逻辑与（&&） 短路操作，第一个为false时即为false
	第一个为对象，返回第二个操作数
	第二个为对象，只有第一个求值为true才返回第二个
	两个都是对象，返回第二个操作数
逻辑或（||） 短路操作，第一个为true时即为true
	var a=b||c，如果b有值就负给a，没有值c就赋值给a

加性操作符，如果两个中有一个是字符串则执行字符串拼接操作

关系操作符
<,>,<=,>=,
任何操作数与NaN比较结果都是false，

相等操作符
null == undefined //true
NaN ==NaN //false
5 == NaN //false
NaN != NaN //true
false == 0  //true
true == 1  //true
true == 2  //false
undefined == 0 //false
null == 0  //false

条件操作符
var max=（num1>num2）?num1:num2

赋值操作符
num +=10 等价于 num=num+10

语句
if
do-while 后测试循环语句，循环内的代码至少执行一次
while  前测试循环语句，while（）{}
for循环 
for-in 精准的迭代语句，可用来枚举对象的属性
for ( var propName in window){console.log(propName)}
label 在代码中添加标签，以便将来使用
start：for(var i=0;i<10;i++){
	alert(i)
}

break和continue用于在循环中精确地控制代码的执行
break会立即退出循环，强制执行循环后面的语句
continue立即退出循环，退出后会从循环的顶部继续执行

with 将代码作用域设置到一个特定的对象中

switch-case 在比较值时使用的是全等操作符，因此不会发生类型转换

arguments 的值永远与对应命名参数的值保持同步

变量：基本类型值（五种基本数据类型），引用类型值

复制变量值：
基本类型值复制值，两个值相对独立存在互不影响
引用类型值复制值，实际上是复制一个指针指向堆内存中的值，一个变化另一个也受影响

传递参数：
向参数传递基本类型的值，被传递的值会被复制给一个局部变量(相当于arguments对象的一个元素)
向参数传递引用类型的值，会把这个值在内存中的地址复制给局部变量，因此这个局部变量的变化会反应在函数外部
在函数体内可以通过arguments 对象来访问这个参数

typeof 检测类型，null会返回object
instanceof 检测是什么类型的对象

执行环境和作用域
全局执行环境被认为是window对象
作用域链的用途是保证执行环境有权访问的所有变量和函数的有序访问
一个函数就是一个执行环境，内部环境可以通过作用域链访问所有的外部环境，（子函数可以访问父函数的变量，父函数不能访问到子函数的变量）

函数参数也被当做变量来对待，因此访问规则与执行环境中的其他变量相同

try-catch语句的catch块和with语句，能延长作用域链，都会在作用域的前端加一个变量对象
with是将指定的对象添加到作用域链中
catch会创建一个新的变量对象

使用var声明的变量会自动被添加到最接近的环境中
初始化变量没有使用var声明，会自动被添加到全局环境

函数向上搜索变量

将变量设置为null意味着切断变量与它此前引用的值之间的链接，当垃圾收集器再次运行时就会删除这些值并回收他们占用的内存

基本类型值保存在栈内存中
引用类型值保存在堆内存中
作用域决定了变量的生命周期
每次进入一个新的执行环境都会创建一个用于搜索变量和函数的作用域链

引用类型
object，使用方括号表示法访问对象属性时可以使用变量
array，new Arrar(17)或Array(3)如果传递的是数值，则会按照该数值创建包含给定现数的数组
通过设置length属性,可以从数组末尾移除或添加项
数组最后一项的索引始终是length-1
Array.isArray(value)确定某个值到底是不是数组
valueOf()返回的还是数组本身
toString()返回由逗号分隔的字符串
join()使用不同的分隔符来构建字符串
push()可以接收任意数量的参数，把它们逐个添加至数组末尾，并返回修改后的数组长度
pop() 从数组末尾移除最后一项，减少数组的length值，返回移除的项
shift() 移除数组中的第一项并返回该项
unshift() 在数组前端添加任意项并返回新数组的长度
reverse() 反转数组项的顺序
sort() 按升序排列数组项，转换成字符串比较，故而可以接收比较函数作为参数
concat() 复制当前数组，若有参数传递，将接收到的参数添加到这个副本的末尾生成一个新数组
slice() 返回开始和结束位置之间的项
splice（指定项位置，删除项数，插入项）接收若干参数并返回从原始数组返回的项没有为空
indexOf()和lastIndexOf(要查找的项，查找起点位置的索引)，没找到返回-1，找到返回索引 
every() 对数组中的每一项运行给定函数，如果每一项函数返回true，则返回true
filter() 对数组中的每一项运行给定函数，该函数会返回true项组成的数组
forEach() 对数组中每一项运行给定函数，没有返回值
map() 数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
some() 数组中的每一项运行给定函数，任一项返回true则返回true
reduce() 和reduceRight() 分别接收四个参数，(前一个值，当前值，项的索引，数组 ),返回的任何参数都会作为第一个参数自动
传给下一项

Date类型
Date.parse() 接收一个表示日期的字符串参数
Date.UTC(年，基于0的月份，日，时，分，秒，毫秒)  年，月是必需的，后面没有为0
Date.now() 取得当前的时间戳

正则表达式
g 表示全局匹配模式，即应用于所有字符串
i 不区分大小写
m 多行模式，在到达一行末尾时还会继续查找下一行中是否存在与模式匹配的项
( [ { \ ^ $ | } ? * + . ] )  使用的所有元字符都必须转译

/[bc]at/i    匹配第一个‘bat’或‘cat’,不区分大小写
/\[bc\]at/i  匹配第一个‘[bc]at’,不区分大小写
/.at/ig      匹配所有以‘at’结尾的3个字符的组合，不区分大小写
/\.at/ig	匹配所有‘.at’，不区分大小写

RegExp实例属性
global 是否设置了g 标志
ignoreCase 是否设置了i 标志
lastIndex 表示开始搜索下一个匹配项的字符位置
multiline 表示是否设置了m标志
source 正则表达式的字符串表示

Function类型
函数声明会率先读取，并使其在执行任何代码之前可用
函数表达式则必须等到解析器执行到所在代码行，才会被执行
可以将一个函数作为另一个函数的结果返回

arguments.callee 指向拥有这个arguments对象的函数

this引用的是函数执行的环境对象，
函数的名字仅仅是一个包含指针的变量而已
caller 保存着调用当前函数的函数的引用

函数length和prototype属性
length表示函数希望接收的命名参数的个数
prototype是保存他们所有实例的方法
每个函数都包含两个非继承而来的方法，apply()和call()。都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值
apply()方法接收两个参数，一个是在其中运行函数的作用域，另一个是参数数组。第二个参数可以是array实例或者arguments对象
call() 传递给函数的参数必须组个列举出来
apply()和call() 能够扩充函数的作用域
bind() 创建一个函数实例，其this值会被绑定到传给bind()函数的值

boolean.number.String
每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而能够调用方法来操作数据
自动创建的基本包装类型的对象，只存在与一行代码执行瞬间，然后立即被销毁，不能在运行的时候为基本类型添加属性和方法

number类型
toFixed() 按照指定的小数位返回数值的字符串表示，按浏览器规则四舍五入
toExponential() 科学计数法表示
toPrecision() 传入位数自动决定调用toFixed()还是toExponential()

string类型
charAt(),charCodeAt() 访问字符串中了特定字符的方法
charAt()返回给定位置的字符
charCodeAt()返回给定位置的字符的字符编码
slice(),substr(),substring() 返回被操作字符串的一个子字符串，第一个参数指定子字符串开始的位置
slice()和substring() 第二个指定子字符串最后一个字符后面的位置，substr() 第二个参数指定位数
indexOf(),lastIndexOf() 搜索给定的子字符串然后返回子字符串的位置，如果没有返回-1，第二个参数指定开始搜索的位置
trim() 删除前后的所有空格
toLowerCase() toLocaleLowerString() toUpperCase() toLocaleUpperString() 字符串大小写转换
match() search() repalce() split() 用于正则表达式匹配字符串
fromCharCode() 接收字符编码然后转换成一个字符串

URL编码方法
encodeURI() 不会对本身属于URL的特殊字符进行编码
encodeURIComponent() 对任何非标准字符进行编码
decodeURI() decodeURIComponent() 对编译的URL进行解码

eval() 中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中，只在eval()执行的时候创建

在全局作用域中声明的所有变量和函数，就都成为了window对象的函数

Math对象
Math.ceil() 执行向上舍入
Math.floor() 执行向下舍入
Math.round() 四舍五入
Math.random() 返回0-1之间的一个随机数

面向对象
数据属性和访问器属性
数据属性有4个描述其行为的特性:
[[Configurable]] 能否通过delete删除属性从而重新定义属性，默认true
[[Enumerable]] 能否通过for-in循环返回属性，默认true
[[Writable]] 能否修改属性值，默认true
[[Value]] 包含这个属性的数据值，默认undefined
object.defineProperty() 修改属性默认的特性
访问器属性不包含数据值，包含 getter()和setter() 函数，同样具有4个特性：
[[Configurable]] 能否被delete删除，能否修改属性特性或者修改为数据属性。默认true
[[Enumerable]] 能否通过for-in 循环返回属性,默认true
[[Get]] 读取属性时调用的函数，默认为undefined
[[Set]] 写入属性时调用的函数，默认为undefined
访问器属性不能直接定义，必须使用Obejct.defineProperty() 来定义

Object.defineProperties() 定义多个属性，第一个参数是要修改的对象，第二个参数为要修改或添加的属性

Object.getOwnPropertyDescriptor() 取得给定属性的描述符，第一个参数是属性所在对象，第二个是要读取器描述符的属性名称

任何函数只要通过new操作符来调用就可以作为构造函数

每个函数都有一个prototype属性，这个属性指向一个对象，包含由特定类型的所有实例共享的属性和方法的对象
所有原型对象都有constructor（构造函数）属性，通过constructor属性还可以继续为原型对象添加其他属性和方法
isPrototypeOf() 方法来确定对象之间是否存在prototype关系
Object.getPrototypeOf() 可以方便地取得一个对象的原型
hasOwnProperty() 检测一个属性是存在于实例中，还是存在于原型中
in操作符，单独使用时in操作符会在通过对象能够访问给定属性时返回true
hasPrototypeProperty() 检测属性是否是存在于原型中
Object.keys() 接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组
getOwnPropertyNames() 枚举对象的所有属性，包括默认属性
原型的动态性，先创建实例后修改原型也能从实例中提现出来
调用构造函数时会为实例添加一个指向最初原型的指针，而把原型修改成另外一个对象就等于切断了构造函数与最初原型之间的联系
即不能在声明原型函数且调用后再重写函数原型
原型中所有属性都是被共享的，修改其中一个属性其他实例属性也会改变
稳妥构造函数模式，稳妥对象指没用公共属性而其他方法也不引用this的对象
每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针
instanceof 和 isPrototypeOf() 确定原型和实例之间的关系
isPrototypeOf() 只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型
闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包的常见方式就是在一个函数内部创建另一个函数
作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位
当某个函数被调用时，会创建一个执行环境及相应的作用域链
function object(o){
	function F(){}
	F.prototype=o;
	return new F();
}
闭包只能取得包含函数中任何变量的最后一个值
this 对象是在运行时基于函数的执行环境绑定，在全局函数中this等于window，当函数被作为某个对象的方法调用时，this等于那个对象
arguments和this一样，把外部作用域中的this对象保存在一个闭包能够访问到的变量里，就可以让闭包访问到该对象了

闭包中保存着HTML元素，那么这个元素将无法销毁

(function(){
	//这里是块级作用域,定义的变量会在使用后销毁
})();
任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数的外部访问这些变量
把有权访问私有变量和私有函数的公有方法称为特权方法

全局变量不能通过delete操作符删除，直接在window对象上定义的属性可以delete删除

outerHeight,outerWidth 返回浏览器窗口本身的尺寸
innerHeight,innerWidth 返回页面视图区的大小
document.documentElement.clientHeight,document.documentElement.clientWidth 页面视图区大小

window.open() 可以导航到一个特定的url，也可以打开一个新的浏览器窗口

setTimeout() 超时调用 setInterval() 间歇调用

location.replace("heep://www.")	//重定向到某个地址，不进入历史记录
location.reload()	//重新加载（有可能从缓存中加载）
location.reload(true)	//重新加载（从服务器重新加载）

navigator对象,用于识别客户端浏览器
navigator.plugins	//浏览器中安装的插件信息数组

screen对象，用于获取相关显示器及浏览器信息
history对象，保存着用户上网的历史记录

能力检测：检测特定浏览器的能力
怪癖检测：浏览器实现中存在的bug
一般优先考虑使用能力检测，其次是怪癖检测，用户代理检测是客户端检测的最后一种方案，因为这种方法对用户代理字符串具有很强的依赖性

第十章DOM
每个节点都有一个nodetype属性，
previousSibling 前一个兄弟节点
nextSibling 后一个兄弟节点
parentNode 父节点
操作节点
appendChild() 用于向节点列表的末尾添加一个节点
insertBefore() 把节点放在列表中某个特定的位置上，接受两个参数：要插入的节点和作为参照的节点
replaceChild() 接受两个参数：要插入的节点和要替换的节点，替换节点
removeChild() 移除节点
cloneNode() 复制节点，true进行深复制即包含子节点，false进行浅复制只复制节点本身

document对象是HTMLDcument的一个实例，表示整个HTML页面
Document节点具有下列特征：
nodeType的值为 9
nodeName的值为 "#document"
nodeValue的值为 null
parentNode 的值为 null
ownerDocument 的值为 null
其子节点可能是一个DocumentType（最多一个），Element（最多一个），ProcessingInstruction或Comment

<html>
	<body>

	</body>
</html>
var heml = document.documentElement;  //取得对HTML的引用
console.log( html==document.childNodes[0])  //true
console.log(html == document.firstChild);	//true
都指向html

var body = document.body   //取得<body>
var doctype = doctype.doctype	//取得<! DOCTYPE>的引用

document.title
document.URL //页面完整url
document.domain	//页面域名
document.referrer	//保存着链接到当前页面的那个页面的URL

var referrer=document.referrer	//取得来源页面的url

设置document.domain，使得两个页面能相互访问对方的JavaScript对象
将document.domain设置为jea.com后，就不能将其设置回www.jea.com，只能由松散到紧绷，不能由紧绷到松散

查找元素
document.anchors	//文档中所有带name特性的<a>元素
document.links		//文档中所有带href特性的<a>元素

getAttribute, setAttribute, removeAttribute 操作特性
var div=document.getElementById('id')
div.getAttribute('own')		//取得div的特性包括自定义的

document.createElement() //创建新元素
childNodes 元素子节点
ul.getElementByTagName("li")	//取得ul包含的所有li元素

Text类型：
nodeType的值为3,
nodeName的值为"#text",
nodeValue的值为节点所包含的文本,
parentNode是一个Element,

document.createTextNode() //创建新文本节点
element.normalize() //合并相邻文本节点
element.splitText()	//分割文本节点，指定分割位置，原文本节点包含从开始到指定位置之前的内容，新文节点包含剩下的内容

Comment类型：
//继承自text类型
nodeType的值为8，
nodeName的值为"#comment",
nodeValue的值是注释的内容
parentNode可能是Document或Element

CDATASection类型：
//只针对基于XML的文档，表示的是CDATA区域，继承自text类型
nodeType的值为4,
nodeName的值为"#cdata-section",
nodeValue的值为CDATA区域中的内容，
parentNode可能是Document或Element

DcomentType类型：
//仅有Firefox、Safari、Opera支持他
nodeType的值为10,
nodeName的值为doctype的名称，
nodeValue的值为null,
parentNode是Document

DocumentFragment类型
//作为‘仓库’临时储存创建的文档节点，然后再添加到DOM，
var fragment=document.createDocumentFragment();
var ul=document.getElementById('mylist');
var li=null;
for (var i=0;i<3;i++){
	li = document.createElement("li");
	li.appendChild(document.createTextNode("item"+(i+1)));
	fragment.appendChild(li);
}
ul.appendChild(fragment);

Attr类型
//元素的特性，存在于元素的attributes属性中的节点