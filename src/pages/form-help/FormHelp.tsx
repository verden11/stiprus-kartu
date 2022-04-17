import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { CheckboxField } from '../../ui/form/Checkbox';
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
    <Box display="flex" p={5}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col py-6">
        <Grid container spacing={2} justifyContent="left">
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
              // isRequired
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
            <TextField<THelpForm>
              control={control}
              name="address-ukraine"
              label={formatMessage({ id: 'form.addressUA' })}
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
            <Typography>
              <FormattedMessage id="form.help.people" />
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField<THelpForm>
              control={control}
              type="number"
              name="number-of-people"
              inputProps={{ min: 1 }}
              label={formatMessage({ id: 'form.help.number' })}
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField<THelpForm>
              control={control}
              name="each-persons-age"
              label={formatMessage({ id: 'form.help.age' })}
              placeholder="XX,XX,XX,X..."
              fullWidth
              isRequired
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <FormattedMessage id="form.help.situation" />
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <SelectField<THelpForm>
                  options={Object.values(Nationality).map(val => ({ label: val, value: val }))}
                  control={control}
                  name="livingLocation"
                  label={formatMessage({ id: 'form.help.currentCountry' })}
                  fullWidth
                  isRequired
                />
              </Grid>
              <Grid item>
                <CheckboxField<THelpForm>
                  control={control}
                  label="I have friends / relatives in Lithuania"
                  name="hasRelatives"
                />
                <CheckboxField<THelpForm> control={control} label="I need food, clothes, medicine" name="needFood" />
                <CheckboxField<THelpForm>
                  control={control}
                  label="I need a ride from the Lithuania-Poland border"
                  name="needRide"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography>I speak the following languages:</Typography>
              </Grid>
              <Grid item>
                <CheckboxField<THelpForm> control={control} label="Lithuanian" name="knowsLithuanian" />
                <CheckboxField<THelpForm> control={control} label="Ukrainian" name="knowsUkrainian" />
                <CheckboxField<THelpForm> control={control} label="English" name="knowsEnglish" />
                <CheckboxField<THelpForm> control={control} label="Russian" name="knowsRussian" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField<THelpForm>
              control={control}
              name="additional-info"
              label={formatMessage({ id: 'additionalInfo' })}
              placeholder="Is there anything else we can help you with?"
              fullWidth
              multiline
              minRows={3}
              isRequired
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid item>
              <CheckboxField<THelpForm>
                control={control}
                label="I've filled out this form before"
                name="hasFilledBefore"
              />
              <CheckboxField<THelpForm>
                control={control}
                label={
                  <p>
                    I agree with{' '}
                    <Link to="/" className="text-teal-800 hover:underline">
                      the privacy policy
                    </Link>
                    <span className="text-red-500">*</span>
                  </p>
                }
                name="hasAcceptedTerms"
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="outlined" color="primary">
              <FormattedMessage id="register" />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default memo(FormHelp);
