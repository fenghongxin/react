import React, { useState } from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC = () => {
  let [value, setValue] = useState()
  let [values, setvalues] = useState()
  let items = [
    {
      key: '/a',
      label: 'a',
      children: [
        {
          key: '/a1',
          label: 'a-a',
        },
        {
          key: '/a2',
          label: 'a-b',
        },
      ],
    },
    {
      key: '/b',
      label: 'b',
      children: [
        {
          key: '/b1',
          label: 'b-a',
        },
        {
          key: '/b2',
          label: 'b-b',
        },
      ],
    },
  ]

  let [item, setItem] = useState(items)
  let change = (e) => {
    setvalues(e)
  }
  let Click = () => {
    items.forEach((itema) => {
      itema.children.forEach((itemss) => {
        if (itemss.key == value) {
          itemss.label = values
        }
      })
    })
    setItem(items)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          onClick={(e) => setValue(e.key)}
          items={item}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <input
              value={values}
              onChange={(e) => change(e.target.value)}
            ></input>
            <button onClick={() => Click()}>submit</button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
