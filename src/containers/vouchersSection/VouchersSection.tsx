import React from "react";
import { Button, MobileDemo, SectionBox } from "../../components";
import { downloadButtons } from "../../data/dummy";
import { CircleProps, FloatProps } from "./VouchersSection.types";

const Center = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    {children}
  </div>
);

const Float = ({ children, className }: FloatProps) => (
  <div className={`absolute ${className}`}>{children}</div>
);

const Circle = ({
  variant = "fill",
  color = "#EFECEB",
  size = 20,
}: CircleProps) => (
  <div
    className="rounded-full"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: variant === "fill" ? color : undefined,
      border: variant === "outline" ? `2px solid ${color}` : undefined,
    }}
  />
);

const LeftSide = () => (
  <div className="grid place-items-center w-full h-full">
    <div className="flex flex-col gap-5">
      <h1 className="poppins-font text-4xl">DOWNLOAD APP & GET THE VOUCHER!</h1>
      <p className="text-gray-500">
        Get 30% off for first transaction using Rondovision mobile app for now.
      </p>
      <div className="flex items-center gap-10">
        {downloadButtons.map((btn) => (
          <Button variant="secondary" size="sm">
            <div className="flex items-center gap-1 min-w-[140px]">
              <img src={btn.imageSrc} alt={btn.title} className="w-8" />
              <div className="text-start">
                <h6 className="text-sm font-thin text-gray-500">
                  {btn.subtitle}
                </h6>
                <h4 className="text-lg -mt-1">{btn.title}</h4>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  </div>
);

const VouchersSection = () => {
  return (
    <SectionBox>
      <div className="flex h-screen">
        <div className="w-1/2 h-full">
          <LeftSide />
        </div>
        <div className="w-1/2 h-full relative">
          <Center>
            <Circle variant="outline" size={300} />
          </Center>
          <Center>
            <Circle variant="outline" size={370} />
          </Center>
          <Center>
            <Circle variant="outline" size={440} />
          </Center>
          <Float className="top-20 right-20">
            <Circle variant="fill" size={30} color="#EBD96B" />
          </Float>
          <Float className="left-20 bottom-20">
            <Circle variant="fill" size={20} color="#EBD96B" />
          </Float>
          <Float className="left-28 top-28">
            <Circle variant="fill" size={15} color="#89807A" />
          </Float>
          <Float className="right-28 bottom-28">
            <Circle variant="fill" size={10} color="#89807A" />
          </Float>
          <Center>
            <MobileDemo />
          </Center>
        </div>
      </div>
    </SectionBox>
  );
};

export default VouchersSection;
