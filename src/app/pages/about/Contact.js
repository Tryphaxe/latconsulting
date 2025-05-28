import { EnvelopeIcon, GlobeAltIcon, MapIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import Animate from '../../../../components/Animate'

const features = [
	{
		name: 'Localisation',
		description:
			'Bureau de la poste, Cocody; 1er Etage, dernier bureau à gauche',
		icon: MapIcon,
	},
	{
		name: 'Email',
		description:
			'latconsulting57@gmail.com',
		icon: EnvelopeIcon,
	},
	{
		name: 'Contacts',
		description:
			'+225 01 001 809 73 | +225 07 160 538 67',
		icon: PhoneArrowDownLeftIcon,
	},
]

export default function Contact() {
	return (
		<Animate>
			<div className="bg-white py-8 sm:py-12">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base/7 font-semibold text-orange-600">Informations</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
							Comment nous joindre ?
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
							{features.map((feature) => (
								<div key={feature.name} className="relative pl-16">
									<dt className="text-base/7 font-semibold text-gray-900">
										<div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600">
											<feature.icon aria-hidden="true" className="size-6 text-white" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
					<div className="mx-auto mt-4 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-4xl h-[400px] rounded-3xl shadow-lg overflow-hidden border border-gray-200">
						<iframe
							title="Carte de notre agence à Abidjan"
							width="100%"
							height="100%"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.487231465772!2d-3.9904536258944003!3d5.342337594636303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebf5ecc8042b%3A0x6b5977fc88ad95f0!2sBureau%20de%20la%20Poste%2C%20ABIDJAN%2022!5e0!3m2!1sfr!2sci!4v1719677053754!5m2!1sfr!2sci"
						>
						</iframe>
					</div>
				</div>
			</div>
		</Animate>
	)
}