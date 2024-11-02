import { FC, InputHTMLAttributes } from "react";

interface ILabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const LabelInput: FC<ILabelInputProps> = ({ label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor="name" className="block text-gray-100 font-semibold mb-2">
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </div>
  );
};

export default LabelInput;
