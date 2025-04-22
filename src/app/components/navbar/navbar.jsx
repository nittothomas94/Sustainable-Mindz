const Navbar = () => {
  return (
    <div className="bg-[url(/images/nav-bg.jpg)] flex items-center justify-between bg-top relative h-24 md:h-30 px-2 md:px-0">
      <div className="w-fit md:w-[246px] md:h-[87px] md:absolute top-[40px] left-[120px] ">
        <img
          src="/images/logo.png"
          alt="logo of the site"
          className="w-25 h-10 md:w-30"
        />
      </div>
      <button className="w-fit p-2 h-9 text-black rounded-[10px] md:w-[214px] md:h-[45px] md:rounded-[22.5px] bg-white md:absolute right-0 top-8 md:top-[41px] md:left-[1106px]">
        Request Proposals
      </button>
    </div>
  );
};

export default Navbar;
