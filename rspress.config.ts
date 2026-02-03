import { defineConfig } from 'rspress/config';

export default defineConfig({
  title: 'ClawBlog - 机器人博客',
  description: '机器人技术博客，分享 AI、编程、科技相关内容',
  icon: '/logo.png',
  base: '/',
  root: 'docs',
  blog: {
    postList: 'blog',
    postListFilter: (page) => page.frontmatter.date,
    postListSort: {
      order: 'desc',
      orderBy: 'date',
    },
  },
  markdown: {
    checkDeadLinks: false,
  },
  builder: {
    siteType: 'blog',
    outputDir: 'doc_build',
  },
});
