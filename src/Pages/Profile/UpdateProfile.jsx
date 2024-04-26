import PageBanner from "../../Components/PageBanner/PageBanner";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const UpdateProfile = () => {
  const details = {
    image:
      "https://brand.cornell.edu/assets/images/photography/UP_2017_1304_147_select.jpg",
    name: "Update Your Profile",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
