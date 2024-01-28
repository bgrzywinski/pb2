import { FC, ForwardedRef, forwardRef } from "react";
import { ChangeHandler, FieldError } from "react-hook-form";
interface FormInputProps {
  label: string;
  error?: FieldError;
  value?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  className?: string;
}
const FormInput: FC<FormInputProps & { ref: ForwardedRef<HTMLInputElement> }> =
  forwardRef(
    (
      {
        label,
        name,
        className,
        error,
        onChange,
        onBlur,
        value,
      }: FormInputProps,
      ref,
    ) => {
      return (
        <div className="px-6 2xl:text-13 text-10 py-1">
          <label htmlFor={name} className="font-semibold text-white">
            {label}
          </label>
          <input
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            name={name}
            className={className}
          />
          {error && <p className="text-red-500">{error.message}</p>}
        </div>
      );
    },
  );
export default FormInput;
