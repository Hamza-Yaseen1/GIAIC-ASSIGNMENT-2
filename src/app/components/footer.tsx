import { Carousel } from 'antd';
import Image from "next/image";

import './footer.css';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '250px',  
  color: '#fff',
  lineHeight: '300px',  
  textAlign: 'center',
  background: '#364d79',
  marginTop :"50px",
  fontSize: '24px',  // Increased font size for h3
  fontWeight: 'bold',  // Bold text for h3
};

const Footer: React.FC = () => (
    <>
  <div className='footer relative mt-60 flex'>
    <div className="img-1">
    <Image
          src="/images/foot-img.png"
          alt="logo-image"
          width={300}
          height={400}
        />
    </div>
    <div className="Letter-content relative top-6 items-center ">
    <h1 className='text-4xl text-center '>Subscribe To Our Newsletter</h1>
    <p className='text-center pt-3 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
    <button className="bg-black h-11 w-52  text-white  font-semibold py-3 px-6 mt-8 relative left-44 rounded hover:bg-neutral-800 transition duration-300 ease-in-out ">Subscribe Now</button>
    </div>
    <div className="img-2">
    <Image
          src="/images/foot-img2.png"
          alt="logo-image"
          width={300}
          height={500}
        />
    </div>
    
  </div>
  <p className='text-sm font-semibold text-center sticky pt-3 text-white bg-black'>Copyright © 2024 HAMZA . All Rights Reseved.</p>  </>
);

export default Footer;
