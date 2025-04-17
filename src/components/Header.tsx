import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearch, LuShoppingBag } from "react-icons/lu";
import PlantsTypeDropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="container flex justify-between py-3">
      <div className="cursor-pointer flex gap-3 hover:brightness-50 duration-150">
        <img className="w-12" src="/planto.png" alt="planto" />
        <p className="text-white font-black text-3xl font-inter flex items-end">
          Planto.
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-white flex gap-16 text-2xl font-inter">
          <a href="#" className="hover:text-green-900 duration-150">
            Home
          </a>
          <PlantsTypeDropdown />
          <a href="#" className="hover:text-green-900 duration-150">
            More
          </a>
          <a href="#" className="hover:text-green-900 duration-150">
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <LuSearch className="text-white text-[26px] cursor-pointer hover:text-green-900 duration-150" />
        <LuShoppingBag className="text-white text-[26px] cursor-pointer hover:text-green-900 duration-150" />
        <HiMenuAlt3 className="text-white text-[26px] cursor-pointer hover:text-green-900 duration-150" />
      </div>
    </div>
  );
};

export default Header;
