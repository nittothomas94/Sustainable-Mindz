import Navbar from '../navbar/navbar';

export default function EmpowerHome({ paragraph, butText }) {
  return (
    <div className="bg-[url(/images/purple-bg.png)] h-112 relative md:h-150">
      <Navbar />
      <div className="border flex flex-col items-center justify-center gap-5 mt-5">
        <p className="text-[20px] w-fit  md:w-[50%] font-bold border text-center md:font-bold md:text-[42px]">
          {paragraph}
        </p>

        <button className="w-fit h-10 bg-white rounded-2xl px-[15px] font-bold  m-auto">
          {butText}
        </button>

        <img
          src="/images/system.png"
          alt="Sysytem image"
          className="w-[301px] h-[272px] absolute top-75 border md:w-[411px] md:h-[380px] md:top-92"
        />
      </div>
    </div>
  );
}
