import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import PageBanner from "../../Components/PageBanner/PageBanner";
import UseAllColleges from "../../Hook/UseAllColleges";

const SingleCollegePage = () => {
  const [colleges, isLoading] = UseAllColleges();
  const param = useParams();
  console.log(param.id);

  const loadedData = colleges.filter((clg) => clg._id === param.id);
  console.log(loadedData);
  //create object for pagebanner section
  const details = {
    image: loadedData[0]?.image,
    name: loadedData[0]?.name,
  };

  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <div className=""></div>
      <Footer></Footer>
    </div>
  );
};

export default SingleCollegePage;
