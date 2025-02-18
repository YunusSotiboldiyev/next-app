"use client";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchSubscription() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full flex flex-col items-center space-y-10 my-14">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Looking for anything else?</h2>
        <div className="relative w-full max-w-md mx-auto">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
  type="text"
  placeholder="Search keyword"
  className="pl-10 py-2 rounded-full border border-gray-300 w-full"
/>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {["iPhone", "Charger", "Gift", "Google Pixel 3", "Keyboard", "13 Pro Max", "iPhone 12", "Laptop", "Mobile"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold">Never miss a thing</h2>
        <p className="text-gray-600">Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        <div className="mt-4 flex items-center justify-center space-x-2">
        <Image src="/phoneonmac.png" alt="Laptop" width={300} height={200} /> <br />
       <div>

        <input
  type="email"
  placeholder="Your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-2/3 px-4 py-2 border border-gray-300 rounded-l-md"
/>

          <button className="bg-black text-white px-4 py-2 rounded-r-md">Sign up</button>
  </div>
        </div>
      </div>
    </div>
  );
}
