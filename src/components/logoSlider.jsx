import Slider from "react-slick";
import "../css/slick.min.css";
import "../css/accessible-slick-theme.min.css";

const LogoTextSlider = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "10%",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 458,
        settings: {
          slidesToShow: 1,
          centerPadding: "0%"
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="logo-slider mt-[42px]">
      <div className="slide-item max-lg:!flex justify-center">
        <img src="/logos/logo1.png" alt="Logo 1" className="h-14" />
      </div>
      <div className="slide-item max-lg:!flex justify-center">
        <img src="/logos/logo2.png" alt="Logo 2" className="h-14" />
      </div>
      <div className="slide-item max-lg:!flex justify-center">
        <img src="/logos/logo3.png" alt="Logo 3" className="h-14" />
      </div>
      <div className="slide-item max-lg:!flex justify-center">
        <img src="/logos/logo4.png" alt="Logo 4" className="h-14" />
      </div>
      <div className="slide-item max-lg:!flex justify-center">
        <img src="/logos/logo5.png" alt="Logo 5" className="h-14" />
      </div>
      <div className="slide-item max-lg:!flex justify-center">
        <img src="/logos/logo6.png" alt="Logo 6" className="h-14" />
      </div>
    </Slider>
  );
};

export default LogoTextSlider;
