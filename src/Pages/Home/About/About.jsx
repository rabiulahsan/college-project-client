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
            Welcome to Explorer, where the joy of travel meets the ease of
            discovery! We are your go-to guide for amazing destinations and
            unforgettable experiences. <br /> At Explorer, we are all about the
            thrill of exploration. Our blog is a curated collection of travel
            stories, stunning visuals, and practical tips. Whether you are a
            seasoned globetrotter or a first-time traveler, our goal is to
            inspire and guide you. We believe in the power of travel to
            transform, create connections, and make lasting memories. <br />{" "}
            What makes Explorer special? Our commitment to authenticity and
            quality. Each post is a crafted journey, bringing you closer to the
            heart of each destination. Our team works hard to provide valuable
            insights and immersive experiences.
          </FadeAnimations>
        </div>
      </div>
    </div>
  );
};

export default About;
