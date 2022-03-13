import { FaStar } from "react-icons/fa";

const DomainsCompo = (props) => {
    const responsiveStyle =
    {
        // marginLeft: "10%",

        // justifyContent: "center"
    }
    return (
        <div className="mb-12 mx-5 lg:mx-14">
            <div style={responsiveStyle} className="bg-gray-100 border-t-4  border-blue-500 domains rounded-2xl py-10 shadow-lg lg:text-left lg:pl-7 mt-10 sm:w-[22rem] ">
                <h1 className="text-center text-2xl md:text-3xl  lg:text-3xl font-bold text-ourBlue uppercase mb-6 animate-bounce">{props.obj.title}</h1>
                {props.obj.subDomains.map((item, key) => {
                    return <li key={key} className="list-none text-gray-800 text-base m-2 lg:p-2 lg:text-lg ml-6">
                        <FaStar className="inline" />
                        {item}
                    </li>
                })}
            </div>
        </div>
    );
}

export default DomainsCompo;