import { memo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  email: string;
  lastName: string;
};

export const FormRide = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        placeholder="Bill"
        {...register('firstName', {
          required: 'this is a required',
          minLength: {
            value: 2,
            message: 'Min length is 2',
          },
        })}
      />
      <br />
      {errors.firstName && errors.firstName.message}
      <br />

      <label htmlFor="lastName">Last Name</label>
      <input
        placeholder="Luo"
        {...register('lastName', {
          required: 'this is required',
          minLength: {
            value: 2,
            message: 'Min length is 2',
          },
        })}
      />
      <br />
      {errors.lastName && errors.lastName.message}
      <br />

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="text"
        {...register('email', {
          required: 'this is required',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email address',
          },
        })}
      />
      <br />
      {errors.email && errors.email.message}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default memo(FormRide);
