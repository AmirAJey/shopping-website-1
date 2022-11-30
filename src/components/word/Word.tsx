import { WordProps } from "./Word.types";

const Word = ({
  content,
  hasShape = false,
  shapeColor = "gary",
  shapeOptions = {extraWidth: true}
}: WordProps) => (
  <h1 className="text-6xl text-black font-extrabold relative z-0 max-w-max poppins-font uppercase">
    {content}
    {hasShape && (
      <span
        style={{ backgroundColor: shapeColor }}
        className={`absolute -inset-1 -skew-y-2 -z-10 ${shapeOptions.extraWidth ? 'w-[130%]' : ''}`}
      />
    )}
  </h1>
);

export default Word;
