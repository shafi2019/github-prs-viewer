import "../styles/global.css";

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="error-message">❌ Error: {message}</div>;
};

export default ErrorMessage;
