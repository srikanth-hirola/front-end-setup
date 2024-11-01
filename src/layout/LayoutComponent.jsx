/* eslint-disable no-unused-vars */
// src/components/layout/LayoutComponent.jsx
import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';
import AppRoutes from '../routes/AppRoutes';
// import AppHeader from '../common/Header';

const { Content } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh', position: 'relative', width: '100vw' }}>
      <Sidebar collapsed={collapsed} />
      <Layout className="antd-main-layout" style={{position:'relative', marginLeft: collapsed ? 0 : 0 }}>
        {/* <AppHeader /> */}
        <Content style={{ padding: '0 24px', minHeight: 280, width: '100%' }}>
          <AppRoutes />
        </Content>
        <Button
          className="collapse-button"
          type="primary"
          onClick={toggleCollapse}
          style={{
            position: 'absolute',
            top: '50%',
            right: 20,
            zIndex: 1,
            width:'fit-content'
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
