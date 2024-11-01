/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { confirmBeforeLeaving } from '../../../utils/confirmations/confirmBeforeLeaving';
import validationRules from '../../../validations/allValidations';
import * as Yup from 'yup';

const FormModal = ({ isOpen, onClose, onSubmit, initialValues, editMode }) => {
  const [isTouched, setIsTouched] = useState(false);
  const formikRef = useRef(null); // Use ref instead of state

  const handleModalClose = () => {
    if (isTouched) {
      confirmBeforeLeaving(
        true,
        () => {
          setIsTouched(false);
          formikRef.current?.resetForm(); 
          onClose();
        },
        () => {}
      );
    } else {
      onClose();
    }
  };

  [{}]
  // Reset form fields when the modal closes after successful add

  useEffect(() => {
    if (!isOpen && formikRef.current) {
      formikRef.current.resetForm();
      setIsTouched(false);
    }
  }, [isOpen]);

  // Define a specific validation schema for this modal
  const validationSchema = Yup.object().shape({
    name: validationRules.name,
    email: validationRules.email,
    password: validationRules.strongPassword, // Or any other password validation you want to use
  });

  // Effect to update initial values when the modal opens
  useEffect(() => {
    if (isOpen && formikRef.current) {
      formikRef.current.setValues(initialValues);
      setIsTouched(false); // Reset touched state when initial values are updated
    }
  }, [initialValues, isOpen]);

  return (
    <Modal
      title={editMode ? 'Edit Entry' : 'Add Entry'}
      visible={isOpen}
      onCancel={handleModalClose}
      footer={null}
    >
      <Formik
        innerRef={formikRef} // Use ref here to avoid state updates
        initialValues={initialValues}
        validationSchema={validationSchema} // Use the new validation schema
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm(); // Reset form fields after submission
          setIsTouched(false); // Clear touched state
          onClose(); // Close modal after form submission
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                id="name"
                name="name"
                className="input" 
                onChange={(e) => {
                  handleChange(e);
                  setIsTouched(true);
                }}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                className="input" 
                onChange={(e) => {
                  handleChange(e);
                  setIsTouched(true);
                }}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                id="password"
                className="input" 
                name="password"
                onChange={(e) => {
                  handleChange(e);
                  setIsTouched(true);
                }}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <Button type="primary" htmlType="submit">
              {editMode ? 'Update' : 'Add'}
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default FormModal;
