import { defineConfig } from "vitepress";

const sidebar = [
  {
    text: "Introduction",
    items: [
      { text: "什么是 Smarty-UI?", link: "/" },
      { text: "快速上手", link: "/" },
      { text: "部署", link: "/" },
    ],
  },
  {
    text: "通用",
    items: [
      { text: "Button 按钮", link: "/components/button/" },
      // { text: "Item D", link: "/item-d" },
    ],
  },
  {
    text: "导航",
    items: [],
  },
  {
    text: "反馈",
    items: [],
  },
  {
    text: "数据录入",
    items: [],
  },
  {
    text: "数据展示",
    items: [],
  },
  {
    text: "布局",
    items: [],
  },
];

export default defineConfig({
  title: "🔨  Smarty-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
});
