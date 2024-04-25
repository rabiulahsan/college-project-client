import Header from "../Header/Header";
import Navbar from "../../../Shared/Navbar/Navbar";
import Featured from "../Featured/Featured";
import Photo from "../Photo/Photo";
import Research from "../Research/Research";
import Reviews from "../Reviews/Reviews";
import Footer from "../../../Shared/Footer/Footer";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Featured></Featured>
      <Photo></Photo>
      <Research></Research>
      <Reviews></Reviews>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default Home;
