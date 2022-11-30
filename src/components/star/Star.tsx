import { StarProps } from "./Star.types";
import { IoMdStar } from "react-icons/io";

const Star = ({
  top,
  left,
  bottom,
  right,
  hasRotate,
  color = "#fff",
  size = 'md'
}: StarProps) => {
  const starSize = size === 'md' ? 'text-4xl' : 'text-5xl'
  return (
    <div
      className={`${starSize}`}
      style={{
        color,
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        bottom: `${bottom}px`,
        right: `${right}px`,
        ...(hasRotate && { transform: "rotate(30deg)" }),
      }}
    >
      <IoMdStar style={{fontSize: 'inherit'}} />
    </div>
  );
}

export default Star;
