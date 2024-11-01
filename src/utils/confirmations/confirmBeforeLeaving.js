// src/utils/confirmationUtils.js
import { Modal } from 'antd';

export const confirmBeforeLeaving = (hasUnsavedChanges, onDiscard, onCancel) => {
  if (!hasUnsavedChanges) {
    onDiscard(); // Directly close if no unsaved changes
    return;
  }

  Modal.confirm({
    title: 'Discard changes?',
    content: 'You have unsaved changes. Are you sure you want to discard them?',
    okText: 'Discard',
    cancelText: 'Stay',
    onOk: onDiscard,
    onCancel: onCancel,
  });
};

// Usage Example:
// confirmBeforeLeaving(
//   formTouched,                // Boolean indicating if form has unsaved changes
//   () => closeModal(),         // onDiscard callback, to close the modal
//   () => console.log('Stayed') // onCancel callback, optional
// );



