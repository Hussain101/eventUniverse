import React from "react";
import family from "./assessts/family.png";
import Business from "./assessts/Business.png";
import design from "./assessts/design.png";
import games from "./assessts/games.png";
import competition from "./assessts/competition.png";
import dashboard from "./assessts/dashboard.png";
import search from "./assessts/search.png";
import ticket from "./assessts/Tickets.png";
import event from "./assessts/myevent.png";
import blog from "./assessts/Blog.png";
import setting from "./assessts/setting.png";
import refund from "./assessts/Refund Center.png";
import "./admin.css";
import heart from "./assessts/heart.png";
import shop from "./assessts/shop.png";
import notification from "./assessts/notification.png";
import Accountdetails from "./accountdetails";
const User_main = () => {
  return (
    // user-events dashboard
    <div className="flex flex-row">
      {/* right menu */}
      <div className="w-[284px] h-[1024px] border-2 border-slate-200">
        {/* logo */}
        <div className="my-[35px]">
          <p className="text-center text-3xl font-bold">Events</p>
        </div>
        <div className="my-4 flex flex-col justify-center ">
          <div className="flex my-2">
            <img
              src={dashboard}
              className="h-12  border-none"
              alt="dashboard"
            />
            <p className="font-extrabold text-base mt-1">Dashboard</p>
          </div>
          <div className="flex my-2">
            <img src={search} className="h-12  border-none" alt="dashboard" />
            <p className=" text-base mt-2">Browse Events</p>
          </div>
          <div className="flex my-2">
            <img src={ticket} className="h-12  border-none" alt="dashboard" />
            <p className=" text-base mt-2">My Tickets</p>
          </div>
          <div className="flex my-2">
            <img src={event} className="h-12  border-none" alt="dashboard" />
            <p className=" text-base mt-2">My Events</p>
          </div>
          <div className="flex my-2">
            <img src={blog} className="h-12  border-none" alt="dashboard" />
            <p className=" text-base mt-2">Blog</p>
          </div>
          <div className="flex my-2">
            <img src={setting} className="h-12  border-none" alt="dashboard" />
            <p className=" text-base mt-2">Settings</p>
          </div>
          <div className="flex my-2">
            <img src={refund} className="h-12  border-none" alt="dashboard" />
            <p className=" text-base mt-2">Refund Center</p>
          </div>
        </div>
      </div>
      {/* mid theme */}
      <div className=" w-[90%] flex flex-col  px-10">
        {/* Top */}
        <div className=" flex justify-between">
          <div className="my-9 ">
            <p className="r text-3xl font-bold">Dashboard</p>
            <p>Search and buy tickets</p>
          </div>
          <div className=" flex flex-row h-10 my-[35px]">
            <img src={heart} alt="saved" className="h-10 mx-1" />
            <img src={shop} alt="saved" className="h-10 mx-1" />
            <img src={notification} alt="saved" className="h-10 mx-1" />
          </div>
        </div>
        {/* selecting navigation */}
        <div className=" flex justify-center">
          <img src={family} alt="family" />
          <img src={Business} alt="business" />
          <img src={design} alt="design" />
          <img src={competition} alt="competition" />
          <img src={games} alt="games" />
        </div>
      </div>

      {/* right-account */}
      <div className="w-[360px] h-[1024px] bg-[#F1F8F4]">
        <Accountdetails />
      </div>
    </div>
  );
};

export default User_main;
