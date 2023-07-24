import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => setreviews(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <SectionTitle heading="Reviews"></SectionTitle>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 px-[8%] py-[3%] ">
        {reviews.map((rev) => (
          <SingleReview key={rev._id} rev={rev}></SingleReview>
        ))}
      </div>
    </>
  );
};

export default Reviews;
