import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleCollegecard from "./SingleCollegecard";

const Featured = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error(error));
  }, []);

  const featuredColleges = colleges.slice(0, 3);

  return (
    <div className="">
      <SectionTitle heading="Explore our Featured Colleges"></SectionTitle>
      <div className="flex justify-around gap-x-[3%] px-[8%] py-[5%] ">
        {featuredColleges?.map((clg) => (
          <SingleCollegecard key={clg._id} clg={clg}></SingleCollegecard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
