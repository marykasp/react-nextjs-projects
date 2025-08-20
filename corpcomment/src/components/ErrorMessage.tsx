type MessageProps = { message: string };

const ErrorMessage = ({ message }: MessageProps) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
