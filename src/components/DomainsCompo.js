import { FaStar } from "react-icons/fa";

const DomainsCompo = (props) => {
  const responsiveStyle = {
    // marginLeft: "10%",
    // justifyContent: "center"
  };
  return (
    <div className="mb-12  mx-11 lg:mx-14">
      <div
        style={responsiveStyle}
        className="bg-gray-100 border-t-4 border-r-2 border-l-2 border-b-2 border-blue-500 2 rounded-2xl py-8 shadow-lg lg:text-left lg:pl-7 mt-10 sm:w-[22rem] "
      >
        <h1 className="text-center text-2xl md:text-3xl  lg:text-3xl font-bold text-ourBlue uppercase mb-6 animate-bounce">
          {props.obj.title}
        </h1>
        {props.obj.subDomains.map((item, key) => {
          return (
            <li
              key={key}
              className="list-none text-gray-800 text-lg  lg:p-2 lg:text-lg ml-20"
            >
              <FaStar className="inline" />
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DomainsCompo;
