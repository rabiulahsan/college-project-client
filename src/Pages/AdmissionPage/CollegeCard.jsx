/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import FadeAnimations from "../../Components/Animations/FadeAnimations";
const CollegeCard = ({ clg }) => {
  const {
    _id,
    name,
    image,
    admission_date,
    research_num,
    annual_events,
    annual_sports,
  } = clg;
  return (
    <FadeAnimations direction="up" once={true} delay={0.4} duration={0.4}>
      <div className="flex flex-col bg-white p-4 rounded-md hover:scale-105 duration-500 border border-gray-400 ">
        <img
          className=" mx-auto w-[300px] h-[220px] rounded-md"
          src={image}
          alt=""
        />
        <p className="text-center font-bold mt-3 mb-5 text-lg">{name}</p>
        <p className="font-bold">Number of Research: {research_num}</p>
        <p className="my-3 text-gray-600 text-base">
          <span className="font-bold">Events: </span>
          <span> {annual_events.map((event) => event.name)} </span>
        </p>
        <p className="text-gray-600 text-base">
          <span className="font-bold">Sports: </span>
          <span>{annual_sports.map((sport) => sport.name)}</span>
        </p>
        <p className="font-bold mt-3 mb-7">Admission date: {admission_date}</p>

        <button className="green-btn mt-auto mx-auto w-2/5 hover:bg-green-600">
          <Link to={`/admission/${_id}`}>Admission</Link>
        </button>
      </div>
    </FadeAnimations>
  );
};

export default CollegeCard;
