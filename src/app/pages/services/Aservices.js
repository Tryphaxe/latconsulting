import React from 'react'
import Animate from "../../../../components/Animate";
import Image from 'next/image';
import Link from 'next/link';

const posts = [
	{
		id: 1,
		title: 'Études à l’étranger',
		description: 'Inscription, visa, logement, orientation académique… nous vous guidons à chaque étape.',
	},
	{
		id: 2,
		title: 'Voyages à l’étranger',
		description: 'Séjours touristiques, culturels ou linguistiques, pour découvrir le monde autrement.',
	},
	{
		id: 3,
		title: 'Conseils personnalisés ',
		description: 'Bénéficiez de conseils sur mesure pour vos projets d’études ou de voyages à l’étranger.',
	},
]

export default function Aservices() {
	return (
		<Animate>
			<div className="bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl lg:mx-0">
						<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Voyage</h2>
						<p className="mt-2 text-lg/8 text-gray-600">Découvrez le monde avec notre agence de voyage. Que vous rêviez d'explorer des destinations exotiques, de faire des croisières de luxe ou de partir à l'aventure, nous vous proposons des solutions sur mesure. Bénéficiez de notre expertise pour des voyages mémorables, en toute tranquillité.</p>
					</div>
					<div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-orange-200 pt-5 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{posts.map((post) => (
							<article key={post.id} className="flex max-w-xl flex-col items-start justify-between rounded-xl bg-gray-50 p-6 shadow-sm hover:bg-gray-100 transition-all">
								<div className="group relative">
									<h3 className="text-2xl/6 font-semibold text-gray-900 group-hover:text-gray-600">
										<a href={post.href}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-md/6 text-gray-600">{post.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</Animate>
	)
}