import Image from 'next/image';
import React from 'react';

export default function Hero() {
	return (
		<div className="relative isolate bg-white overflow-hidden sm:h-[83vh] h-[100vh] mx-0 sm:mx-12 mb-12 rounded-none sm:rounded-md">
			<div className="bg-[url('/img/trav.jpg')] absolute -z-10 bg-cover bg-center h-full w-full"/>
			<div className=" h-full w-full py-32 sm:py-12 lg:py-12 bg-[#0000006b]">
				<div className="hidden mx-auto max-w-2xl sm:mb-8 sm:flex sm:justify-center">
					<div className="relative bg-white rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Des opportunités uniques à l&apos;international.{' '}
						<a href="#" className="font-semibold text-orange-600">
							<span aria-hidden="true" className="absolute inset-0" />
							Voir plus <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center mx-auto max-w-2xl">
					<h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
						Explorez le monde, atteignez vos ambitions.
					</h1>
					<p className="mt-8 text-lg font-medium text-pretty md:text-white text-gray-200 sm:text-xl/8">
						Voyage, études, accompagnement sur mesure.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
						>
							Inscription
						</a>
						<a href="#" className="text-sm/6 font-semibold text-gray-200">
							En savoir plus<span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
		</div>
	)
}