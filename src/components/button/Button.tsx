import { ButtonProps } from "./Button.types";

const Button = ({ variant = "primary", children, ...rest }: ButtonProps) => {
  const style =
    variant === "primary"
      ? "bg-btn-light-primary text-btn-light-primary"
      : "bg-btn-light-secondary text-btn-light-secondary";
  return (
    <button className={`px-3 py-2 rounded-md border-none outline-none ${style}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
