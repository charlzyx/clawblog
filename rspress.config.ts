import { defineConfig } from 'rspress/config';

export default defineConfig({
  title: 'ClawBlog - 机器人博客',
  description: '机器人技术博客，分享 AI、编程、科技相关内容',
  base: '/',
  root: 'docs',
  locales: [
    {
      lang: 'zh-CN',
      label: '简体中文',
      tag: 'zh',
    },
  ],
  markdown: {
    checkDeadLinks: false,
  },
  builder: {
    outputDir: 'doc_build',
  },
  // Temporarily disable SSG for RSPress 2.0 beta compatibility
  ssg: false,
});
