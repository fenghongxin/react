/*
 * @Author: fenghongxin 1608137919@qq.com
 * @Date: 2023-05-16 16:04:16
 * @LastEditors: fenghongxin 1608137919@qq.com
 * @LastEditTime: 2023-05-16 17:48:52
 * @FilePath: /demo/myapp/src/Router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

const Home = React.lazy(() => import('../View/Home/index'))
const Page = React.lazy(() => import('../View/Page/index'))
const HomeA = React.lazy(() => import('../View/Home/HomeA/index'))
const HomeB = React.lazy(() => import('../View/Home/HomeB/index'))
const PageA = React.lazy(() => import('../View/Page/PageA/index'))
const PageB = React.lazy(() => import('../View/Page/PageB/index'))

const ROUTE = [
  {
    path: '/',
    element: <Home></Home>,
    meta: {
      tit: '菜单一',
    },
    children: [
      {
        path: '/homeA',
        element: <HomeA></HomeA>,
        meta: {
          tit: '子菜单1-1',
        },
      },
      {
        path: '/homeB',
        element: <HomeB></HomeB>,
        meta: {
          tit: '子菜单1-2',
        },
      },
    ],
  },

  {
    path: '/page',
    element: <Page></Page>,
    meta: {
      tit: '菜单二',
    },
    children: [
      {
        path: '/pageA',
        element: <PageA></PageA>,
        meta: {
          tit: '子菜单2-1',
        },
      },
      {
        path: '/pageB',
        element: <PageB></PageB>,
        meta: {
          tit: '子菜单2-2',
        },
      },
    ],
  },
]

export default ROUTE
