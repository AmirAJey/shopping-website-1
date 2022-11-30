import React from "react";
import { SectionBox } from "../../components";
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {AiOutlineTwitter} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import { footerLinks } from "../../data/dummy";

const IconButton = ({icon}: {icon: React.ReactNode}) => (
  <button className="bg-main-light-third text-black rounded-lg p-2">
    {icon}
  </button>
)

const FooterSection = () => {
  return (
    <SectionBox fullWidth>
      <div className="flex p-20 bg-black text-gray-500">
        <div className="flex-[3]">
          <div className="flex flex-col gap-4">
            <h2 className="poppins-font text-white text-3xl">FASHION</h2>
            <p className="gray">
              Complete your style with awesome clothes from us.
            </p>
            <div className="flex gap-3">
              <IconButton icon={<FaFacebookF />} />
              <IconButton icon={<FiInstagram />} />
              <IconButton icon={<AiOutlineTwitter />} />
              <IconButton icon={<GrLinkedinOption />} />
            </div>
          </div>
        </div>
        {
          footerLinks.map(group => (
            <div className="flex-1 flex flex-col gap-2">
              <h4 className="text-gray-200">{group.title}</h4>
              {
                group.link.map(link => (
                  <a href={link.destination} className="text-gray-500">{link.label}</a>
                ))
              }
            </div>
          ))
        }
      </div>
    </SectionBox>
  );
};

export default FooterSection;
