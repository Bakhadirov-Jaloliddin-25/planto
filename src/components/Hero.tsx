import { BsPlayCircle } from "react-icons/bs";
import alena from "../assets/images/alena.png";
import stars from "../assets/images/4-5stars.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className=" mt-20 mb-60">
          <div className="flex flex-col justify-center relative">
            <p className="font-inter font-semibold text-[118px] mb-14">
              Breath Natureal
            </p>
            <p className="font-inter font-medium text-[23px] w-[893px] absolute top-38">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-9">
            <button className="font-inter text-[28px] font-normal px-15 py-2 border border-white rounded-md hover:bg-white hover:text-[#1E261B] duration-150 cursor-pointer">
              Explore
            </button>
            <button className="flex justify-center items-center gap-4 hover:text-gray-400 cursor-pointer duration-150">
              <BsPlayCircle className="text-6xl" />
              <p className="font-normal text-xl">Live Demo...</p>
            </button>
          </div>
        </div>
        <div className="w-96 p-11 border border-gray-500 backdrop-blur-md rounded-[45px] flex flex-col gap-[22px]">
          <div className="flex gap-7">
            <img src={alena} alt="alena.png" />
            <div className="flex flex-col">
              <p className="text-[22px]">Alena Patel</p>
              <img src={stars} alt="stars.png" />
            </div>
          </div>
          <p className="w-[341px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
