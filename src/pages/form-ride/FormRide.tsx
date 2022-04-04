import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CheckboxField } from '../../ui/form/Checkbox';
import { TextField } from '../../ui/form/TextField';
import { rideValidationSchema, TRideForm } from './validation';

export const FormRide = () => {
  const { control, handleSubmit } = useForm<TRideForm>({
    mode: 'onSubmit',
    resolver: yupResolver(rideValidationSchema),
  });
  const onSubmit: SubmitHandler<TRideForm> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="center" width="100%" p={5}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h3">Can give a ride</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">Fill out the form and our volunteers will contact you.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Personal Info</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField<TRideForm>
              control={control}
              name="nameAndSurname"
              label="Name and surname"
              fullWidth
              isRequired
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField<TRideForm> control={control} name="email" label="Email" fullWidth isRequired />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField<TRideForm> control={control} name="phoneNo" label="Phone Number" fullWidth isRequired />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField<TRideForm> control={control} name="city" label="City" fullWidth isRequired />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Vehicle information</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField<TRideForm>
              control={control}
              name="carMakeModel"
              label="Car make and model"
              fullWidth
              isRequired
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField<TRideForm>
              control={control}
              name="numberOfPassengers"
              label="Passengers number"
              fullWidth
              isRequired
            />
          </Grid>
          <Grid item xs={12}>
            <TextField<TRideForm>
              control={control}
              name="extraInfo"
              label="Additional information"
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12} container direction="column">
            <CheckboxField<TRideForm>
              control={control}
              label="This is not the first time I have filled out this form"
              name="notFirstForm"
            />
            <CheckboxField<TRideForm>
              control={control}
              label="I agree to be contacted when the need arises"
              name="permissionContact"
            />
            <CheckboxField<TRideForm>
              control={control}
              label="I have read and agree to abide by the volunteer rules"
              name="permissionVoluntaryRules"
            />
            <CheckboxField<TRideForm> control={control} label="I agree to the privacy policy" name="privacyPolicy" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default memo(FormRide);
