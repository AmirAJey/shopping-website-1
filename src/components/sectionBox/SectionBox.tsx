import { SectionBoxProps } from "./SectionBox.types";

const SectionBox = ({
  fullWidth = false,
  title,
  children,
}: SectionBoxProps) => {
  return (
    <div className={`${fullWidth ? "" : "py-10 px-20"}`}>
      {title ? (
        <h1 className="font-extrabold text-2xl poppins-font relative z-0 max-w-max mb-6">
          {title}
          <img
            src="assets/vector.png"
            alt="vector"
            className="w-20 absolute -z-10 right-0 bottom-0"
          />
        </h1>
      ) : null}
      {children}
    </div>
  );
};

export default SectionBox;
