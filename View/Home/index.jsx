/*
 * @Author: fenghongxin 1608137919@qq.com
 * @Date: 2023-05-16 16:09:51
 * @LastEditors: fenghongxin 1608137919@qq.com
 * @LastEditTime: 2023-05-16 17:24:57
 * @FilePath: /demo/myapp/src/View/Home/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTE } from '../../Router'
const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTE.map((item) => {
          return <Route path={item.path} element={item.element}></Route>
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Home
