"use client";
import Link from "next/link";
import Image from "next/image"

export function Footerr() {
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-orange-600 text-white">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <div className="flex justify-center mb-8">
          <Link href="/" className="">
            <span className="sr-only">Lat Consulting</span>
            <Image
              alt=""
              src="/img/laticon.png"
              width={100}
              height={100}
              className="h-16 w-auto"
            />
          </Link>
        </div>
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Transformez vos projets de voyage en réussite !
        </h2>
        <Link
          href="#catalogue"
          className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-orange-800 rounded-full shadow-xl border border-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-999 focus:ring-orange-500"
        >
          Commencer
        </Link>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <Link href="/">Accueil</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/pages/services">Services</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/pages/about">A propos</Link>
            </div>
            {/* <div className="px-5 py-2">
              <Link href="#">Terms</Link>
            </div>
            <div className="px-5 py-2">
              <Link href="#">Twitter</Link>
            </div> */}
          </nav>
          <p className="mt-7 text-base">© 2022 Defta, LC</p>
          <Link href="/pages/auth" className="mt-2 text-base">---&---</Link>
        </div>
      </div>
    </footer>
  );
}
