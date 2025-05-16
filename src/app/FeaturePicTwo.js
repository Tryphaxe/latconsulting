import React from 'react';
import { CubeIcon } from '@heroicons/react/20/solid';

export default function FeaturePicTwo() {

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<img
						alt="Product screenshot"
						src="/img/standi.jpg"
						className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[38rem]"
					/>
					<div className="lg:pt-4 lg:pr-8">
						<div className="lg:max-w-lg">
							<h2 className="text-base/7 font-semibold text-gray-700">Avantages</h2>
							<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
								Découvrez les avantages de notre service
							</p>
							<p className="mt-6 text-lg/8 text-gray-600">
								Choisir notre entreprise, c'est opter pour un soutien inégalé 24/7 et une expérience sur mesure. 
								Profitez d'un large éventail de destinations adaptées à vos envies.
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<a
									href="#"
									className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>
									En savoir plus
								</a>
								<a href="#" className="text-sm/6 font-semibold text-gray-900">
									Inscription<span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
