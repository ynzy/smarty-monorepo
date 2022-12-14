/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import type { Plugin, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
// import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/

export const config = {
  plugins: [
    vue() as Plugin,
    // 添加JSX插件
    vueJsx() as Plugin,
    // 添加UnoCSS插件
    Unocss(),
    // copy({
    //   targets: [
    //     { src: "package.json", dest: "dist" },
    //     { src: "README.md", dest: "dist" },
    //   ],
    //   hook: "writeBundle",
    // }),
  ],
  // 添加库模式配置
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        assetFileNames: "[name].[ext]",
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit: true,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },

  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },
} as UserConfig;
export default defineConfig(config as UserConfig);
