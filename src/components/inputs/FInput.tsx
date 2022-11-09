type FInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  children?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const FInput: React.FC<FInputProps> = ({ name, type, children, placeholder, onChange, value }: FInputProps) => {
  return (
    <label className="input border border-black-lighter rounded flex" htmlFor={name}>
      {/* Icon */}
      {children ? children : null}
      <input
        className="w-full p-2 rounded"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default FInput;
