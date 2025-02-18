import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full px-24 mx-auto p-0 bg-gray-100 rounded-xl flex  items-center">
      <div className="text-left p-4">
        <h2 className="text-4xl font-bold mb-3">
          The new phones are here, take a look.
        </h2>
        <p className="text-gray-600 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
        </p>
        <button className="mt-4 px-5 py-2 rounded-lg ">
          Explore
        </button>
      </div>

      <div className="flex justify-center">
        <Image 
          src="/iphones.png" 
          alt="New Phone"
          width={700}
          height={700}
          className="rounded-lg"
          />
      </div>
    </div>
    
          </>
  );
}
