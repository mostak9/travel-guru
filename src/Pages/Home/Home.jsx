
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import BgImg from "../../assets/Rectangle 1.png";

const Home = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat text-white bg-blue-600/30 backdrop-brightness-75"
      style={{ backgroundImage: `url('${BgImg}')` }}
    >
        <div className="w-full h-full bg-black/60 backdrop-brightness-50">
        <Navbar></Navbar>
        <Slider></Slider>
          </div>
    

    </div>
  );
};

export default Home;
