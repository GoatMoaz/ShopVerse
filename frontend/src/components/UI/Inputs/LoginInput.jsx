const LoginInput = ({
  label,
  type,
  id,
  name,
  onBlur,
  onChange,
  validate,
  error,
  errorMessage,
}) => {
  const input = validate ? (
    <input
      type={type}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required
      className={`mt-1 w-full py-2 px-2 rounded-md border-gray-200 border-2 bg-white text-sm text-gray-700 shadow-md ${
        error ? "border-red-500" : ""
      }`}
    />
  ) : (
    <input
      type={type}
      id={id}
      name={name}
      required
      className="mt-1 w-full py-2 px-2 rounded-md border-gray-200 border-2 bg-white text-sm text-gray-700 shadow-md"
    />
  );

  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {!validate ? "" : <span className="text-red-500 text-lg">* </span>}
        {label}
      </label>
      {input}
      {error && (
        <p className="text-red-500 text-[12px] mt-1 font-medium">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default LoginInput;
