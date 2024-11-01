/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/layout/Sidebar.jsx
import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => (
  <Sider
    collapsible
    collapsed={collapsed}
    trigger={null}
    width={280}
    collapsedWidth={80}
    style={{ height: '100vh' }}
  >
    <Navbar collapsed={collapsed} />
  </Sider>
);

export default Sidebar;
