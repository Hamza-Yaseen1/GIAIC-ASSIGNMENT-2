import Image from "next/image";
import './footer.css';

const Footer: React.FC = () => (
  <>
    <div className='footer relative mt-60 flex'>
      <div className="img-1">
        <Image
          src="/images/foot-img.png"
          alt="decorative image 1"
          width={300}
          height={400}
        />
      </div>
      <div className="Letter-content relative top-6 items-center">
        <h1 className='text-4xl text-center'>Subscribe To Our Newsletter</h1>
        <p className='text-center pt-3 leading-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
        </p>
        <button className="bg-black h-11 w-52 text-white font-semibold py-3 px-6 mt-8 relative left-44 rounded hover:bg-neutral-800 transition duration-300 ease-in-out">
          Subscribe Now
        </button>
      </div>
      <div className="img-2">
        <Image
          src="/images/foot-img2.png"
          alt="decorative image 2"
          width={300}
          height={500}
        />
      </div>
    </div>
    <p className='text-sm font-semibold text-center pt-3 text-white bg-black'>
      Copyright © 2024 HAMZA. All Rights Reserved.
    </p>
  </>
);

export default Footer;
