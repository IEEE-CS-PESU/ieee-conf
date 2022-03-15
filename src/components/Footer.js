import {AiFillHome, AiFillPhone} from 'react-icons/ai';
import { MdEmail} from 'react-icons/md';
import pesu from '../media/pesu.png';

const Footer = () => {
  // logo
  // col --> contact links
  // key --> map --> domain && cmt

  return (
    <div id="footer" className="bg-gray-300">
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
       
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            
              {/* <h6
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cubes"
                  className="w-4 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                  ></path>
                </svg>
                IEEE Conference Name
              </h6>
              <br/>
              <p>
                This Conference is OP ... and dets about it her in brief !!!
              </p> */}
            

            <div>
              <h6 className="uppercase font-semibold mb-4 ml-10 flex justify-center md:justify-start lg:text-xl md:text-lg sm:text-base">
                Contact
              </h6>
              
              <div className='flex sm:ml-10 lg:justify-between md:justify-between sm:justify-between'>
              
                <div className='lg:mr-10 md:mr-5 mr-3'>
                  <br/>
                <AiFillHome/>
                Bengaluru, India
                </div>
            
                <div className='lg:mr-10 md:mr-5 mr-3'>
                <br/>
                <MdEmail/>
                some@email.com
                </div>

                <div className='lg:mr-10 md:mr-5 mr-3'>
                <br/>
                <AiFillPhone/>
                +91&nbsp;1234567892
                </div>
                <img src={pesu} alt="pes logo" className='w-24'/>
               </div>
              

            </div>
          </div>
          
        </div>
        <div className="text-center p-6 bg-gray-200">
          <span>© 2021 Copyright:</span>
          <a
            className="text-gray-600 font-semibold"
            href="https://ieeecspesu.tech/"
          >
            {" "}
            IEEE CS PESU{" "}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
