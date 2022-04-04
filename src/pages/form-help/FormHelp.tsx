import { memo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

enum Sex {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

enum Nationality {
  Ukrainian = 'Ukrainian',
  Polish = 'Polish',
  Russian = 'Russian',
  Lithuanian = 'Lithuanian',
  Other = 'Other',
}

type Inputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  dob: Date;
  addressInUA: string;
  sex: Sex;
  nationality: Nationality;
};

export const FormHelp = () => {
  const { formatMessage } = useIntl();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="max-w-6xl mx-6 md:mx-14 pt-3">
      <h1>
        <FormattedMessage id="temporaryHome" />
      </h1>
      <p>
        <FormattedMessage id="fillTheForm" />
      </p>
      <p>
        <FormattedMessage id="personalInfo" />
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col py-6">
        <label htmlFor="fullName">
          <FormattedMessage id="form.fullName" />
        </label>
        <input
          placeholder="John Smith"
          {...register('fullName', {
            required: formatMessage({ id: 'form.required' }),
            minLength: {
              value: 2,
              message: 'Min length is 2',
            },
          })}
        />
        <br />
        {errors.fullName?.message}
        <br />

        <label htmlFor="email">
          <FormattedMessage id="form.email" />
        </label>
        <input
          placeholder="johnsmith@email.com"
          type="email"
          {...register('email', {
            required: 'this is required',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
        />
        <br />
        {errors.email?.message}
        <br />

        <label htmlFor="phoneNumber">
          <FormattedMessage id="form.phone" />
        </label>
        <input
          placeholder="+370XXXXXXXX"
          {...register('phoneNumber', {
            required: formatMessage({ id: 'form.required' }),
            minLength: {
              value: 2,
              message: 'Min length is 2',
            },
          })}
        />
        <br />
        {errors.phoneNumber?.message}
        <br />

        <label htmlFor="dob">
          <FormattedMessage id="form.dob" />
        </label>
        <input
          type="date"
          {...register('dob', {
            required: formatMessage({ id: 'form.required' }),
          })}
        />
        <br />
        {errors.dob?.message}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default memo(FormHelp);
