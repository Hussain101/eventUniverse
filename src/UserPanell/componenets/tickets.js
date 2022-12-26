import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Tickets = () => {
  return (
    <div className="bg-[#290B55] text-white px-10 py-12">
      <div className="my-6">
        <p className=" text-4xl font-bold">Tickets</p>
        <div className="my-4 flex justify-between">
          <div
            className="w-full mx-4 flex flex-col justify-center"
            data-aos="slide-left"
            data-aos-offset="150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-black text-center rounded-b-3xl   py-4">
              <p className="text-2xl">Basic Pass</p>
              <div className="bg-[#560BAD] text-center mx-4 my-2">
                <p className="text-4xl">
                  <i className="fa-solid fa-dollar-sign   my-2 mx-1 "></i>
                  34
                </p>
              </div>
            </div>
            <div className="bg-black rounded-t-3xl py-4 flex flex-col justify-center items-center">
              <div>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
              </div>

              <button className="bg-[#560BAD] hover:bg-[#290B55] py-2 px-4 rounded-xl my-2 ">
                Buy ticket
              </button>
            </div>
          </div>
          <div className="w-full mx-4 flex flex-col justify-center">
            <div className="bg-black text-center rounded-b-3xl   py-4">
              <p className="text-2xl">Standard Pass</p>
              <div className="bg-[#560BAD] text-center mx-4 my-2">
                <p className="text-4xl">
                  <i className="fa-solid fa-dollar-sign   my-2 mx-1 "></i>
                  234
                </p>
              </div>
            </div>
            <div className="bg-black rounded-t-3xl py-4 flex flex-col justify-center items-center">
              <div>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
              </div>

              <button className="bg-[#560BAD] hover:bg-[#290B55] py-2 px-4 rounded-xl my-2 ">
                Buy ticket
              </button>
            </div>
          </div>
          <div
            className="w-full mx-4 flex flex-col justify-center"
            data-aos="slide-right"
            data-aos-offset="150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-black text-center rounded-b-3xl   py-4">
              <p className="text-2xl">Elite Pass</p>
              <div className="bg-[#560BAD] text-center mx-4 my-2">
                <p className="text-4xl">
                  <i className="fa-solid fa-dollar-sign   my-2 mx-1 "></i>
                  354
                </p>
              </div>
            </div>
            <div className="bg-black rounded-t-3xl py-4 flex flex-col justify-center items-center">
              <div>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
                <p className="my-2">
                  <i class="fa-sharp fa-solid fa-check text-[#560BAD] border-[#560BAD] mx-1"></i>
                  lorem ipsum
                </p>
              </div>

              <button className="bg-[#560BAD] hover:bg-[#290B55]  py-2 px-4 rounded-xl my-2 ">
                Buy ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
