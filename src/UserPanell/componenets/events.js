import React from "react";
import paris from "../assessts/Paris.webp";
import moroco from "../assessts/moroco.webp";
import concert from "../assessts/Concert.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "../userPanel.css";
AOS.init();
const Events = () => {
  return (
    <div className="px-8 py-4 events text-white">
      <h2 className="text-2xl my-2 font-medium">Events Sheduled</h2>
      <div
        className="flex my-4"
        data-aos="slide-left"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="card mx-2 bg-[#290B55] text-white">
          <img src={moroco} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold text-lg">Morocco Event</h5>
            <p class="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a href="#" class="btn bg-[#D00000] text-white">
              Click for details
            </a>
          </div>
        </div>
        <div class="card  card mx-2 bg-[#290B55] text-white">
          <img src={paris} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold text-lg">Paris Night</h5>
            <p class="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a href="#" class="btn bg-[#D00000] text-white">
              Click for details
            </a>
          </div>
        </div>
        <div class="card card mx-2 bg-[#290B55] text-white">
          <img src={concert} className="card-img-top h-[200%]" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold text-lg">England</h5>
            <p class="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a href="#" class="btn bg-[#D00000] text-white">
              Click for details
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex my-4"
        data-aos="slide-left"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="card mx-2 bg-[#290B55] text-white">
          <img src={moroco} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold text-lg">Morocco Event</h5>
            <p class="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a href="#" class="btn bg-[#D00000] text-white">
              Click for details
            </a>
          </div>
        </div>
        <div class="card  card mx-2 bg-[#290B55] text-white">
          <img src={paris} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold text-lg">Paris Night</h5>
            <p class="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a href="#" class="btn bg-[#D00000] text-white">
              Click for details
            </a>
          </div>
        </div>
        <div class="card card mx-2 bg-[#290B55] text-white">
          <img src={concert} className="card-img-top h-[200%]" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold text-lg">England</h5>
            <p class="card-text my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a href="#" class="btn bg-[#D00000] text-white">
              Click for details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
