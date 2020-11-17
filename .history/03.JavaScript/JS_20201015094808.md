JS由三部分组成：
ECMAScript ：javaScript的语法标准
DOM：文档对象模型 ，操作网页上元素的API
BOM：浏览器对象模型，操作浏览器部分功能的API

## DOM

### 节点 和 DOM
网页中的每一部分都是一个节点
- 文档节点：整个HTML
- 元素节点（标签）：HTML标签
- 属性节点（属性）：元素的属性
- 文本节点（文本）：HTML标签中的文本内容

DOM ：就是由节点组成的
DOM可以做什么？
- 找元素（节点）
- 设置元素的属性值和样式
- 动态的创建和删除元素
- 时间的触发响应：事件源、事件、时间的驱动程序

#### 元素节点的获取
三种方式：
var div1 = document.getElementById("box1"); //方式一：通过 id 获取一个元素节点（为什么是一个呢？因为 id 是唯一的）

var arr1 = document.getElementsByTagName("div"); //方式二：通过 标签名 获取 元素节点数组，所以有s

var arr2 = document.getElementsByClassName("hehe"); //方式三：通过 类名 获取 元素节点数组，所以有s

DOM访问关系的获取
父节点 ： parentNode
兄弟节点 ：nextSibling    previousSibling
子节点 ：firstChild    lastChild
所有子节点 ： children

#### 节点的操作
创建节点 ： 新的标签（元素节点）= docment.createElement("标签名");
插入节点 ：1. 父节点.appendChild(新的子节点);     2. 父节点.insertBefore(新的子节点，作为参考的子节点);
删除节点 ：父节点.removeChild(子节点);   node1.parentNode.removeChild(node1);删除自己
克隆节点：复制对象.cloneNode(true/false);默认为false 只复制节点本身   ，true为复制节点本身以及所有子节点

#### 设置节点的属性
- 获取属性值

方式一： 元素节点.属性名   或者  元素节点[属性名]
方式二： 元素节点.getAttribute(属性名)
- 设置属性值

方式一：myNode.src= "images/2.jpg";
方式二：myNode.setAttribute("src","images/2.jpg")
- 删除属性值

myNode.removeAttribute("class");


innerHTML  和  innerText的区别
前者输出时，连带标签一起输出，输入时也能识别标签转化为样式
后者输出只输出文本，输入时标签也会识别成文本