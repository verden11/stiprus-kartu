import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { SelectField } from '../../ui/form/SelectField';
import { TextField } from '../../ui/form/TextField';
import { helpValidationSchema, THelpForm, Gender, Nationality } from '../form-ride/validation';

export const FormHelp = () => {
  const { formatMessage } = useIntl();

  const { control, handleSubmit } = useForm<THelpForm>({
    mode: 'onSubmit',
    resolver: yupResolver(helpValidationSchema),
  });

  const onSubmit: SubmitHandler<THelpForm> = data => {
    fetch(`${import.meta.env.VITE_HELP_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <Box display="flex" justifyContent="center" width="100%" p={5}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col py-6">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4">
              <FormattedMessage id="temporaryHome" />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <FormattedMessage id="fillTheForm" />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <FormattedMessage id="personalInfo" />
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField<THelpForm>
              control={control}
              name="full-name"
              label={formatMessage({ id: 'form.fullName' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField<THelpForm>
              control={control}
              placeholder="johnsmith@email.com"
              type="email"
              name="email"
              label={formatMessage({ id: 'form.email' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField<THelpForm>
              control={control}
              name="phone"
              label={formatMessage({ id: 'form.phone' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField<THelpForm>
              control={control}
              name="birth-date"
              type="date"
              label={formatMessage({ id: 'form.dob' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <SelectField<THelpForm>
              options={Object.values(Gender).map(val => ({ label: val, value: val }))}
              control={control}
              name="gender"
              label={formatMessage({ id: 'form.sex' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <SelectField<THelpForm>
              options={Object.values(Nationality).map(val => ({ label: val, value: val }))}
              control={control}
              name="citizenship"
              label={formatMessage({ id: 'form.nationality' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="outlined" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default memo(FormHelp);
