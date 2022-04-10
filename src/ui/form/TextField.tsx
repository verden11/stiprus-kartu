import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React, { useCallback } from 'react';
import { Controller, ControllerProps, Path, PathValue } from 'react-hook-form';
import { genericMemo } from './generic';

interface ITextFieldComponent<T> {
  name: Path<T>;
  control: ControllerProps<T>['control'];
  disabled?: boolean;
  defaultValue?: PathValue<T, Path<T>>;
  isRequired?: boolean;
  type?: string;
  onChanged?: (val: string) => void;
}

const TextFieldComponent = <T extends Record<string, any>>({
  name,
  control,
  onChanged,
  defaultValue,
  type = 'text',
  disabled = false,
  isRequired = false,
  ...props
}: ITextFieldComponent<T> & Omit<TextFieldProps, 'error' | 'onChange'>) => {
  const handleControlledChange = useCallback(
    (saveValue: (event: React.ChangeEvent<{ value: string }>) => void) =>
      (event: React.ChangeEvent<{ value: string }>) => {
        saveValue(event);
        onChanged?.(event.target.value);
      },
    [onChanged],
  );

  return (
    <Controller<T>
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: isRequired }}
      render={({ field, fieldState: { error } }) => {
        const { value, ...fieldProps } = field;
        return (
          <MuiTextField
            type={type}
            error={!!error}
            required={isRequired}
            helperText={error?.message}
            disabled={disabled}
            {...fieldProps}
            {...props}
            onChange={handleControlledChange(field.onChange)}
          />
        );
      }}
    />
  );
};

export const TextField = genericMemo(TextFieldComponent);
