import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import PageBanner from "../../Components/PageBanner/PageBanner";

const SingleCollegePage = () => {
  const param = useParams();
  console.log(param.id);

  //create object for pagebanner section
  const details = {
    image: loadedData?.image,
    title: loadedData?.placeName,
  };

  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <Footer></Footer>
    </div>
  );
};

export default SingleCollegePage;
