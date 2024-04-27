import FadeAnimations from "../../../Components/Animations/FadeAnimations";

/* eslint-disable react/prop-types */
const SingleReview = ({ rev }) => {
  const { image, name, review, rating, college_name } = rev;
  return (
    <FadeAnimations direction="up" once={false} delay={0.4} duration={0.4}>
      <div className="border border-gray-400 p-5 text-center">
        <img
          src={image}
          alt=""
          className="mx-auto h-[80px] w-[80px] rounded-full mb-3"
        />
        <p className="font-semibold text-lg mb-5">{name}</p>
        <p className="text-gray-600">{review}</p>
        <p className="text-gray-600 font-semibold text-lg mt-5">
          Rating:
          <span className=""> {rating}</span>
        </p>
        <p className="text-gray-500 font-bold text-xl mt-5">{college_name}</p>
      </div>
    </FadeAnimations>
  );
};

export default SingleReview;
