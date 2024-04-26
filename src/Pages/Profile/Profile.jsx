import UseAuth from "../../Hook/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Profile = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-[5%]">
        <img
          src={user?.photoURL}
          className="h-[120px] w-[120px] rounded-full mx-auto"
          alt=""
        />
      </div>
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
