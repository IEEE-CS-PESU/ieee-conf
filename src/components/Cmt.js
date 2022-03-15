// import Lottie from "lottie-react";
// import animation from './contactAnimation.json'

const Cmt = () => {
  const responseStyles = {
    marginLeft: "10%",
  };
  let name = [
    "José Aguilar Univ.Simón Bolívar, Venezuela",
    "Dennis Barrios, Univ.Católica San Pablo, Peru",
    "Diego R.Bruno, Univ.of Sao Paulo, Brazil",
    "Shridhar Devamane, Technologies Bangalore, India",
    "José Díaz - Amado, Inst.Federal de la Bahía, Brazi",
    "David Gómez, ESTIA, France",
    "aphaell Maciel de Sousa, Institute Federal da Paraiba, Brazil",
    "Nicolás Navarro - Guerrero, German Research Center for AI GmbH, Germany",
  ];

  let name2 = [
    "Stephan Recker, Univ.Dortmund, Germany",
    "Roseli Romero, Univ.of Sao Paulo, Brazil",
    "Miguel Solis, Univ.Andrés Bello, Chile, Peru",
    "Regina Ticona, Univ.Católica San Pablo, Peru",
    "Shikha Tripathi, Univ.PES, India",
    "Sudarshan Tsb, Univ.PES, India",
    "María Elena Villapol, Auckland Univ.of Technology, New Zealand",
    "Fernando Osorio, Univ.of Sao Paulo, Brazil",
    "Raquel Patiño, Univ.Católica San Pablo, Peru",
  ];

  const bgStyles = {
    height: "80%",
    padding: "3%",
    // backgroundColor: "#36394a"
  };

  return (
    <div className=" w-full bg-gray-100" style={bgStyles}>
      <div
        id="committee"
        style={responseStyles}
        className="w-5/6 py-4 px-8 bg-white shadow-lg
         
         rounded-lg my-10 text-center flex justify-center"
      >
        <div>
          <h2 className="text-xl md:text-2xl text-[#3B82F6] lg:text-3xl font-semibold font-ourFont hover:animate-pulse duration-75 uppercase">
            <span className="underline">TECH</span>iNICAL COMMITTEE
          </h2>
          <br />
          <div className=" grid justify-items-stretch mt-2 text-gray-600 text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                {name.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="text-sm md:text-lg lg:text-lg text-left"
                    >
                      {item}{" "}
                    </li>
                  );
                })}
              </div>
              <div>
                {name2.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="text-sm md:text-lg lg:text-lg text-left"
                    >
                      {item}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cmt;
