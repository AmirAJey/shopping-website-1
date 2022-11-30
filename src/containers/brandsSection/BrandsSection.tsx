import { SectionBox } from "../../components";
import { brands } from "../../data/dummy";
import { BrandItemProps } from "./BrandsSection.types";

const BrandItem = ({ path, name }: BrandItemProps) => (
  <img src={path} alt={name} className="w-20" />
);

const BrandsSection = () => {
  return (
    <SectionBox fullWidth>
      <div className="flex items-center justify-evenly bg-main-light-third py-2">
        {brands.map((brand) => (
          <BrandItem key={brand.name} {...brand} />
        ))}
      </div>
    </SectionBox>
  );
};

export default BrandsSection;
