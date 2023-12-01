export function InputField({
  type,
  placeholder,
  tabIndex,
  name,
  value,
  setValue,
  className,
}: {
  type: string;
  placeholder: string;
  tabIndex: number;
  name: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
}) {
  return (
    <input
      required
      id={name}
      type={type}
      placeholder={placeholder}
      tabIndex={tabIndex}
      className={`p-2 border-b border-blue-100 rounded-sm ${className}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
