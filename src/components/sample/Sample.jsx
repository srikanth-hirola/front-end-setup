/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Empty, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { confirmBeforeLeaving } from '../../utils/confirmations/confirmBeforeLeaving';
import { showNotification } from '../../utils/notifications/showNotification';
import FormModal from './modal/FormModal';
import GlobalDelete from '../../utils/compoenets/GlobalDelete';
import CustomBreadcrumbs from '../common/ui/BreadCrumbs';

const Sample = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.form.fields);
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Example', path: '/example' },
    { name: 'Details' },
    { name: 'Details' },
  ];
  // Local state
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formTouched, setFormTouched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('tableData')) || [];
    setData(storedData);
    setLoading(false);
  }, []);

  const saveDataToLocalStorage = (newData) => {
    localStorage.setItem('tableData', JSON.stringify(newData));
  };

  const openModal = (mode, index = null) => {
    setEditMode(mode === 'edit');
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    confirmBeforeLeaving(formTouched, () => {
      setIsModalOpen(false);
      setFormTouched(false);
      setEditIndex(null); // Reset edit index
    }, () => console.log('User decided to stay.'));
  };

  const handleFormSubmit = (values) => {
    let updatedData;
    if (editMode && editIndex !== null) {
      updatedData = [...data];
      updatedData[editIndex] = values;
      showNotification('success', 'Updated Successfully', 'The entry has been updated.');
    } else {
      updatedData = [...data, values];
      showNotification('success', 'Added Successfully', 'New entry has been added.');
    }
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
    closeModal();
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setIsConfirmationOpen(true);
  };

  const confirmDelete = () => {
    const updatedData = data.filter((_, i) => i !== deleteIndex);
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
    showNotification('warning', 'Deleted Successfully', 'The entry has been deleted.');
    setIsConfirmationOpen(false);
    setDeleteIndex(null);
  };

  return (
    <div>
      <button className='button danger' onClick={() => openModal('add')}>Add Entry</button>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      {loading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : data.length > 0 ? (
        <table border="1" cellPadding="8" className='table-main' style={{ marginTop: '20px', width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.email}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td
                className='actions'
                >
                  <span className="tag tag-danger">{item.password}</span>
                </td>
                <td>
                  <Button onClick={() => openModal('edit', index)}>Edit</Button>
                  <Button onClick={() => handleDelete(index)} danger>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Empty description="No Data Available" style={{ marginTop: '20px' }} />
      )}

      {/* Add/Edit Modal */}
      <FormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        initialValues={editMode && editIndex !== null ? data[editIndex] : fields}
        editMode={editMode}
        onTouched={() => setFormTouched(true)}
      />
      <GlobalDelete
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        content="Are you sure you want to delete this entry?"
      />
    </div>
  );
};

export default Sample;
