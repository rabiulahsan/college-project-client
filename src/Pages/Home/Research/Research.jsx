import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleResearch from "./SingleResearch";
import StaggerAnimation from "../../../Components/Animations/StaggerAnimation";

const Research = () => {
  const [researches, setReaserches] = useState([]);

  useEffect(() => {
    fetch("https://college-facilities-server.vercel.app/researches")
      .then((response) => response.json())
      .then((data) => setReaserches(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <SectionTitle heading="Research Papers"></SectionTitle>
      <StaggerAnimation delayChildren={0.3} staggerChildren={0.3}>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 px-[8%] pb-[5%] ">
          {researches.map((research) => (
            <SingleResearch
              key={research._id}
              research={research}
            ></SingleResearch>
          ))}
        </div>
      </StaggerAnimation>
    </>
  );
};

export default Research;
