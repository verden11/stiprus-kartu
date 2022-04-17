import { Box, Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import React, { ReactNode, useCallback } from 'react';
import { Controller, ControllerProps, Path, PathValue, UnpackNestedValue } from 'react-hook-form';
import { genericMemo } from './generic';

interface ICheckboxFieldComponent<T> {
  name: Path<T>;
  control: ControllerProps<T>['control'];
  isRequired?: boolean;
  flex?: number;
  label: ReactNode;
  disabled?: boolean;
  color?: CheckboxProps['color'];
  defaultValue?: UnpackNestedValue<PathValue<T, Path<T>>>;
  onChanged?: (value: boolean) => void;
}

const CheckboxFieldComponent = <T extends Record<string, any>>({
  control,
  label,
  onChanged,
  name,
  defaultValue,
  disabled = false,
  isRequired = false,
  color = 'primary',
  flex = 1,
}: ICheckboxFieldComponent<T>) => {
  const handleChange = useCallback(
    (saveValue: (event: React.ChangeEvent<HTMLInputElement>) => void) =>
      (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        saveValue(event);
        onChanged && onChanged(checked);
      },
    [onChanged],
  );
  return (
    <Box flex={flex}>
      <Controller<T>
        name={name}
        control={control}
        rules={{ required: isRequired }}
        defaultValue={defaultValue}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                color={color}
                {...field}
                checked={!!field.value}
                disabled={disabled}
                onChange={handleChange(field.onChange)}
              />
            }
            label={label}
          />
        )}
      />
    </Box>
  );
};

export const CheckboxField = genericMemo(CheckboxFieldComponent);
