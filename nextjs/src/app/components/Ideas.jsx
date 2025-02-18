import React from 'react'
import Image from "next/image";
import { Maximize } from 'lucide-react';

const Ideas = () => {
  return (
    <div>
        <div className=" w-1/2 mx-auto text-center my-7">
        <h1 className='text-2xl font-bold'>Ideas have a place here</h1>
        <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="split flex w-max mx-auto">
            <div className="right w-1/2">
                <Image src="/book.png" alt="book" width={500} height={200} />
            </div>
            <div className="left w-1/2 py-14 px-10">
                <p>We Make It Easy To Find The Great Design Talent, Easier... <br /><br />Road Design Handbook For The International Road... <br /><br />The Best Kept Secrets About Creative People <br /><br />We Make It Easy To Find The Great Design Talent, Easier...</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Ideas