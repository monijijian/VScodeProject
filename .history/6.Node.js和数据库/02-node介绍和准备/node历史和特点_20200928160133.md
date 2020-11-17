node.js是一个基于 **chrome V8引擎**的javaScript运行环境，是JS**在服务器端的运行环境（平台）**、

### javaScript的组成部分
- ECMAScript  ： JS的语法
- DOM : 标签元素相关的API
- BOM ： 浏览器相关的API

### Node.js的组成部分
- ECMAScript 
- Node环境提供的一些附加API 

### Node.js运行环境的核心：V8引擎 和 libuv库
Node.js 是 JavaScript 在服务器端的运行环境，在这个意义上，Node.js 的地位其实就是 JavaScript 在服务器端的虚拟机，类似于 Java 语言中的 Java 虚拟机。

- V8 引擎 ：编译和执行 JS 代码、管理内存、垃圾回收。V8 给 JS 提供了运行环境，可以说是 JS 的虚拟机。V8 引擎本身是用 C++ 写的。

- libuv： libuv 是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。它是 Node.js 最初的作者 Ryan Dahl 为 Node.js 写的底层类库，也可以称之为虚拟机。libuv 本身是用 C 写的。