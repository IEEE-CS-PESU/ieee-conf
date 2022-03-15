import Lottie from "lottie-react";
import animation from "./aboutAnimation.json";

// import { responsiveFontSizes } from "@material-ui/core";
const About = () => {
  const animationStyles = {
    width: "90%",
  };
  // const responsiveStyle =
  // {
  //     width: "65%",
  //     marginLeft: "20%"
  // }
  const textStyle = {
    color: "#1D4ED8",
    // 523891 #AC70C9"
  };
  // const domains =
  //     [
  //         'Topic - 1',
  //         'Topic - 2',
  //         'Topic - 3',
  //         'Topic - 4',
  //         'Topic - 5',
  //         'Topic - 6',
  //         'Topic - 7',
  //     ]
  return (
    <div className="about w-full bg-gray-200 pb-20">
      {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> */}
      <div className="sm:flex sm:flex-col md:flex md:flex-col lg:grid lg:grid-cols-2">
        <div className="animation  md:ml-10 ">
          <Lottie
            animationData={animation}
            loop="1"
            className=""
            style={animationStyles}
          />
          
        </div>

        <div className="lg:mt-10">
          <p
            className="text-ourBlue font-ourFont text-center sm:text-2xl md:text-3xl  lg:text-6xl lg:my-10 "
            style={textStyle}
          >
            ABOUT
          </p>
          <p className="text-base px-10  text-left lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            architecto consequatur eaque, esse non quo qui labore veniam
            inventore earum natus, quidem culpa quis optio repellat autem
            tempora dolore? Vero reprehenderit veniam nam. Dolor ad ipsum non!
            Quo repellat voluptatibus molestias omnis. Cupiditate aliquam,
            sapiente eius quis culpa eligendi beatae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium nam incidunt possimus
            nulla maxime excepturi fuga consequatur, cum nihil minima quis
            reiciendis mollitia itaque facilis harum quia aperiam at neque dolor
            laboriosam, sunt dolores omnis recusandae? Sequi modi dol re
            repellendus? Velit earum voluptates culpa blanditiis quos maxime nam
            enim! Eum.
            nulla maxime excepturi fuga consequatur, cum nihil minima quis
            reiciendis mollitia itaque facilis harum quia aperiam at neque dolor
            laboriosam, sunt dolores omnis recusandae? Sequi modi dol re
            repellendus? Velit earum voluptates culpa blanditiis quos maxime nam
            enim! Eum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
