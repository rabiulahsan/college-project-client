/* eslint-disable react/prop-types */
const Skeleton = ({ number }) => {
  const skeletonElements = [];
  for (let i = 0; i < number; i++) {
    skeletonElements.push(
      <div key={i}>
        <div className="my-7">
          <Skeleton height={200}></Skeleton>
        </div>
        <div className="">
          <Skeleton count={5} style={{ marginBottom: "16px" }}></Skeleton>
        </div>
      </div>
    );
  }
  return <>{skeletonElements}</>;
};

export default Skeleton;
