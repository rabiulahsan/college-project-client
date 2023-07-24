import Header from "../Header/Header";
import Navbar from "../../../Shared/Navbar/Navbar";
import Featured from "../Featured/Featured";
import Photo from "../Photo/Photo";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Featured></Featured>
      <Photo></Photo>
    </>
  );
};

export default Home;
