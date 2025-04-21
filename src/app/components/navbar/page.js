export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-purple-100 relative h-40">
      <div className="md:w-[246px] md:h-[87px] absolute top-[40px] left-[120px] ">
        <img src="/logo.png" alt="logo of the site" />
      </div>
      <div>
        <button className="w-30 h-10 md:w-[214px] md:h-[45px] rounded-[22.5px] bg-white absolute md:top-[61px] md:left-[1106px]">
          Request Proposals
        </button>
      </div>
    </div>
  );
}
