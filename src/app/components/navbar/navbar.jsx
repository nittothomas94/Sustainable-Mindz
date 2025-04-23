const Navbar = () => {
  return (
    <div className="bg-[url(/images/nav-bg.jpg)] flex items-center justify-between bg-top relative h-24 md:h-30 px-2 md:px-10 lg:justify-center lg:gap-140">
      <div className="w-fit md:w-[246px]">
        <img
          src="/images/logo.png"
          alt="logo of the site"
          className="w-25 h-10 md:w-30"
        />
      </div>
      <button className="w-fit p-2 h-9 text-black rounded-[10px] md:w-[214px] md:h-[45px] md:rounded-[22.5px] bg-white">
        Request Proposals
      </button>
    </div>
  );
};

export default Navbar;
