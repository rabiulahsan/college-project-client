import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleCollegecard from "./SingleCollegecard";
import Skeleton from "../../../Components/Skeleton/Skeleton";
import UseAllColleges from "../../../Hook/UseAllColleges";

const Featured = () => {
  const [colleges, isLoading] = UseAllColleges();
  const featuredColleges = colleges.slice(0, 3);

  return (
    <div className="">
      <SectionTitle heading="Explore our Featured Colleges"></SectionTitle>
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%] mb-[5%] ">
        {isLoading && <Skeleton number={3}></Skeleton>}

        {featuredColleges?.map((clg) => (
          <SingleCollegecard key={clg._id} clg={clg}></SingleCollegecard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
