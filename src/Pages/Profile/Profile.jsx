import { Link, useNavigate } from "react-router-dom";
import FadeAnimations from "../../Components/Animations/FadeAnimations";
import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const { user, logOut } = UseAuth();
  // console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://college-facilities-server.vercel.app/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const loggedUser = users.filter((u) => u.email == user?.email);
  console.log(loggedUser[0]);

  // functon for logout
  const handleLogOut = () => {
    logOut()
      .then(navigate("/"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[5%] mb-[3%]">
        <img
          src={user?.photoURL ? user?.photoURL : "/icon.png"}
          className="h-[120px] w-[120px] rounded-full mx-auto"
          alt=""
        />
      </div>
      <div className="">
        <div className=" flex justify-around items-center mb-[3%] mx-[15%]">
          <div className="">
            <FadeAnimations
              direction="right"
              once={false}
              delay={0.3}
              duration={0.5}
            >
              <div className="">
                <p className="text-sm text-gray-500 font-semibold ">Name</p>
                <p className=" text-lg font-bold">{loggedUser[0]?.name}</p>
              </div>
              <div className="my-7">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  College Name
                </p>
                <p className=" text-lg font-bold">
                  {loggedUser[0]?.college_name
                    ? loggedUser[0]?.college_name
                    : " Not Given"}
                </p>
              </div>
              <div className="">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Phone no
                </p>
                <p className=" text-lg font-bold">
                  {loggedUser[0]?.phone ? loggedUser[0]?.phone : " Not Given"}
                </p>
              </div>
            </FadeAnimations>
          </div>
          <div className="">
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
              <div className="my-7">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Subject Name
                </p>
                <p className=" text-lg font-bold">
                  {loggedUser[0]?.subject
                    ? loggedUser[0]?.subject
                    : " Not Given"}
                </p>
              </div>
              <div className="">
                <p className="text-sm text-gray-500 font-semibold mb-1">
                  Address
                </p>
                <p className=" text-lg font-bold">
                  {loggedUser[0]?.address
                    ? loggedUser[0]?.address
                    : " Not Given"}
                </p>
              </div>
            </FadeAnimations>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[3%] gap-x-5">
        <button className="green-small-btn cursor-pointer font-bold ">
          <Link to="/update-profile">Edit</Link>
        </button>
        <button
          className="green-small-btn cursor-pointer font-bold "
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
