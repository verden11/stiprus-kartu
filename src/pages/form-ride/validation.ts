import * as yup from 'yup';

export enum Sex {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum Nationality {
  Ukrainian = 'Ukrainian',
  Polish = 'Polish',
  Russian = 'Russian',
  Lithuanian = 'Lithuanian',
  Other = 'Other',
}

export const helpValidationSchema = yup.object({
  'full-name': yup.string().required('this is required'),
  email: yup.string().email('this is email example@mail.com').required('this is required'),
  phone: yup.string().required('this is required'),
  'birth-date': yup.date().required('this is required'),
  gender: yup.mixed<Sex>().oneOf(Object.values(Sex)),
  citizenship: yup.mixed<Nationality>().oneOf(Object.values(Nationality)),
});

export const rideValidationSchema = yup.object({
  'full-name': yup.string().required('this is required'),
  email: yup.string().email('this is email example@mail.com').required('this is required'),
  phone: yup.string().required('this is required'),
  city: yup.string().required('this is required'),
  'car-model': yup.string().required('this is required'),
  'passenger-count': yup.number().positive().required('this is required'),
  info: yup.string(),
  gender: yup.string(),
  'privacy-policy': yup.bool().default(false),
  confirmation: yup.bool().default(false),
  agreement: yup.bool().default(false),
  notFirstForm: yup.bool().default(false),
});

export type TRideForm = yup.InferType<typeof rideValidationSchema>;
export type THelpForm = yup.InferType<typeof helpValidationSchema>;
