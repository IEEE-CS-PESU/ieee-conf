// import bgpic from '../media/bgPic.png';
// import bgpic2 from '../media/bgPic2.png';
// import bgpic3 from '../media/bgPic3.png';
import ieeebs1 from "../media/ieeebs.png";
import ieeebs2 from "../media/ieeebs2.png";
// import Button from '@mui/material/Button';
const Home = () => {
  // const stylePic1 =
  // {
  //     position: 'absolute',
  //     top: "70px",
  //     right: "140px",
  //     width: "25%",
  //     backgroundcolor: "white"
  // }

  // const stylePic2 =
  // {
  //     position: 'absolute',
  //     top: "90px",
  //     left: "130px",
  //     width: "14%"
  // }

  const eleStyle = {
    color: "black",
  };
  //111827

  return (
    <div className="m-0  bgg">
      <div className="HomeCompo align-middle text-center h-screen">
        {/* <img src={bgpic2} alt="background_Pic" className='opacity-70 w-full' /> */}

        {/* Images Here */}
        {/* <div >
                    <img src={ieeebs1} alt="ieee-1" style={stylePic1} className="" />
                    <img src={ieeebs2} alt="ieee-2" style={stylePic2} className="" />
                </div> */}
        <div className="flex justify-around">
          <img src={ieeebs1} alt="ieee-1" className="md:h-24 h-16" />
          <img src={ieeebs2} alt="ieee-2" className="md:h-24 h-16" />
        </div>

        {/* Text To be Filled here  */}
        <div className="flex items-center justify-center h-full relative md:top-[-250px] top-[-150px]">
        <div
          style={eleStyle}
          className="font-ourFont flex flex-col absolute text-center"
        >
          {/* <h1 className="sm:text-lg md:text-xl lg:text-4xl md:mt-10 sm:mt-9 ">
            IEEE International Conference on Computing, <br /> Communication and
            Power Engineering
          </h1> */}
          <h1 className="text-3xl md:text-5xl md:mt-10 sm:mt-9 pb-5">
            IEEE International Conference on Power Engineering, Computing and
            Communication
          </h1>
          <p className="sm:text-sm md:text-lg lg:text-xl">
            1st International Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veritatis, ullam!
          </p>
          <p className="sm:text-sm md:text-lg lg:text-xl">
            8 - 9 November 2022
            <br /> Bangalore , India
          </p>

          <a href="https://easychair.org/account/signin?l=sYEPpdPXZTcyjrogSzhcpW">
            <button
              className="
                             lg:font-ourFont
                           text-white
                           bg-blue-500 hover:bg-blue-700 
                             lg:rounded-xl                        
                             md:rounded-xl                        
                             md:py-1 
                             md:px-3 
                             lg:py-2
                             lg:px-5
                             lg:w-36
                             lg:mt-5
                             md:mt-5
                             
                             "
            >
              SUBMIT
            </button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
