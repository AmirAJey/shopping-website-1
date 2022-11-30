import { Button, SectionBox, Star, Word } from "../../components";

const BannerSection = () => {
  return (
    <SectionBox fullWidth>
      <div className="bg-[#E0C340] flex">
        <div className="h-screen relative">
          <img src="assets/banner.png" alt="banner" className="h-full" />
          <div className="opacity-70">
            <Star top={60} left={60} hasRotate size="lg" />
          </div>
          <div className="opacity-70">
            <Star top={320} left={100} hasRotate size="lg" />
          </div>
          <div className="opacity-70">
            <Star top={40} right={100} hasRotate size="lg" />
          </div>
          <div className="opacity-70">
            <Star bottom={140} right={70} hasRotate size="lg" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5 px-10">
          <Word
            content="payday"
            hasShape
            shapeColor="white"
            shapeOptions={{ extraWidth: false }}
          />
          <Word content="sale now" />
          <p className="text-2xl font-semibold">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <div className="">
            <p className="text-3xl font-black">1 June - 10 June 2021</p>
            <p className="text-2xl">*Terms & Conditions apply</p>
          </div>
          <div className="self-start">
            <Button variant="secondary" size="lg">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
    </SectionBox>
  );
};

export default BannerSection;
