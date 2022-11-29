import { Button, SectionBox, Star } from "../../components";
import { FloatStarProps, WordProps } from "./Header.types";

const FloatStar = ({ top, left, right, bottom }: FloatStarProps) => (
  <div
    style={{
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      bottom: `${bottom}px`,
      right: `${right}px`,
    }}
  >
    <Star />
  </div>
);

const Word = ({
  content,
  hasShape = false,
  shapeColor = "gary",
}: WordProps) => (
  <h1 className="text-6xl text-black font-extrabold relative z-0 max-w-max hero-title">
    {content}
    {hasShape && (
      <span
        style={{ backgroundColor: shapeColor }}
        className="absolute -inset-1 -skew-y-2 -z-10 w-[130%]"
      />
    )}
  </h1>
);

const LeftSide = () => (
  <div className="w-[40%] flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <Word content="LET'S" hasShape shapeColor="#fff" />
      <Word content="EXPLORE" />
      <Word content="UNIQUE" hasShape shapeColor="#EBD96B" />
      <Word content="CLOTHES." />
    </div>
    <p className="">Live for Influential and Innovative fashion!</p>
    <div className="flex gap-5 items-center">
      <img src="assets/vector.png" alt="vector" className="w-28" />
      <Button variant="secondary">Shop Now</Button>
    </div>
  </div>
);

const RightSide = () => (
  <div className="flex-1 flex justify-center relative">
    <img src="assets/hero.png" alt="hero" className="w-3/4" />
    <FloatStar top={20} left={30} />
    <FloatStar bottom={40} left={70} />
    <FloatStar top={40} right={120} />
    <FloatStar bottom={70} right={70} />
  </div>
);

const Header = () => {
  return (
    <SectionBox>
      <div className="flex items-center bg-main-light-secondary w-full h-full rounded-3xl px-10 pl-14">
        <LeftSide />
        <RightSide />
      </div>
    </SectionBox>
  );
};

export default Header;
