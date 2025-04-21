export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-purple-300 to-purple-100 h-15">
      <p className="w-fit md:w-[400px] size-[15px]">
        Copyright © 2024 Sustainable Mindz. All Rights Reserved.
      </p>

      <div className="flex gap-2">
        <i className="material-icons text-white bg-purple-900 rounded-2xl p-[5px]">
          facebook
        </i>

        <i className="material-icons text-white bg-purple-900 rounded-2xl p-[5px]">
          instagram
        </i>
        <i className="material-icons text-white bg-purple-900 rounded-2xl p-[5px]">
          linkedin
        </i>
      </div>
    </div>
  );
}
