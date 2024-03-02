import { ComponentProps } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const TextFieldWithValidation = ({
  inputProps,
  label,
  errorMessage,
  shouldDisplayError,
}: {
  inputProps: ComponentProps<"input">;
  label: string;
  errorMessage: string;
  shouldDisplayError: boolean;
}) => {
  return (
    <div className="text-field">
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor={label}>{label}:</label>
        <input className="contact__form-input" {...inputProps} id={label}/>
      </div>
      <ErrorMessage message={errorMessage} show={shouldDisplayError} />
    </div>
  );
};