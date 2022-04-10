import * as yup from 'yup';

export const rideValidationSchema = yup.object({
  'full-name': yup.string().required('this is required'),
  email: yup.string().email('this is email example@mail.com').required('this is required'),
  phone: yup.string().required('this is required'),
  city: yup.string().required('this is required'),
  'car-model': yup.string().required('this is required'),
  'passenger-count': yup.number().positive().required('this is required'),
  info: yup.string(),
  gender: yup.string(),
  'privacy-policy': yup.bool(),
  confirmation: yup.bool(),
  agreement: yup.bool(),
  notFirstForm: yup.bool(),
});

export type TRideForm = yup.InferType<typeof rideValidationSchema>;
