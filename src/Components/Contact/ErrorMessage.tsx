export const emailErrorMessage =
  "Please enter an email address";
export const nameErrorMessage =
  "Please enter your name";
export const contactErrorMessage =
  "Please enter a message for me";

export const ErrorMessage = ({
  message,
  show,
}: {
  message: string;
  show: boolean;
}) => {
  const errorDiv = show ? (
    <div className="error-message">
      {message}
    </div>
  ) : (
    <></>
  );

  return errorDiv;
};
