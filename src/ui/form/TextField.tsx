import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React, { memo } from 'react';
import { Controller, ControllerProps, Path, PathValue } from 'react-hook-form';

interface ITextFieldComponent<T> {
  name: Path<T>;
  disabled?: boolean;
  control: ControllerProps<T>['control'];
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
  const handleControlledChange = (saveValue: (event: React.ChangeEvent<{ value: string }>) => void) => {
    return (event: React.ChangeEvent<{ value: string }>) => {
      saveValue(event);
      onChanged && onChanged(event.target.value);
    };
  };

  return (
    <Controller<T>
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: isRequired }}
      render={({ field, fieldState: { error } }) => (
        <MuiTextField
          type={type}
          error={!!error}
          required={isRequired}
          helperText={error?.message}
          disabled={disabled}
          {...field}
          {...props}
          onChange={handleControlledChange(field.onChange)}
        />
      )}
    />
  );
};

const genericMemo: <T>(component: T) => T = memo;
export const TextField = genericMemo(TextFieldComponent);
