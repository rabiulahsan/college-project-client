import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleReview from "./SingleReview";
import Skeleton from "../../../Components/Skeleton/Skeleton";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://college-facilities-server.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        setreviews(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <SectionTitle heading="Reviews"></SectionTitle>
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 px-[8%] py-[3%] ">
        {isLoading && <Skeleton number={3}></Skeleton>}
        {reviews.map((rev) => (
          <SingleReview key={rev._id} rev={rev}></SingleReview>
        ))}
      </div>
    </>
  );
};

export default Reviews;
