import { TypeInput } from "components/types/input.types";

const input = ({
  type,
  placeholder,
  name,
  label,
  onChange,
  required = false,
}: TypeInput): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-1">
      <label>
        <span className="text-2">{label}:</span>
      </label>

      <input
        required={required}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        className="w-33 h-[3.8rem] sm:w-53 sm:h-9 rounded-full text-black border border-black active:border-white px-4"
      ></input>
    </div>
  );
};

export default input;
