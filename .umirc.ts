import { defineConfig } from 'umi';
import routes from './src/config/routes'
export default defineConfig({
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '资金运营',
    locale: true,
    layout: 'side',
    logo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1108410754,3264611400&fm=26&gp=0.jpg'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  dva: {
    immer: true,
    hmr: true,
  },
});
