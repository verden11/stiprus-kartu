import * as yup from 'yup';

export const accommodationValidationSchema = yup.object({
  firstName: yup.string().required('this is required'),
  lastName: yup.string().required('this is required').min(2),
  email: yup.string().email('this is email example@mail.com').required('this is required'),
});

export type AccommodationForm = yup.InferType<typeof accommodationValidationSchema>;
