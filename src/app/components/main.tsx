import Image from "next/image";

import './main.css';
import { Card } from 'antd';


function Main() {
  return (
    <>
      <div className="container relative top-48 flex flex-col items-center">
        <h1 className="text-5xl text-center">New Arrivals</h1>
        <p className="text-center mt-7 leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus distinctio eius cum laboriosam. Odio aperiam, id voluptates cumque eaque veritatis voluptas</p>
        <section className="card flex flex-wrap justify-cente">
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/shop-card.png"
          alt="Shiny Dress by AL Karam - Shop Card Image"

          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-6.png"
          alt="Elegant Dress by AL Karam - Second Featured Image"

          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
          <Card hoverable className="w-72  m-4">  
          <Image
          src="/images/card-2.png"
          alt="Modern Dress by AL Karam - Highlighted Product Image"

          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
          
        </section>
        <section className="card flex">
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-3.png"
          alt="Casual Dress by AL Karam - Featured Image"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>


          </Card>
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-5.png"
          alt="Chic Dress by AL Karam - Fifth Product Image"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-4.png"
          alt="Stylish Dress by AL Karam - Sixth Featured Image"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
        </section>
        <section className="card flex">
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-6.png"
          alt="Glamorous Dress by AL Karam - Seventh Product Image"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>


          </Card>
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-5.png"
          alt="Glamorous Dress by AL Karam - Seventh Product Image"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
          <Card hoverable className="w-72 m-4">  
          <Image
          src="/images/card-6.png"
          alt="Luxurious Dress by AL Karam - Ninth Product Image"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold pt-3">Shiney Dress</h3>
        <h4 className="text-sm ">AL Karam</h4>
        <h5 className="font-semibold pt-3 "> (4.1k) Customer Reviews</h5>
        <h1 className="text-2xl pt-3">$95.50</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
  Add to Cart
</button>

          </Card>
        </section>
        <button className="bg-black h-12 w-52 text-white font-semibold py-3 px-6 mt-5 ml-7 rounded hover:bg-neutral-800 transition duration-300 ease-in-out">See More</button>

      </div>
    </>
  );
}

export default Main;
  

