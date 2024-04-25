import { Player } from "@lottiefiles/react-lottie-player";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FadeAnimations from "../../../Components/Animations/FadeAnimations";

const About = () => {
  return (
    <div className="my-[5%] px-[10%]">
      <SectionTitle heading="About Us"></SectionTitle>
      <div className=" flex justify-between items-center">
        <div className="w-1/2">
          <FadeAnimations
            direction="right"
            once={false}
            delay={0.3}
            duration={0.5}
          >
            <Player
              className="h-[350px] "
              autoplay
              loop
              src="/about.json"
            ></Player>
          </FadeAnimations>
        </div>
        <div className="w-1/2 text-gray-600 leading-8">
          <FadeAnimations
            direction="left"
            once={false}
            delay={0.3}
            duration={0.5}
          >
            FindEdu is your ultimate destination for discovering and securing
            admission to your dream colleges. With a comprehensive database of
            colleges, it offers students a platform to explore various
            educational institutions based on their preferences and
            requirements. From prestigious universities to specialized colleges,
            FindEdu provides detailed information and resources to help students
            make informed decisions and navigate the admission process
            seamlessly. Discover your educational path with FindEdu today!
          </FadeAnimations>
        </div>
      </div>
    </div>
  );
};

export default About;
