import React from "react";
import user from "./assessts/user.png";
const Accountdetails = () => {
  return (
    <div className="flex flex-col px-3">
      {/* account card */}
      <div className="flex flex-col mt-12 justify-center items-center">
        <img src={user} alt="user" className="w-[50%]" />
        <p className="my-1 text-xl font-extrabold">Nuha Maulana Ahsan</p>
        <p className="text-lg">nuhamahsan@gmail.com</p>
        <button className="px-3 py-2 rounded-lg bg-[#3DCAB1] text-base ">
          Edit profile
        </button>
        <hr className="my-4 w-full" />
      </div>

      <p className="text-base font-bold ">Your text</p>
    </div>
  );
};

export default Accountdetails;
