import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { Controller, ControllerProps, Path, PathValue } from 'react-hook-form';

interface IDatePicker<T> {
  name: Path<T>;
  control: ControllerProps<T>['control'];
  isRequired?: boolean;
  defaultValue?: PathValue<T, Path<T>>;
  label: string;
  format?: string;
  fullWidth?: boolean;
}

export const DatePicker = <T extends Record<string, any>>({
  control,
  name,
  isRequired,
  defaultValue,
  label,
  format = 'MM/dd/yyyy',
  fullWidth,
}: IDatePicker<T>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <DesktopDatePicker
            label={label}
            inputFormat={format}
            value={value}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                required={isRequired}
                {...params}
                error={invalid}
                helperText={invalid ? error?.message : null}
                variant="standard"
                fullWidth={fullWidth}
                color="primary"
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};
