import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <div className="container">
      <p className="text-white font-inter font-semibold text-[118px]">
        Breath Natureal{" "}
      </p>
      <p className="text-white font-inter font-medium text-[23px] w-[893px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <button className="font-inter text-[28px] font-normal px-6 py-2 border border-white text-white rounded-md hover:border-gray-400 hover:text-gray-300 transition">
          Explore
        </button>

        <Button
          type="text"
          icon={
            <PlayCircleOutlined style={{ fontSize: "18px", color: "white" }} />
          }
          className="text-white hover:text-gray-300 hover:bg-transparent flex items-center gap-2"
        >
          Live Demo...
        </Button>
      </div>
    </div>
  );
};

export default Hero;
