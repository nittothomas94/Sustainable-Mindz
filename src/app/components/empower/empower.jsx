import Navbar from '../navbar/navbar';

export default function EmpowerHome({ paragraph, butText }) {
  return (
    <div className="bg-[url(/images/purple-bg.png)] h-112 relative md:h-150 lg:h-160">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-5 mt-5">
        <p className="text-[20px] w-fit px-2 text-black md:w-[50%] font-bold text-center md:font-bold md:text-[25px] lg:text-[38px] lg:w-[838px]">
          {paragraph}
        </p>

        <button className="w-fit h-10 bg-white rounded-2xl px-[15px] font-bold  m-auto">
          {butText}
        </button>

        <img
          src="/images/system.png"
          alt="Sysytem image"
          className="w-[301px] h-[272px] absolute top-75 md:w-[380px] md:h-[320px] md:top-102 lg:w-[470px] lg:h-[450px] lg:top-99"
        />
      </div>
    </div>
  );
}
