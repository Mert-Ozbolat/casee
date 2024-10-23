import React from "react";
import "../Styles/UserAnalysis.css";

const UserAnalysis = () => {
  return (
    <div className="flex justify-center">
      <div className="userContainer mt-2 container mx-auto px-5 md:mx-20 ">
        <div className="activeUser  seperator place-self-center text-center border-r-2 max-[580px]:border-b-2 max-[580px]:border-r-0 px-32">
          <h1 class="font-poppins">115k+</h1>
          <span class="font-inter">Active user</span>
        </div>
        <div className="passiveUser seperator place-self-center text-center border-r-2 max-[580px]:border-b-2 max-[580px]:border-r-0 px-32">
          <h1 class="font-poppins">88k</h1>
          <span class="font-inter">User passive</span>
        </div>
        <div className="increaseUser seperator seperator-x place-self-center text-center border-r-2 max-[580px]:border-b-2 max-[580px]:border-r-0 px-32">
          <h1 class="font-poppins">30%</h1>
          <span class="font-inter">Increase in user</span>
        </div>
        <div className="tesimonials place-self-center text-center">
          <h1 class="font-poppins">&gt;10k</h1>
          <span class="font-inter">Good Tesimonials</span>
        </div>
      </div>
    </div>
  );
};

export default UserAnalysis;
