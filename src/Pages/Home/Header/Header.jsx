import slide3 from "../../../assets/banner(1).png";
const Header = () => {
  return (
    <div>
      <div className="flex gap-x-10 px-[8%] flex-col-reverse lg:flex-row items-center lg:justify-start">
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <p className="text-2xl  lg:text-6xl font-bold leading-tight mb-5 lg:mb-8">
            Find <span className="text-green-600 ">Favourite College</span> is{" "}
            <span className="text-green-600 ">Easier</span> with us{" "}
          </p>
          <p className="text-[#757575] mb-5">
            Discover your dream college with our feature-packed website. We
            offer valuable insights, ratings, and reviews to guide students in
            finding the perfect match for their academic and career aspirations.
            Empowering your educational journey is our passion!
          </p>
          <div className="flex ">
            <input
              className="py-2 px-4 w-[400px] focus:outline-none border border-gray-400"
              type="text "
              placeholder="Search your Favourite Colleges"
            ></input>
            <button className="green-btn hover:bg-green-800 ml-5">
              Search
            </button>
          </div>
        </div>
        <img className="h-[300px] lg:h-[500px] my-[5%] " src={slide3} alt="" />
      </div>
    </div>
  );
};

export default Header;
