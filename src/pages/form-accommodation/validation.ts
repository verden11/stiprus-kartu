import * as yup from 'yup';

export const customerValidationSchema = yup.object({
    firstName: yup.string().required('this is required'),
    lastName:  yup.string().required('this is required').min(2),
    email:  yup.string().email('this is email example@mail.com').required('this is required'),
});

export type CustomerForm = yup.InferType<typeof customerValidationSchema>;