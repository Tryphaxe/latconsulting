import React from 'react';
import { CubeIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import Animate from "../../components/Animate";

export default function FeaturePicTwo() {

	return (
		<Animate>
			<div className="overflow-hidden bg-blue-50 py-24 sm:py-12">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<Image
							alt=""
							src="/img/standi.jpg"
							width={800}
							height={800}
							className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem]"
						/>
						<div className="lg:pt-4 lg:pr-8">
							<div className="lg:max-w-lg">
								<h2 className="text-base/7 font-semibold text-gray-700">Avantages</h2>
								<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
									Découvrez les avantages de notre service
								</p>
								<p className="mt-6 text-lg/8 text-gray-600">
									Choisir notre entreprise, c&apos;est opter pour un soutien inégalé 24/7 et une expérience sur mesure.
									Profitez d&apos;un large éventail de destinations adaptées à vos envies.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<Link
										href="#"
										className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
									>
										En savoir plus
									</Link>
									<Link href="#" className="text-sm/6 font-semibold text-gray-900">
										Inscription<span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Animate>
	)
}
