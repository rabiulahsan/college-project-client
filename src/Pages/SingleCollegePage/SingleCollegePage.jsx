import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import PageBanner from "../../Components/PageBanner/PageBanner";
import UseAllColleges from "../../Hook/UseAllColleges";

const SingleCollegePage = () => {
  const [colleges] = UseAllColleges();
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
      <div className="my-[3%] flex  justify-center items-center ">
        <div className=" w-1/2">
          <img
            className="h-[450px] w-full mx-auto "
            src={loadedData[0]?.image}
            alt=""
          />
          <p className="text-3xl text-gray-600 font-bold text-center mt-5">
            {loadedData[0]?.name}
          </p>
        </div>
      </div>
      <p className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10">
        <span className="font-bold">Admission Process: </span>
        {loadedData[0]?.admission_process}
      </p>
      <p className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10">
        <span className="font-bold">Date of Admission </span>
        {loadedData[0]?.admission_date}
      </p>
      <p className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10">
        <span className="font-bold">Number of research: </span>
        {loadedData[0]?.research_num}
      </p>
      <p className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10">
        <span className="font-bold">Total Departmens: </span>
        {loadedData[0]?.num_of_depts}
      </p>
      <p className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10">
        <span className="font-bold">Rating: </span>
        {loadedData[0]?.rating}
      </p>
      <div className="">
        <p className="px-[12%] w-3/4 text-xl text-center text-gray-600  mx-auto leading-10">
          <span className="font-bold">Annual Event </span>
        </p>

        {loadedData[0]?.annual_events.map((ae, idx) => (
          <p
            key={idx}
            className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10"
          >
            <span className="font-bold">{ae?.name}: </span>
            {ae?.description}
          </p>
        ))}
      </div>
      <div className=" my-[4%]">
        <p className="px-[12%] w-3/4 text-xl text-center text-gray-600  mx-auto leading-10">
          <span className="font-bold">Annual Sports </span>
        </p>
        {loadedData[0]?.annual_sports.map((se, idx) => (
          <p
            key={idx}
            className="px-[12%] w-3/4 text-lg text-gray-600  mx-auto leading-10"
          >
            <span className="font-bold">{se?.name}: </span>
            {se?.description}
          </p>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SingleCollegePage;
