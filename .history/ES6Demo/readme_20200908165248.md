# 全局安装babel-cli

### 1.初始化项目

打开终端，**快捷键:ctrl + ~** ,输入如下命令:

```
npm init -y
```
``-y`` 表示全部默认同意，不用一次次按回车。命令执行完成后，会在根目录下面生成一个package,json文件

### 2.全局安装Babel-cli

终端输入``npm install -g babel-cli `
`
### 3.本地安装babel-preset-ex2015 和 babel-cli

终端输入`` npm install --save-dev babel-preset-es2015 babel-cli``
安装完成后，会发现package.json文件里多了``devDependenncies``选项

### 4.新建.babelrc

在根目录中新建文件``.babrlrc``，输入以下内容：
```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```

### 5.开始转换 

再package.json文件中，将``scripts`` 修改为:

```
"scripts":{
    "build":"babel src/index.jd -o dist/index.js"
},
```
到此为止，环境就已经配置好了，在终端中执行以下命令:
```
npm run build
```
即可将src 里面的ES6文件 index.js 转化为ES5文件 dist中 index.js