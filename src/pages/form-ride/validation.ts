import * as yup from 'yup';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
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
  'address-ukraine': yup.string().required('this is required'),
  'number-of-people': yup.number().positive().required('this is required'),
  'each-persons-age': yup.string().required('this is required'),
  livingLocation: yup.mixed<Nationality>().oneOf(Object.values(Nationality)),
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)),
  citizenship: yup.mixed<Nationality>().oneOf(Object.values(Nationality)),
  hasRelatives: yup.bool().default(false),
  needFood: yup.bool().default(false),
  needRide: yup.bool().default(false),
  knowsLithuanian: yup.bool().default(false),
  knowsUkrainian: yup.bool().default(false),
  knowsEnglish: yup.bool().default(false),
  knowsRussian: yup.bool().default(false),
  'additional-info': yup.string(),
  hasFilledBefore: yup.bool().default(false),
  hasAcceptedTerms: yup.bool().default(false),
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
