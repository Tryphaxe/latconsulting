import React from 'react'
import Animate from "../../../../components/Animate";
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <div>
      {/* HERO */}
      <Animate>
        <div className="relative isolate bg-white overflow-hidden sm:h-[40vh] h-[30vh] mx-0 sm:mx-12 mb-12 rounded-none sm:rounded-md">
          <div className="bg-[url('/img/trav.jpg')] absolute -z-10 bg-cover bg-center h-full w-full" />
          <div className=" h-full w-full bg-[#0000006b] flex items-center justify-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Nos services
              </h1>
          </div>
        </div>
      </Animate>


    </div>
  )
}