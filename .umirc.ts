import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  antd: {},
  layout: { name: '保龄球模拟实验', locale: false },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
