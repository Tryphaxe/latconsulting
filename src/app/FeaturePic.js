import React from 'react';
import { CubeIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturePic() {

	const features = [
		{
			name: "Étudiez en France, un pays riche en culture.",
		},
		{
			name: "Voyagez au Japon, une aventure unique vous attend.",
		},
		{
			name: "Découvrez l'Australie, entre plages et paysages époustouflants.",
		},
	]

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pt-4 lg:pr-8">
						<div className="lg:max-w-lg">
							<h2 className="text-base/7 font-semibold text-gray-700">Explorez</h2>
							<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
								Découvrez nos destinations d&apos;études et de voyages
							</p>
							<p className="mt-6 text-lg/8 text-gray-600">
								Nos destinations populaires offrent des expériences inoubliables.
								Que vous souhaitiez étudier à l&apos;étranger ou voyager, nous avons ce qu&apos;il vous faut.
							</p>
							<dl className="mt-10 max-w-xl space-y-3 text-base/7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<CubeIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-gray-700" />
											{feature.name}
										</dt>
									</div>
								))}
							</dl>
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
					<Image
						alt="Product screenshot"
						src="/img/impexp.jpg"
						width={2432}
						height={1442}
						className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
					/>
				</div>
			</div>
		</div>
	)
}
