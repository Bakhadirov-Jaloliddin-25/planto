const Footer = () => {
  return (
    <div className="bg-[#222C1D]">
      <div className="container py-11">
        <div className="flex flex-col pb-12">
          <div className="flex justify-between">
            <div className="flex flex-col gap-11">
              <div className="flex gap-3">
                <img className="w-20" src="/planto.png" alt="planto" />
                <p className="font-black text-5xl flex items-end cursor-default">
                  Planto.
                </p>
              </div>
              <div className="">
                <p className="w-[580px] text-[28px] font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-[28px] mb-10">Quick Link’s</p>
              <div className="flex flex-col gap-5 text-2xl font-medium">
                <p>Home</p>
                <p>Type’s Of plant’s</p>
                <p>Contact</p>
                <p>Privacy</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-[28px] mb-10">
                For Every Update.
              </p>
              <div className="flex justify-between border p-1 rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="indent-5 text-xl font-medium outline-none"
                />
                <button className="font-bold text-[20px] bg-white text-black px-3 py-3 rounded-lg cursor-pointer hover:bg-emerald-200 duration-150">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full flex gap-16 text-[28px] font-extrabold">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
          <div className="w-146 flex justify-start">
            <p className="text-2xl font-medium ">planto © all right reserve</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
