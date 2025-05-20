import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

export default function Carousell() {
	return (
		<div className="py-12">
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
				<Carousel>
					<div className="flex flex-col items-center justify-center gap-y-4">
						<h2 className='font-black text-center'>Facebook</h2>
						<span className="text-xl font-semibold text-black">&quot;Mon expérience a été incroyable, j&apos;ai découvert des cultures fascinantes et fait des amis pour la vie!&quot;</span>
						<Image
							src="/img/hdt.jpg"
							alt="Image 1"
							width={64}
							height={64}
							className="bg-cover bg-center rounded-full shadow-lg"
						/>
						<span className='text-gray-500'>Marie Dupond</span>
						<span className='text-gray-500'>Etudiante, Université Paris</span>
					</div>
				</Carousel>
			</div>
		</div>
	)
}