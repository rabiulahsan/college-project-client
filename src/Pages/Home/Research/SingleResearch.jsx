/* eslint-disable react/prop-types */
const SingleResearch = ({ research }) => {
  const { name, link } = research;
  return (
    <div className="border border-gray-400 text-center p-4">
      <p className="text-lg font-semibold cursor-pointer">
        <a href={link} target="blank">
          {name}
        </a>
      </p>
    </div>
  );
};

export default SingleResearch;
