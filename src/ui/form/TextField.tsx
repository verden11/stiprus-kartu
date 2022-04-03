import React from 'react';
import { TextFieldProps, TextField as MuiTextField } from '@mui/material';
import { Controller, ControllerProps, Path, PathValue } from 'react-hook-form';
import { InputType } from 'zlib';

interface Props<T> {
  name: Path<T>;
  disabled?: boolean;
  control: ControllerProps<T>['control'];
  defaultValue?: PathValue<T, Path<T>>;
  noMarginBottom?: boolean;
  isRequired?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  type?: InputType;
  onChanged?(val: string): void;
}

const TextFieldComponent = <T extends Record<string, any>>({
  name,
  control,
  onChanged,
  textAlign,
  defaultValue,
  noMarginBottom = false,
  type = 'text',
  disabled = false,
  isRequired = false,
  ...props
}: Props<T> & Omit<TextFieldProps, 'error' | 'onChange'>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      defaultValue={defaultValue ?? ('' as any)}
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

  function handleControlledChange(saveValue: (event: React.ChangeEvent<{ value: string }>) => void) {
    return (event: React.ChangeEvent<{ value: string }>) => {
      saveValue(event);
      onChanged && onChanged(event.target.value);
    };
  }
};

const genericMemo: <T>(component: T) => T = React.memo;

export const TextField = genericMemo(TextFieldComponent);
