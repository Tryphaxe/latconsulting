import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Carousell from "./Carousel";
import Feature from "./Feature";
import FeatureDec from "./FeatureDec";
import FeaturePic from "./FeaturePic";
import FeaturePicTwo from "./FeaturePicTwo";
import Hero from "./Hero";
import Link from 'next/link';
import All from "./all";
import Call from "./pages/services/Callta";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Feature/>
      <All/>
      <FeatureDec/>
      <FeaturePic />
      <FeaturePicTwo />
      <Carousell />

      <div className="bg-[url('/img/hdt.jpg')] bg-cover bg-center h-72">
        <div className="bg-black opacity-80 px-12 flex flex-col justify-center gap-y-3 py-12 h-full">
          <span className='text-5xl font-black text-white'>Explorez le monde avec nous</span>
          <span className="text-gray-300">Contactez-nous dès aujourd&apos;hui pour commencer votre aventure à l&apos;étranger et réaliser vos rêves.</span>
          <div className="flex items-center gap-x-6">
						<Link
							href="#"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Inscription
						</Link>
						<Link href="#" className="text-sm/6 font-semibold text-gray-300">
							En savoir plus<span aria-hidden="true">→</span>
						</Link>
					</div>
        </div>
      </div>

      <Call/>

      <div className="bg-gray-100 py-12 px-12">
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                <EnvelopeIcon aria-hidden="true" className="size-6 text-black" />
              </div>
              <dt className="mt-4 text-2xl font-semibold text-black">Email</dt>
              <dd className="mt-2 text-base/7 text-gray-700">
                Contactez-nous directement.
              </dd>
              <dd className="mt-2 text-base/7 text-orange-600">
                latconsulting@gmail.com
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                <PhoneIcon aria-hidden="true" className="size-6 text-black" />
              </div>
              <dt className="mt-4 text-2xl font-semibold text-black">Téléphone</dt>
              <dd className="mt-2 text-base/7 text-gray-700">
                Nous sommes disponiblle pour vos appels.
              </dd>
              <dd className="mt-2 text-base/7 text-orange-600">
                +225 22 27 285 285
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                <MapPinIcon aria-hidden="true" className="size-6 text-black" />
              </div>
              <dt className="mt-4 text-2xl font-semibold text-black">Bureau</dt>
              <dd className="mt-2 text-base/7 text-gray-700">
                Visitez-nous à notre adresse pour plus d&apos;informations.
              </dd>
              <dd className="mt-2 text-base/7 text-orange-600">
                01 BP 1234 Abidjan 01, Côte d&apos;Ivoire
              </dd>
            </div>
          </dl>
      </div>
    </div>
  );
}
