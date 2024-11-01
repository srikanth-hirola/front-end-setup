/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/layout/Navbar.jsx
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import {
  FaRegChartBar,
  FaUser,
  FaTasks,
  FaCogs,
  FaBook,
  FaUsers,
  FaUserShield,
  FaUserAlt
} from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';

const Navbar = ({ collapsed }) => (
  <Menu theme="dark" mode="inline">
    <div className="logo-main">
      <img src="https://hirolainfotech.com/images/logo.svg" alt="" />
    </div>
    <Menu.Item key="1" icon={<FaRegChartBar style={{ color: '#000' }} />}>
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<FaRegChartBar style={{ color: '#000' }} />}>
      <Link to="/setup">Setup</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<FaRegChartBar style={{ color: '#000' }} />}>
      <Link to="/settings">Settings</Link>
    </Menu.Item>
    {/* <Menu.SubMenu key="sub1" title="General" icon={<FaRegChartBar style={{ color: '#000' }} />}>
      <Menu.Item key="2" icon={<FaBook style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/book">Organization Info</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">E-Signature</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Documents</Link>
      </Menu.Item>
     
    </Menu.SubMenu>
  
      <Menu.Item key="5" icon={<FaBook style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/book">Users</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<FaCogs style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Clause Library</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Contract Types</Link>
      </Menu.Item>
      <Menu.Item key="8" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Contract Letters</Link>
      </Menu.Item>
      <Menu.Item key="9" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Choice Lists</Link>
      </Menu.Item>
      <Menu.Item key="10" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Activity Logs</Link>
      </Menu.Item>
      <Menu.Item key="11" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Reports</Link>
      </Menu.Item>
      <Menu.Item key="12" icon={<TbBrandBooking style={{ color: '#fff' }} />}>
        <Link style={{ color: '#fff' }} to="/appointments/all">Subscription</Link>
      </Menu.Item> */}
    

    {/* Other submenu items for Reports, Users, Activities, and Settings */}
  </Menu>
);

export default Navbar;
