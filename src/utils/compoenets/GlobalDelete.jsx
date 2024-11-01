/* eslint-disable react/prop-types */
// GlobalConfirmation.js
import React from 'react';
import { Modal } from 'antd';

const GlobalDelete = ({ isOpen, onClose, onConfirm, title, content }) => {
  return (
    <Modal
      title={title}
      visible={isOpen}
      onOk={onConfirm}
      onCancel={onClose}
      okText="OK"
      cancelText="Cancel"
    >
      <p>{content}</p>
    </Modal>
  );
};

export default GlobalDelete;
