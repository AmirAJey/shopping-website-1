import { Button, SectionBox, Star, Word } from "../../components";

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
    <Star top={20} left={30} color="#E7E6E6" />
    <Star bottom={40} left={70} color="#E7E6E6" />
    <Star top={40} right={120} color="#E7E6E6" />
    <Star bottom={70} right={70} color="#E7E6E6" />
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
