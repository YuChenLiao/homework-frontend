import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  antd: {},
  layout: { name: '保龄球模拟实验', locale: false },
  routes: [
    { exact: true, path: '/', component: '@/pages/index', name: '首页' },
    {
      exact: true,
      path: '/userGame',
      component: '@/pages/infoChecks/userGame',
      name: '个人赛事',
    },
    {
      exact: true,
      path: '/infoCheck',
      component: '@/pages/infoChecks/gameCheck',
      name: '赛事查询',
    },
    {
      exact: true,
      path: '/admin/gmaeAdmin',
      component: '@/pages/gameAdmin',
      name: '赛事管理',
    },
  ],
  fastRefresh: {},
});
