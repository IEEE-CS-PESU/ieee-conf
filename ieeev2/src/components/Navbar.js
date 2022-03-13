import React from 'react';

import Logo from "../media/logo.png";



const Navbar = () => {

    //use window.scroolY and set a  new style once >= that height ashte ! 
    var style =
    {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f1f0ef",
        //  #696969 #f1f0ef
        color: "white",
        padding: "0.6% 0 0.6% 0",
        width: "100%",
        top: "0"

    }
    var eleStyle = {
        padding: "10px",
        width: "maxWidth",
        color: "#393185",
        textDecoration: "none",
        marginRight: "10px",
        fontSize: "18.3px",
        fontWeight: "500"

    }
    var logoStyle = {
        width: "10%",
        height: "10%",
        marginRight: "100px",
        marginLeft: "20px"
    }
    return (
        <div style={style}>
            <img style={logoStyle} src={Logo} alt={"PES - LOGO"} />

            <a href="/" style={eleStyle}>
                HOME
            </a>


            {/* #ABOUT KA id WILL PASS HERE IN HREF */}
            <a href="/" style={eleStyle}>
                ABOUT
            </a>

            {/* #speakers KA id WILL PASS HERE IN HREF */}
            <a href="/" style={eleStyle}>
                SPEAKERS
            </a>

            {/* #committee KA id WILL PASS HERE IN HREF */}
            <a href="/" style={eleStyle}>
                COMMITTEE
            </a>


            {/* Easy Chair thingy here */}
            <a href="/easy" style={eleStyle}>
                PAPER_SUBMISSION
            </a>


            {/* #callPapers KA id WILL PASS HERE IN HREF */}
            <a href="/" style={eleStyle}>
                CALL PAPER
            </a>

            {/* #contactUS KA id WILL PASS HERE IN HREF */}
            <a href="/" style={eleStyle}>
                CONTACT US
            </a>


        </div>
    );
};

export default Navbar;
