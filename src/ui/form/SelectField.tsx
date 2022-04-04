import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { ReactNode } from 'react';
import { Controller, ControllerProps, Path, PathValue, UnpackNestedValue } from 'react-hook-form';
import { genericMemo } from './generic';

interface SelectOption<T = string> {
  label: ReactNode;
  value: T;
}

interface ISelectFieldComponent<T> {
  name: Path<T>;
  control?: ControllerProps<T>['control'];
  value?: UnpackNestedValue<PathValue<T, Path<T>>>;
  defaultValue?: UnpackNestedValue<PathValue<T, Path<T>>>;
  disabled?: boolean;
  isRequired?: boolean;
  label: string;
  options: SelectOption[];
  onChanged?(value: string): void;
}

const SelectFieldComponent = <T extends Record<string, any>>({
  name,
  control,
  label,
  options,
  onChanged,
  defaultValue,
  disabled = false,
  isRequired = false,
}: ISelectFieldComponent<T>) => {
  return (
    <Box flex={1} display="flex" marginRight={1}>
      <Controller<T>
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: isRequired }}
        render={({ field, fieldState: { error } }) => (
          <FormControl sx={{ width: '100%', flex: 1 }}>
            <InputLabel classes={{ shrink: 'shrink' }} required={isRequired} error={!!error}>
              {label}
            </InputLabel>

            <Select
              {...field}
              id={name}
              label={label}
              name={name}
              error={!!error}
              fullWidth
              disabled={disabled}
              required={isRequired}
              onChange={field.onChange}
              sx={{ minHeight: 36, whiteSpace: 'normal' }}
            >
              {options.map(({ label, value }) => (
                <MenuItem key={value} value={value} sx={{ maxWidth: 300 }}>
                  {label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!error}>{error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </Box>
  );
};

export const SelectField = genericMemo(SelectFieldComponent);

export const EMPTY_STR_OPTION: SelectOption = { label: '', value: '' };
