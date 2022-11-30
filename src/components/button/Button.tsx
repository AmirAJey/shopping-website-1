import { ButtonProps } from "./Button.types";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  ...rest
}: ButtonProps) => {
  const style =
    variant === "primary"
      ? "bg-btn-light-primary text-btn-light-primary"
      : "bg-btn-light-secondary text-btn-light-secondary";

  const btnSize =
    size === "sm"
      ? "text-sm px-3 py-2"
      : size === "md"
      ? "text-md px-4 py-3"
      : "text-lg px-10 py-5";
  return (
    <button
      className={`${btnSize} rounded-md border-none outline-none ${style}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
