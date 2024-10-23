import React from "react";
import "../Styles/Manage.css";
import Graph from "../Assets/Images/graph.png";
import Phones from "../Assets/Images/phones.png";
import dots from "../Assets/Images/dots.png";
import Total from "../Assets/Images/total.png";

const Manage = () => {
  return (
    <section className="flex items-center justify-between mt-2 container mx-auto">
      {/* Dots */}
      <div className="absolute top-[450px] left-[-50px] w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="absolute top-[100px] right-[380px]  w-4 h-4 bg-green-500 rounded-full"></div>
      <div className="absolute top-[470px] left-[500px] w-2 h-2 bg-green-500 rounded-full dot"></div>
      <div className="absolute top-60 right-[520px] w-3 h-3 bg-red-500 rounded-full"></div>
      {/* Content */}
      <img src={dots} alt="dots" className="dots" />
      <div className="titles">
        <div className="heading-container">
          <h1>
            Manage Your Business{" "}
            <div id="finance-text">
              <span>Finance</span>
            </div>{" "}
            Easily
          </h1>
        </div>
        <p>
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue magna at pretium purus pretium ligula
        </p>

        <button className="trialBtn">Start 14 Days Trial</button>
      </div>

      <div className="slideImages">
        <img src={Phones} alt="Phones" className="phones" />
        <img src={Total} alt="total" className="total" />
        <img src={Graph} alt="graph" className="graph" />
      </div>
    </section>
  );
};

export default Manage;
