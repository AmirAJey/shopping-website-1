import { CardProps } from "./Card.types";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ imageSrc, title, destination }: CardProps) => {
  return (
    <a
      href={destination}
      className="
      shadow-none scale-100 rounded-md
      hover:shadow-2xl hover:scale-105 origin-center
      transition duration-300 group
      "
    >
      <img src={imageSrc} alt={title} className="flex-1 object-cover" />
      <div className="flex items-center justify-between mt-5 px-0 group-hover:px-3 transition-all duration-300">
        <div className="">
          <h3 className="text-lg font-extrabold">{title}</h3>
          <p className="text-gray-500 text-sm">Explore Now!</p>
        </div>
        <div className="text-lg text-gray-500">
          <BsArrowRight />
        </div>
      </div>
    </a>
  );
};

export default Card;
