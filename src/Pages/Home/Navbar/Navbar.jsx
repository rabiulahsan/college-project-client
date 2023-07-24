import ActiveLink from "../../../Components/ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex  justify-between items-center px-[8%] py-[1%]  sticky top-0 z-10">
          <ActiveLink to="/">
            <p className=" font-bold text-3xl">
              <span className="text-black">Find</span>
              <span className="text-green-400">Edu</span>
            </p>
          </ActiveLink>
          <div className=" ">
            <ul className="flex text-lg font-semibold ">
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/instructors">Colleges</ActiveLink>
              </li>
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/classes">Admission</ActiveLink>
              </li>
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/classes">My Colleges</ActiveLink>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="green-btn">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
