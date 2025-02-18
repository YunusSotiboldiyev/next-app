import Image from "next/image";
import React from "react";

const WithUs = () => {
  return (
    <div className=" py-12">
      <div className="w-1/2 mx-auto text-center">

      <h2 className="text-3xl">Shop our latest offers and categories</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. 
        Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      </div>

      <div className="mt-10 text-right">
        <div className="three flex justify-around">

          <div className="w-1/4 flex">
            <div className="split">
              <div className="top">
              <Image src="/1.png" alt="Laptop" width={300} height={200} />
        <p className="text-sm ">Laptops</p>
        <h3 className=" text-xl">True Laptop Solution</h3>
              </div>
              <div className="bottom w-80 flex text-center items-center">
              <Image src="/2.png" alt="Phones" width={200} height={400} className="" />
              <div className="text">
        <p className="text-sm ">Watch</p>
        <h3 className="text-xl">Not just stylisht</h3>
              </div>

              </div>
            </div>
          </div>
          <div className="w-50 ml-15">
        <Image src="/3.png" alt="phone" width={200} height={100}  />
        <p className=" text-sm mt-2">Phones</p>
        <h3 className=" text-xl">Your day to day life</h3>
          </div>
        <div className="w-50">

        <p className="text-gray-500 text-sm mt-2">Tablet</p>
        <h3 className=" text-xl">Empower your work</h3>
        <Image src="/4.png" alt="tablet" width={200} height={100} className="rounded-lg" />

        </div>
        </div>


      </div>
          <section className="mt-12">
            <div className="text-center w-2/4 mx-auto">
            <h1 className="text-2xl">Save on our most selled items.</h1>
            <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            </div>
            <div className="mt-12 flex justify-around flex-nowrap">
            <div className="w-64">
            <Image src="/mac.png" alt="mac" width={200} height={100} />
            <h1 className="font-bold">MacBook Pro 13</h1>
            <p className="text-xs py-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
            <span>$ 1,200.00 USD</span>
            </div>
            <div className="w-64">
            <Image src="/watch.png" alt="watch" width={200} height={100} />
            <h1 className="font-bold">Smart Galaxy Watch 3</h1>
            <p className="text-xs py-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <span>$ 199.00 USD</span>
            </div>
            <div className="w-64">
            <Image src="/mac2.png" alt="mac" width={200} height={100} />
            <h1 className="font-bold">MacBook Air M1</h1>
            <p className="text-xs py-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <span>$ 1,009.00 USD</span>
            </div>
            <div className="w-64">
            <Image src="/Ipad.png" alt="ipad" width={200} height={100} />
            <h1 className="font-bold">iPad</h1>
            <p className="text-xs py-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <span>$ 610.00 USD</span>
            </div>
            </div>

          </section>
            
            <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-200 shadow-lg rounded-lg p-2 text-center">
            <p className="text-sm text-gray-500 mt-2">Smart light bulb pack</p>
            <h3 className="font-bold text-lg">Latest and gratest</h3>
            <button className="mt-3 px-4 py-2  rounded-md border-collapse border-solid border-black">Explore</button>
            <Image src="/watches.png" alt="Extra Item 1" width={300} height={200} className="mx-auto rounded-lg" />
          </div>
          <div className="bg-slate-200 shadow-lg rounded-lg p-2 text-center">
            <p className="text-sm text-gray-500 mt-2">Smart light bulb pack</p>
            <h3 className="font-bold text-lg">Best selling</h3>
            <button className="mt-3 px-4 py-2  rounded-md">Explore</button>
            <Image src="/phoneonmac.png" alt="Extra Item 2" width={300} height={200} className="mx-auto rounded-lg" />
          </div>

          <div className="bg-slate-200 shadow-lg rounded-lg p-2 text-center">
            <p className="text-sm text-gray-500 mt-2">Smart light bulb pack</p>
            <h3 className="font-bold text-lg">Every product</h3>
            <button className="mt-3 px-4 py-2  rounded-md">Explore</button>
            <Image src="/macandphone.png" alt="Extra Item 3" width={300} height={200} className="mx-auto rounded-lg" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default WithUs;
