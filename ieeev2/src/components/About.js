import Lottie from "lottie-react";
import animation from './aboutAnimation.json'
import { FaStar } from "react-icons/fa";
// import { responsiveFontSizes } from "@material-ui/core";
const About = () => {

    const animationStyles =
    {
        width: "80%",

    }
    const responsiveStyle =
    {
        width: "65%",
        marginLeft: "20%"
    }
    const textStyle =
    {
        color: "#523891"
        // 523891 #AC70C9"
    }
    const domains =
        [
            'Topic - 1',
            'Topic - 2',
            'Topic - 3',
            'Topic - 4',
            'Topic - 5',
            'Topic - 6',
            'Topic - 7',
        ]
    return (
        <div className="about w-full bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

                <div className="animation lg:ml-20 lg:mt-20 md:ml-10  " >
                    <Lottie animationData={animation} loop="1" className="" style={animationStyles} />;
                </div>

                <div className="lg:mt-10">
                    <p className="text-ourBlue font-ourFont text-center sm:text-2xl md:text-3xl  lg:text-6xl lg:my-10 " style={textStyle}>ABOUT</p>
                    <p className="text-base px-10  text-left lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure architecto consequatur eaque, esse non quo qui labore veniam inventore earum natus,
                        quidem culpa quis optio repellat autem tempora dolore? Vero reprehenderit veniam nam. Dolor ad
                        ipsum non! Quo repellat voluptatibus molestias omnis. Cupiditate aliquam, sapiente eius quis culpa
                        eligendi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam incidunt
                        possimus nulla maxime excepturi fuga consequatur, cum nihil minima quis reiciendis mollitia itaque
                        facilis harum quia aperiam at neque dolor laboriosam, sunt dolores omnis recusandae? Sequi modi dol
                        re repellendus? Velit earum voluptates culpa blanditiis quos maxime nam enim! Eum.</p>


                    <div style={responsiveStyle} className="bg-gray-100 border-t-4  border-blue-500 domains rounded-2xl w-[40rem] text-left py-10 shadow-lg lg:pl-10 mt-10 sm:w-[22rem] sm:ml-14">
                        <h1 className="text-center text-2xl md:text-3xl  lg:text-4xl font-bold text-ourBlue uppercase mb-6"><span className="underline">Do</span>mains</h1>
                        {domains.map((item, key) => {
                            return <li key={key} className="list-none text-gray-800 text-base m-2 lg:p-2 lg:text-xl ml-6">
                                <FaStar className="inline" />
                                {item}
                            </li>
                        })}
                    </div>

                </div>

            </div >
        </div >
    );
}

export default About;