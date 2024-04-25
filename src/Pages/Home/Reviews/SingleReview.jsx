import FadeAnimations from "../../../Components/Animations/FadeAnimations";

/* eslint-disable react/prop-types */
const SingleReview = ({ rev }) => {
  const { image, name, review } = rev;
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
      </div>
    </FadeAnimations>
  );
};

export default SingleReview;
