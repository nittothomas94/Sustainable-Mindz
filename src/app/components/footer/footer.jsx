export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-purple-100 h-40 flex flex-col gap-20 px-4 py-8 md:px-[110px] md:flex-row justify-between items-center md:gap-0 md:h-0">
      <p className="w-fit size-[15px]">
        Copyright © 2024 Sustainable Mindz. All Rights Reserved.
      </p>

      <div className="flex gap-2 w-fit h-fit">
        <i className="fa-brands fa-facebook bg-purple-950 text-white p-[5px] rounded-2xl"></i>
        <i className="fa-brands fa-instagram bg-purple-950 text-white p-[5px] rounded-2xl"></i>
        <i className="fa-brands fa-linkedin  bg-purple-950 text-white p-[5px] rounded-2xl"></i>
      </div>
    </div>
  );
}
