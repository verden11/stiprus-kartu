import * as yup from 'yup';

export const rideValidationSchema = yup.object({
  nameAndSurname: yup.string().required('this is required').min(2),
  email: yup.string().email('this is email example@mail.com').required('this is required'),
  phoneNo: yup.string().required('this is required'),
  city: yup.string().required('this is required'),
  carMakeModel: yup.string().required('this is required'),
  numberOfPasengers: yup.number().positive().required('this is required'),
  extraInfo: yup.string(),
  gender: yup.string(),
  privacyPolicy: yup.bool(),
  permissionVoluntaryRules: yup.bool(),
  permisionContact: yup.bool(),
  notFirstForm: yup.bool(),
});

export type TRideForm = yup.InferType<typeof rideValidationSchema>;
