import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearch, LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-slate-600 flex justify-between px-10 py-3">
      <div className="flex items-center gap-3">
        <img className="w-12 h-12" src="/planto.png" alt="planto" />
        <p className="text-white font-black text-xl font-inter">Planto.</p>
      </div>
      <div className="flex items-center">
        <ul className="text-white flex gap-12 text-2xl font-inter">
          <li>Home</li>
          <li>Plants Type</li>
          <li>More</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <LuSearch className="text-white text-[26px]" />
        <LuShoppingBag className="text-white text-[26px]" />
        <HiMenuAlt3 className="text-white text-[26px]" />
      </div>
    </div>
  );
};

export default Header;
