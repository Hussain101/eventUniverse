import React from "react";
import "../userPanel.css";
import slider from "../assessts/slider.webp";
import "../userPanel.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Herosection = () => {
  return (
    <div className="">
      <div className="hero h-96 flex flex-col justify-center items-center ">
        <p
          className="text-white my-1 text-5xl font-bold"
          data-aos="zoom-in"
          data-aos-offset="150"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Discover Events Happening!
        </p>
        <p
          className="text-white my-1 "
          data-aos="zoom-in"
          data-aos-offset="150"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          We've curated the best events near you to get your 2023 started.
        </p>
        <select
          className="rounded-lg p-2 text-black my-4 "
          data-aos="slide-up"
          data-aos-offset="250"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <option>Select category</option>
          <option>SALSA</option>
          <option>BACHATA</option>
          <option>ZOUQ</option>
          <option>KIZOMBZ</option>
        </select>
      </div>
      <div className="h-full w-full festival  text-white px-12 py-8">
        <p className="text-lg font-bold mb-4">Popular festival</p>
        <div className="flex justify-center">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src={slider} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} />
            </SwiperSlide>
            ...
          </Swiper>
          {/* <div id="carouselExampleCaptions" className="carousel slide w-[80%]">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slider} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slider} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
