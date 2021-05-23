# 实现一个脚手架工具

## 实现功能

- [ ] 通过 yeoman-generator 自定义脚手架工具
- [ ] 初始化一个纯 html/css/js 项目
- [ ] 初始化一个 vue SPA 应用 & node-cli
- [ ] 初始化一个 node-cli

## 使用工具

- yeoman-generator

## 实现步骤

### 1.初始化项目

- mkdir generator-summer-scaffold && cd generator-summer-scaffold
- yarn init -y
- yarn add yeoman-generator
- git init
- touch .gitignore，且忽略 node_modules
- 在 github 创建库 generator-summer-scaffold
- git add .
- git commit -m "feat:init"
- git branch -M main
- git remote add origin https://github.com/HappyJeannie/generator-summer-scaffold.git
- git push -u origin main

目录结构：

|- generators
  |- app
    |- index.js
|- package.json
|- .gitignore
|- README.md

### 2、增加模版 & 交互

- generaters/templates 下增加三个目录：html、vue、node 分别代表原生的项目、vue 项目和 node 项目并增加对应的资源文件
- generators/app/index.js 中增加交互，分别为获取项目名称、作者名、选择项目类型
- 根据获得到的交互值，将 templates 目录下的资源文件进行替换并拷贝到指定目录
- 使用资源：
  - glob
    - golb.async, nodir
  - path
    - fs.resolve
  - yeoman-generator
    - writing
    - prompting
    - end
    - _private_fn
    - this.destinationPath
    - this.templatePath
    - this.fs.copyTpl
  - 调试： yarn link

### 3.使用

```
yarn global add yo
yarn global add generator-summer-scaffold
yo summer-scaffold
// 根据提示选择指定项目
```

> 参考：
> [yeoman](https://yeoman.io/authoring/user-interactions.html)

## 使用
