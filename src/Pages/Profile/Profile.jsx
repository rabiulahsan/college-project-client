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
      <div className=" ">
        <div className=" flex justify-around items-center   mb-[3%] gap-x-[10%] ">
          <div className="w-1/2 ">
            <FadeAnimations
              direction="right"
              once={false}
              delay={0.3}
              duration={0.5}
            >
              <div className="">
                <p className="text-sm text-gray-500 font-semibold ">Name</p>
                <p className=" text-lg font-bold">{user?.displayName}</p>
              </div>
              <div className="my-[7%]">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  College Name
                </p>
                <p className=" text-lg font-bold">
                  {user?.college ? user?.college : " Not Given"}
                </p>
              </div>
              <div className="">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Phone no
                </p>
                <p className=" text-lg font-bold">
                  {user?.phone ? user?.phone : " Not Given"}
                </p>
              </div>
            </FadeAnimations>
          </div>
          <div className="w-1/2  ">
            <FadeAnimations
              direction="left"
              once={false}
              delay={0.3}
              duration={0.5}
            >
              <div className="">
                <p className="text-sm text-gray-500 font-semibold ">Email</p>
                <p className=" text-lg font-bold">{user?.email}</p>
              </div>
              <div className="my-[7%]">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Subject Name
                </p>
                <p className=" text-lg font-bold">
                  {user?.subject ? user?.subject : " Not Given"}
                </p>
              </div>
              <div className="">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Address
                </p>
                <p className=" text-lg font-bold">
                  {user?.address ? user?.address : " Not Given"}
                </p>
              </div>
            </FadeAnimations>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[3%]">
        <button className="green-small-btn cursor-pointer font-bold ">
          <Link to="/update-profile">Edit</Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
