import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Skeleton from "../../Components/Skeleton/Skeleton";
import UseAllColleges from "../../Hook/UseAllColleges";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SingleCollegecard from "../Home/Featured/SingleCollegecard";

const Colleges = () => {
  const [colleges, isLoading] = UseAllColleges();

  return (
    <div>
      <Navbar></Navbar>
      <SectionTitle heading="Explore our All Colleges"></SectionTitle>
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%] mb-[5%]">
        {isLoading && <Skeleton number={9}></Skeleton>}
        {colleges?.map((clg) => (
          <SingleCollegecard key={clg._id} clg={clg}></SingleCollegecard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Colleges;
