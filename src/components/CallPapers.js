import React from "react";
// import { FaCalendarAlt } from 'react-icons/fa';
import Lottie from "lottie-react";
import animation from "./paper.json";
function CallPapers() {
  //
  return (
    <div className="bg-gray-900/90 w-full py-10 mb-5 px-10">
      <div id="callpaper" className="">
        <div className="h-80 flex  gap-2 items-center justify-center ">
          <div className=" border-gray-300  bg-white rounded-xl w-[70rem] py-2 pt-10 px-5">
            <div className="grid grid-cols-6 gap-3 bg-white">
              <div className="col-span-2 flex justify-center align-middle">
                {/* <FaCalendarAlt style={{ width: "35%", height: "35%" }} className='text-black text-center opacity-4' /> */}
                <Lottie
                  animationData={animation}
                  loop="1"
                  className=""
                  style={{ width: "70%", height: "70%" }}
                />
                
              </div>

              <div className="col-span-4">
                <p className="sm:text-xl text-black font-bold font-ourFont lg:text-3xl uppercase animate-bounce ">
                  {" "}
                  <span className=" underline">Important Dates !</span>
                </p>
                <p className="text-gray-800 my-2 font-bold lg:text-lg">
                  <span className="underline">Paper Submission</span>: August
                  31st, 2022
                  <br />
                  <br />
                  <span className="underline">
                    Notification of Acceptance:
                  </span>{" "}
                  September 30th, 2022
                  <br />
                  <br />
                  <span className="underline">Camera Ready:</span> October 16th,
                  2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default CallPapers;
