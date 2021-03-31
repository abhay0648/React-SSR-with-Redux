import TopBlog from '../components/Pages/TopBlog';
import Bespoke from '../components/Pages/Bespoke';
import Industry from '../components/Pages/Industry';
import BlogDetail from '../components/Pages/BlogDetail';

export default [
  {
    title: 'Top Blogs',
    path: '/',
    component: TopBlog,
    exact : true
  },

  {
    title: 'Industry',
    path: '/industry',
    component: Industry,
    exact : true
  },

  {
    title: 'Bespoke',
    path: '/bespoke',
    component: Bespoke,
    exact : true
  },

  {
    title: 'About Blog',
    path: '/blog_detail',
    component: BlogDetail,
    exact : true
  },

];
