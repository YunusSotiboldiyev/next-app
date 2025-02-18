"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="opacity-80 px-6 text-whitew bg-white py-4 flex justify-between items-center sticky top-0 z-2">
      <div className="flex items-center"> 
        <Link href="/" className="text-black">
        <Image src="/IMAGE.png" alt="Logo" width={100} height={100} className="mr-2" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-black uppercase">all products</Link>
        <Link href="/Solutions" className="hover:text-black uppercase">Solutions</Link>
        <Link href="/mobile-app" className="hover:text-black uppercase">About</Link>
        <Link href="/contact" className="hover:text-black uppercase">support</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/notifications">
        <Search className="text-black hover:text-black cursor-pointer" size={24} />
        </Link>

        <Link href="/profile">
        < ShoppingCart className="text-black hover:text-black cursor-pointer" size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
