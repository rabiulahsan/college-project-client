import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const SingleCollegePage = () => {
  const param = useParams();
  console.log(param.id);
  return (
    <div>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default SingleCollegePage;
