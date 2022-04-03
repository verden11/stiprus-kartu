import { Grid, Button, Box } from '@mui/material';
import { memo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '../../ui/form/TextField';
import { CustomerForm, customerValidationSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';

export const FormAccommodation = () => {
  const { handleSubmit, control } = useForm<CustomerForm>({
    mode: 'onSubmit',
    resolver: yupResolver(customerValidationSchema),
  });

  const onSubmit: SubmitHandler<CustomerForm> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="center" width="100%" m={2}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField<CustomerForm> control={control} name="firstName" label="First Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField<CustomerForm> control={control} name="lastName" label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField<CustomerForm> control={control} name="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default memo(FormAccommodation);
