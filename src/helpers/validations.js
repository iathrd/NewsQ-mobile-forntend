import * as Yup from 'yup';

export const editProfile = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username to sort!')
    .trim()
    .required('Username is required!'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});
