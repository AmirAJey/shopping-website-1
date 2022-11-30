import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiViewList } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { mobDemoCards } from "../../data/dummy";

const NavigationLink = ({
  icon,
  isActive = false,
  massages = 0,
}: {
  icon: React.ReactNode;
  isActive?: boolean;
  massages?: number;
}) => (
  <div
    className={`text-xl relative`}
    style={{
      color: isActive ? "rgb(235, 217, 107)" : "gray",
    }}
  >
    {icon}
    {massages > 0 && (
      <span
        style={{ lineHeight: 0 }}
        className="text-[8px] w-3 h-3 grid place-items-center bg-red-500 text-white absolute top-0 right-0 rounded-full translate-x-1/3 -translate-y-1/3 "
      >
        {massages}
      </span>
    )}
  </div>
);

const Navigation = () => (
  <div className="flex items-center justify-between py-3 border-t-2">
    <NavigationLink icon={<AiFillHome />} isActive />
    <NavigationLink icon={<HiViewList />} />
    <NavigationLink icon={<HiShoppingCart />} massages={1} />
    <NavigationLink icon={<BsFillPersonFill />} />
  </div>
);

const Screen = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute inset-3 bg-white rounded-2xl px-4 pt-5 flex flex-col">
    {children}
  </div>
);

const Header = () => (
  <div className="flex items-center justify-between">
    <div style={{ color: "rgb(235, 217, 107)" }} className="text-xl">
      <CgMenuGridR />
    </div>
    <img src="assets/mobDemo/profile.png" alt="" className="w-7 h-7" />
  </div>
);

const Title = () => (
  <h1 className="text-lg max-w-max font-extrabold relative z-0">
    Match your style
    <img
      src="assets/vector.png"
      alt=""
      className="w-14 absolute right-0 bottom-0 -z-10"
    />
  </h1>
);

const Search = () => (
  <div className="flex gap-2 bg-gray-200 text-sm py-1 px-2 rounded-md text-gray-400">
    <AiOutlineSearch />
    <p className="text-xs">Search</p>
  </div>
);

const FilterItem = ({
  isActive,
  label,
}: {
  isActive?: boolean;
  label: string;
}) => (
  <div
    className={`
    py-1 px-4 text-[10px] rounded-full
    ${isActive ? "bg-main-light-third text-black" : "bg-gray-200 text-gray-400"}
    `}
  >
    {label}
  </div>
);

const Filters = () => (
  <div className="flex items-center justify-between">
    <FilterItem label="Trending Now" isActive />
    <FilterItem label="All" />
    <FilterItem label="New" />
  </div>
);

const Card = ({
  imageSrc,
  title,
  subtitle,
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col gap-2">
    <img src={imageSrc} alt={title} className="w-full object-cover" />
    <h3 className="text-[10px] font-extrabold">{title}</h3>
    <p className="text-[10px] -mt-2 font-light text-gray-400 m-0">{subtitle}</p>
  </div>
);

const Grid = () => (
  <div className="grid grid-cols-2 gap-3">
    {mobDemoCards.map((card) => (
      <Card key={card.title} {...card} />
    ))}
  </div>
);

const Body = () => (
  <div className="flex-1 flex flex-col gap-3 overflow-hidden">
    <Header />
    <Title />
    <Search />
    <Filters />
    <Grid />
  </div>
);

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[260px] h-[500px] rounded-3xl relative bg-slate-400">
    {children}
  </div>
);

const MobileDemo = () => {
  return (
    <Frame>
      <Screen>
        <Body />
        <Navigation />
      </Screen>
    </Frame>
  );
};

export default MobileDemo;
