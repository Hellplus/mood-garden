# Mood Garden 情绪花园

一个用 HTML、CSS 和 JavaScript 制作的小型前端练习项目。用户可以记录当天的情绪和一句心情，种下一张属于自己的情绪花卡片。

在线访问地址：[https://hellplus.github.io/mood-garden/](https://hellplus.github.io/mood-garden/)

## 项目简介

Mood Garden 情绪花园是一个偏温柔、治愈风格的私人情绪日记页面。它不依赖后端，也不使用框架，数据保存在浏览器的 `localStorage` 中。

这个项目主要适合前端新手练习：

- HTML 页面结构
- CSS 布局和视觉样式
- JavaScript DOM 操作
- 浏览器本地存储 `localStorage`
- 简单的数据渲染和状态更新

## 主要功能

- 选择今日情绪：开心、平静、焦虑、疲惫、兴奋
- 输入一句今天的心情
- 点击“种下一朵花”生成情绪花卡片
- 根据不同情绪显示不同 emoji、颜色和文案
- 随机生成对应情绪的今日花语
- 花卡片保存到 `localStorage`
- 刷新页面后仍能看到历史花卡片
- 显示情绪统计小面板
- 支持清空花园，清空前会二次确认

## 使用技术

- HTML
- CSS
- JavaScript
- localStorage

没有使用 React、Vue、构建工具或后端服务。

## 本地运行方式

这个项目可以直接在浏览器中运行：

1. 下载或克隆项目到本地。
2. 找到项目目录中的 `index.html`。
3. 双击 `index.html`，用浏览器打开即可。

也可以使用 VS Code 的 Live Server 插件打开，方便开发时自动刷新。

## 项目文件结构

```text
mood-garden/
├─ index.html
├─ style.css
├─ script.js
└─ README.md
```

文件说明：

- `index.html`：页面结构，包括标题、情绪选择、输入框、统计面板和花园区域。
- `style.css`：页面样式，包括背景、按钮、卡片、统计面板和响应式布局。
- `script.js`：页面交互逻辑，包括种花、随机花语、保存数据、读取历史、情绪统计和清空花园。
- `README.md`：项目说明文档。

## 我通过这个项目学习到了什么

通过这个项目，我练习了：

- 如何把页面拆分成 HTML、CSS、JavaScript 三部分
- 如何使用按钮点击事件处理用户操作
- 如何从输入框读取用户输入
- 如何用 JavaScript 创建和渲染页面元素
- 如何使用数组保存多条数据
- 如何用 `JSON.stringify` 和 `JSON.parse` 配合 `localStorage`
- 如何在刷新页面后恢复历史数据
- 如何根据已有数据计算统计结果
- 如何在不使用框架的情况下完成一个完整的小型前端应用

## 后续可升级方向

- 增加删除单张花卡片功能
- 增加编辑心情文字功能
- 增加按情绪筛选历史花卡片
- 增加日历视图，按日期查看情绪记录
- 增加更多情绪类型，例如孤独、感恩、低落
- 增加导出数据功能
- 增加深色模式
- 将项目改写为 React 或 Vue 版本，用来练习框架开发
