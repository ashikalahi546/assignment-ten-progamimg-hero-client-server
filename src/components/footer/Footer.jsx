import { BiPhone } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-black lg:h-80 mt-7 w-full py-10">
      <div className="lg:container mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:px-0 px-5 gap-5  text-white">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-medium">
            Tr<span className="text-pink-500">ave</span>lers
          </h3>
          <p className="leading-7">
            At Wanderrie, we believe that every journey is an opportunity for
            adventure, discovery, and connection.
          </p>

          <ul className="flex gap-4">
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-medium text-2xl">Contact</h2>

          <div>
            <div className="flex items-center  gap-1 text-base">
              <BiPhone />
              <p>+99 999-9999</p>
            </div>
            <div className="flex items-center  gap-1 text-base mt-3">
              <GrMail />
              <p>exumple@ 2002.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-medium text-2xl">Social Media</h2>

          <div>
            <div className="flex items-center  gap-1.5 text-base">
              <FaFacebook />
              <p>Facebook</p>
            </div>
            <div className="flex items-center  gap-1.5 text-base my-3">
              <IoLogoLinkedin />

              <p>Linkedin</p>
            </div>
            <div className="flex items-center  text-base gap-1.5  ">
              <BsTwitter />

              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-lg mt-4 lg:px-0 px-5 leading-8">Copyright @2024 Tr<span className="text-pink-500">ave</span>lers. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
