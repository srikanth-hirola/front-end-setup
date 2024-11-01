import * as Yup from 'yup';

const validationRules = {
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
    .required('Name is required'),
  
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .required('Password is required'),
  
  // Alphanumeric with minimum length
  alphanumericMin: (min) =>
    Yup.string()
      .matches(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters allowed')
      .min(min, `Must be at least ${min} characters`)
      .required('Field is required'),
  
  // Alphanumeric without length restriction
  alphanumeric: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters allowed')
    .required('Field is required'),

  // Numeric only with min and max length
  numericMinMax: (min, max) =>
    Yup.string()
      .matches(/^\d+$/, 'Only numbers are allowed')
      .min(min, `Must be at least ${min} digits`)
      .max(max, `Cannot exceed ${max} digits`)
      .required('Field is required'),
  
  // Positive integer
  positiveInteger: Yup.number()
    .integer('Must be an integer')
    .positive('Must be positive')
    .required('Field is required'),

  // Date validation (e.g., for Date of Birth)
  date: Yup.date()
    .max(new Date(), 'Cannot be in the future')
    .required('Date is required'),

  // URL validation
  url: Yup.string()
    .url('Invalid URL format')
    .required('URL is required'),

  // Phone number validation
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
    .required('Phone number is required'),

  // Postal code validation
  postalCode: Yup.string()
    .matches(/^\d{5}$/, 'Must be a valid 5-digit postal code')
    .required('Postal code is required'),

  // Custom regex validation for strong password
  strongPassword: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Must be at least 8 characters, include one letter and one number'
    )
    .required('Password is required'),

  // Alpha only with a minimum length
  alphaMinLength: (min) =>
    Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed')
      .min(min, `Must be at least ${min} characters`)
      .required('Field is required'),

  // Integer with min and max limits
  integerMinMax: (min, max) =>
    Yup.number()
      .integer('Must be an integer')
      .min(min, `Must be at least ${min}`)
      .max(max, `Cannot exceed ${max}`)
      .required('Field is required'),

  // Boolean validation
  boolean: Yup.boolean().required('Field is required'),

  // Array validation with minimum number of items
  arrayMinItems: (min) =>
    Yup.array()
      .min(min, `Select at least ${min} items`)
      .required('Field is required'),

  // File validation for required and file type
  fileRequired: Yup.mixed()
    .required('File is required')
    .test('fileType', 'Unsupported file type', (value) =>
      value && ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type)
    ),
  
  // Length-based validation for IDs or codes
  codeLength: (length) =>
    Yup.string()
      .length(length, `Must be exactly ${length} characters`)
      .required('Field is required'),

  // Checkbox required (for terms and conditions)
  checkboxRequired: Yup.bool()
    .oneOf([true], 'Must accept the terms and conditions')
    .required('Field is required'),
};

export default validationRules;
