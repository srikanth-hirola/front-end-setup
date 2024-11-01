// CustomBreadcrumbs.js
import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CustomBreadcrumbs = ({ breadcrumbs }) => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbs.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.path ? (
            <Link to={item.path}>{item.name}</Link>
          ) : (
            item.name
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
