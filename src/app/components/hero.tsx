import Image from "next/image";
import { Button } from 'antd';
function Hero() {
  return (
    <section className="hero flex relative">
      <div className="img-left">
        <Image
          src="/images/Rectangle 14.png"
          alt="logo-image"
          width={282}
          height={376}
        />
      </div>
      <div className="content relative z-10">
        <h3 className="title  relative left-20">Summer 2024</h3>
        <h1 className="text-6xl font-bold leading-tight">Multicoloured
        Tie-dye Sweater
        </h1>
        <h5 className="pt-3 pl-5">We know how large objects will act</h5>
        <Button className="h-12 w-36 mt-5 relative left-20 " color="primary" variant="outlined" >
            Shop Now
          </Button>      </div>
      <div className="img-right">
        <Image
          src="/images/Rectangle 13.png"
          alt="logo-image"
          width={513}
          height={608}
        />
      </div>
    </section>
  );
}

export default Hero;
