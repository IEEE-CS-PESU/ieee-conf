// import bgpic from "../media/bgPic.png";
import { useState } from "react";
// import { logDOM } from '@testing-library/react';
import pesu from '../media/pesu.png'
const Speaker = () => {
  const responsiveStyle = {
    marginLeft: "3%",
  };

  const responsiveStyle2 = {
    marginLeft: "20%",
    marginRight: "5%",
    marginTop: "2.67%",
    height: "60%",
    width: "60%",
  };

  const responsiveStyle21 = {
    // marginTop: "4%",
    paddingTop: "2%",
    paddingLeft: "1%",
    // paddingBottom: "10px",
    height: "200%",
    width: "200%",
  };

  //screen width hook

  let [screenWidth, setScreenWidth] = useState(1);
  // let [screenHeight, setScreenHeight] = useState(1);
  function resize() {
    // setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
    // console.log(screenWidth);
  }

  window.onresize = resize;

  return (
    <div className="rounded-2xl">
      <br />
      <div>
        <h1 className="text-blue-700/90 text-center text-4xl font-bold">
          SPEAKER
        </h1>
      </div>

      <div
        style={responsiveStyle}
        className="speaker flex m-5  justify-center items-center
            border-t-2 border-l-2 border-gray-600 rounded-xl drop-shadow-lg"
      >
        <div className="w-full flex flex-col lg:flex-row pb-4">
          <div
            style={screenWidth < 1012.4 ? responsiveStyle2 : responsiveStyle21}
            className="text-center overflow-hidden"
          >
            {/* <img src={bgpic} alt="" /> */}
            <img src={pesu} alt=""/>
          </div>

          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Can coffee make you a better developer?
              </div>
              <p className="text-gray-700 text-base">
                Yes it can ...... 😉😜😁🔥🐶 Here we mention all the dets of the
                speaker after the details are given
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                accusantium itaque distinctio modi ipsa quia facere aut totam
                eius atque cupiditate hic mollitia, sapiente necessitatibus,
                autem voluptatibus? Ad, sunt hic earum vero voluptas, blanditiis
                natus, eveniet vitae harum debitis dolore saepe. Culpa ea veniam
                voluptates quod exercitationem fugit, asperiores corporis, esse
                illo maiores animi. Ipsam voluptatibus ad expedita accusantium
                ullam necessitatibus quos quasi, quis, beatae debitis optio,
                quaerat molestias? Unde alias ullam quo! Similique molestias
                voluptates aliquam nesciunt culpa fuga error nemo pariatur
                voluptas. Repellendus, minima. Culpa, temporibus architecto.
                Cumque ad ut doloribus vero voluptatibus quos ex commodi a
                blanditiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
