import Img1 from "../../assets/Sajek.png";
import Img2 from "../../assets/Sreemongol.png";
import Img3 from "../../assets/sundorbon.png";

const Slider = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="carousel  w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img src={Img1} className="w-full" /> */}
          <div className="hero min-h-screen">
            <div className="hero-content gap-10  flex-col lg:flex-row-reverse">
              <img src={Img1} className="max-w-xs h-96 rounded-3xl shadow-2xl border-2 border-primary-color" />
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* <img src={Img2} className="w-full" /> */}
          <div className="hero min-h-screen">
            <div className="hero-content gap-10  flex-col lg:flex-row-reverse">
              <img src={Img2} className="max-w-xs h-96 rounded-3xl shadow-2xl border-2 border-primary-color" />
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* <img src={Img3} className="w-full" /> */}
          <div className="hero min-h-screen">
            <div className="hero-content gap-10  flex-col lg:flex-row-reverse">
              <img src={Img3} className="max-w-xs h-96 rounded-3xl shadow-2xl border-2 border-primary-color" />
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
      </div>
    </div>
  );
};

export default Slider;
