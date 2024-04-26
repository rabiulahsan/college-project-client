import { Link } from "react-router-dom";
import FadeAnimations from "../../Components/Animations/FadeAnimations";
import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Profile = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[5%] mb-[3%]">
        <img
          src={user?.photoURL}
          className="h-[120px] w-[120px] rounded-full mx-auto"
          alt=""
        />
      </div>
      <div className="">
        <div className=" flex justify-between items-center mx-[20%] mb-[3%] gap-x-[10%]">
          <div className="w-1/2 border-red-400 border-2">
            <FadeAnimations
              direction="right"
              once={false}
              delay={0.3}
              duration={0.5}
            >
              <p>j</p>
            </FadeAnimations>
          </div>
          <div className="w-1/2  border-red-400 border-2">
            <FadeAnimations
              direction="left"
              once={false}
              delay={0.3}
              duration={0.5}
            >
              <p>h</p>
            </FadeAnimations>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="green-small-btn cursor-pointer font-bold ">
          <Link to="/update-profile">Edit</Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
