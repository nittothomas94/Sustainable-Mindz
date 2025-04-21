export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-purple-100 h-15 flex items-center justify-between md:px-[110px]">
      <p className="w-fit  size-[15px]">
        Copyright © 2024 Sustainable Mindz. All Rights Reserved.
      </p>

      <div className="flex gap-2 items-center justify-center">
        <i className="material-icons text-white bg-purple-900 rounded-2xl p-[5px]">
          facebook
        </i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
}
