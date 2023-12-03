import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/slide 1.png';
import slide2 from '../../../assets/slide 2.png';
import slide3 from '../../../assets/slide 3.png';
import slide4 from '../../../assets/slide 4.png';
import slide5 from '../../../assets/slide 5.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
      <section>
        <SectionTitle heading={"Explore Shops"} subHeading={"24 hours service"} ></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide><img src={slide1} alt="" /> <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Book Shop
          </h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /> <h3 className="text-3xl uppercase text-center -mt-16 text-white">
           Mobile Shop
          </h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /> <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Cloth Shop
          </h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /> <h3 className="text-3xl uppercase text-center -mt-16 text-white">
        Shoe Shop
          </h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /> <h3 className="text-3xl uppercase text-center -mt-16 text-white">
        Doll Shop
          </h3></SwiperSlide>
      </Swiper>
      
      </section>
    );
};

export default Category;