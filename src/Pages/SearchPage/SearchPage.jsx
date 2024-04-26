import { useEffect, useState } from "react";
import PageBanner from "../../Components/PageBanner/PageBanner";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Navbar from "../../Shared/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import FadeAnimations from "../../Components/Animations/FadeAnimations";
import Skeleton from "../../Components/Skeleton/Skeleton";
import Footer from "../../Shared/Footer/Footer";
import SingleCollegecard from "../Home/Featured/SingleCollegecard";

const SearchPage = () => {
  const [searchresult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchValue = useParams().value;
  // console.log(searchValue);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        await fetch(`http://localhost:5000/search?value=${searchValue}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchResult(data);
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error fetching favourite data:", error);
      }
    };

    // Fetch the data when the component mounts
    fetchSearchData();
  }, [searchValue]);
  // console.log(searchresult);

  const details = {
    image:
      "https://w0.peakpx.com/wallpaper/324/906/HD-wallpaper-curzon-hall-asia-bangladesh-castles-dhaka-dhaka-university-du-heritage-history-university-of-dhaka.jpg",
    name: "Search",
  };
  return (
    <div>
      <Navbar></Navbar>
      {searchresult?.length === 0 ? (
        ""
      ) : (
        <>
          <PageBanner details={details}></PageBanner>
          <SectionTitle heading="Search Results"></SectionTitle>
        </>
      )}
      {searchresult.length === 0 ? (
        <div className="pt-[10%] mb-[5%]">
          <FadeAnimations
            direction="down"
            once={false}
            delay={0.3}
            duration={0.5}
          >
            <Player
              className="h-[300px] "
              autoplay
              loop
              src="/empty.json"
            ></Player>
          </FadeAnimations>

          <p className="text-2xl font-bold text-center mt-[3%]">
            Didn&apos;t find anything
          </p>
        </div>
      ) : (
        <div className="grid gap-x-16 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
          {/* this is for skeleton */}
          {isLoading || searchresult.length === 0 ? (
            <Skeleton number={9}></Skeleton>
          ) : (
            ""
          )}
          {searchresult?.map((clg) => (
            <SingleCollegecard key={clg._id} clg={clg}></SingleCollegecard>
          ))}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default SearchPage;
