import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Photo = () => {
  return (
    <>
      <SectionTitle heading="Success Story"></SectionTitle>

      <div className="px-[8%] text-center mb-[5%]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[500px]"
              src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.webp?b=1&s=170667a&w=0&k=20&c=e6N0-5Xqo0toibNWaXA-XLTY2DMy7k2mZvSLr88BNYw="
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Photo;
