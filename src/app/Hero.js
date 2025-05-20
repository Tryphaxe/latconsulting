import Image from 'next/image';
import React from 'react';

export default function Hero() {
	return (
		<div className="relative isolate px-0 sm:px-6 pt-5 lg:px-8 bg-white overflow-hidden h-[83vh] mx-0 sm:mx-12 mb-12 rounded-none sm:rounded-md">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80 sm:blur-md blur-none sm:block hidden"
			>
				<Image
					src="/img/hdt.jpg"
					width={1000}
					height={1000}
					className="h-full w-full object-cover object-center"
					alt="Picture of the background"
				/>
			</div>
			<div className="bg-[url('/img/hdt.jpg')] absolute -z-10 bg-cover bg-center h-full w-full sm:hidden block"/>
			<div className="mx-auto max-w-2xl py-32 sm:py-12 lg:py-12 bg-[#0000006b] sm:bg-transparent">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative bg-white rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Des opportunités uniques à l&apos;international.{' '}
						<a href="#" className="font-semibold text-orange-600">
							<span aria-hidden="true" className="absolute inset-0" />
							Voir plus <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-gray-900 sm:text-7xl">
						Explorez le monde, atteignez vos ambitions.
					</h1>
					<p className="mt-8 text-lg font-medium text-pretty md:text-white text-gray-200 sm:text-xl/8">
						Voyage, études, accompagnement sur mesure.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Inscription
						</a>
						<a href="#" className="text-sm/6 font-semibold sm:text-gray-900 text-white">
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