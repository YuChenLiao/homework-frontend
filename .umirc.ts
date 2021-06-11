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
      component: '@/pages/infoCheck',
      name: '赛事查询',
    },
    {
      name: '管理',
      path: '/admin/',
      routes: [
        {
          exact: true,
          path: '/admin/infoAdmin',
          component: '@/pages/infoAdmin',
          name: '信息管理',
        },
        {
          exact: true,
          path: '/admin/adminPage',
          component: '@/pages/admin',
          name: '管理页面',
        },
        {
          exact: true,
          path: '/admin/gmaeAdmin',
          component: '@/pages/gameAdmin',
          name: '赛事管理',
        },
      ],
    },
  ],
  fastRefresh: {},
});
