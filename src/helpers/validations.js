import * as Yup from 'yup';

export const editProfile = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username to sort!')
    .trim()
    .required('Username is required!'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const editNews = Yup.object().shape({
  title: Yup.string().min(10, 'Title to sort').required('Title is Required'),
  imageDescription: Yup.string()
    .min(10, 'Description to sort')
    .required('Image description is required'),
  content: Yup.string()
    .min(100, 'content to sort')
    .trim()
    .required('Content is required'),
});

export const register = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(5, 'Username to sort')
    .required('Username is required'),
  email: Yup.string()
    .trim()
    .email('Invalid email adress')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(8, 'Password at least 8 karacters')
    .required('Password is required'),
});
