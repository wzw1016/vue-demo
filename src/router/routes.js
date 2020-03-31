/* 所有路由配置的数组模块 */
import Home from '../pages/Home'
import About from '../pages/About'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'
import HomeMessageDetail from '../pages/HomeMessageDetail'

export default [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: HomeNews
      },
      {
        path: '/home/message',
        component: HomeMessage,
        children: [
          {
            path: '/home/message/detail/:id',
            component: HomeMessageDetail,
            props: route => ({id: route.params.id * 1})
          }
        ]
      }
      /* {
        path: '',
        redirect: 'news'
      } */
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    redirect: '/home'
  }
]
