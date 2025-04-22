const Platform = () => {
  return (
    <div className="min-h-100 mt-40 flex flex-col items-center gap-10 pt-6 md:items-start md:px-[194px] md:py-10">
      <h1 className="font-bold text-[29px] md:text-[39px]">
        Platform Benefits
      </h1>

      <div className="w-full">
        <div className="flex items-center px-2 py-3 gap-3 w-full md:my-4">
          <i className="size-8 flex items-center justify-center font-bold bg-gray-400 rounded-4xl">
            1
          </i>
          <p>creative discovery and curation</p>
        </div>

        <div className="flex items-center px-2 py-3 gap-3  w-full border-y-1 border-gray-200 md:py-4">
          <i className="size-8 flex items-center justify-center font-bold bg-gray-400 rounded-4xl">
            2
          </i>
          <p>Campaign management and tracking tool</p>
        </div>

        {/* 3rd one */}

        <div className="flex flex-col px-3 py-5 gap-4 w-full h-[432px] md:py-4 md:flex-row md:gap-40">
          <div>
            <div className="flex">
              <i className="fa-solid fa-circle-xmark p-1.5"></i>
              <p className="font-bold text-[18px] ">Content Management</p>
            </div>
            <p className="pt-5 md:w-[507px] text-gray-500">
              We strategize, script, and produce content apt for your product or
              service. Get the best in post-production services from us.
            </p>
          </div>

          <img
            src="/images/girl-magini.png"
            alt="girl magini"
            className="w-full h-220 object-contain md:w-[410px] md:h-[400px]"
          />
        </div>

        <div className="flex items-center px-2 mt-20 gap-3  w-full  border-y-1 border-gray-200 md:py-4">
          <i className="size-8 flex items-center justify-center font-bold rounded-4xl bg-gray-400">
            4
          </i>
          <p>Content Management</p>
        </div>
      </div>
    </div>
  );
};

export default Platform;
