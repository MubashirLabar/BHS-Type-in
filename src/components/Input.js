function Input({ type = "text", className, isError, ...rest }) {
  return (
    <input
      type={type}
      className={`input ${
        isError
          ? "!border-red-600 focus:!ring-red-600 focus:!ring-opacity-20"
          : ""
      } ${className}`}
      {...rest}
    />
  );
}

export default Input;
