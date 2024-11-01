// src/utils/notificationUtils.js
import { notification } from 'antd';

export const showNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
    placement: 'topRight',
    duration: 3,
  });
};

// Usage Example:
// showNotification('success', 'Action Successful', 'Your data has been saved.');
// Types can be: 'success', 'info', 'warning', 'error'.
