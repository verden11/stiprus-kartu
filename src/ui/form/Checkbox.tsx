import { Box, Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import React from 'react';
import { Controller, ControllerProps, Path, PathValue, UnpackNestedValue } from 'react-hook-form';
import { genericMemo } from './generick';

interface Props<T> {
  name: Path<T>;
  control: ControllerProps<T>['control'];
  isRequired?: boolean;
  flex?: number;
  label: string;
  disabled?: boolean;
  color?: CheckboxProps['color'];
  defaultValue?: UnpackNestedValue<PathValue<T, Path<T>>>;
  onChanged?(value: boolean): void;
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
}: Props<T>) => {
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

  function handleChange(saveValue: (event: React.ChangeEvent<HTMLInputElement>) => void) {
    return (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      saveValue(event);
      onChanged && onChanged(checked);
    };
  }
};

export const CheckboxField = genericMemo(CheckboxFieldComponent);
