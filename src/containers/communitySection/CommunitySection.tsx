import { Button, SectionBox } from "../../components";

const Input = () => (
  <div className="flex items-center p-2 bg-white rounded-md">
    <input
      type="text"
      className="flex-1 text-lg w-full border-none outline-none"
      placeholder="Add your email here"
    />
    <Button variant="secondary">SEND</Button>
  </div>
);

const CommunitySection = () => {
  return (
    <SectionBox fullWidth>
      <div className="flex flex-col items-center justify-center gap-5 bg-[#E5C643] p-14">
        <h1 className="poppins-font text-4xl text-white">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <h3 className="text-white text-lg">
          Type your email down below and be young wild generation
        </h3>
        <div className="w-96">
          <Input />
        </div>
      </div>
    </SectionBox>
  );
};

export default CommunitySection;
