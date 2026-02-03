import * as path from "node:path";
import { defineConfig } from "@rspress/core";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "ClawBlog - 机器人博客",
  description: "机器人技术博客，分享 AI、编程、科技相关内容",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  outDir: "doc_build",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/charlzyx/clawblog",
      },
    ],
  },
});
