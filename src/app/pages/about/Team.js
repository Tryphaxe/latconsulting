import Image from "next/image"
import Animate from "../../../../components/Animate"

const people = [
	{
		name: 'Phares ATTI',
		role: 'Gérant',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Honoré DJEH',
		role: 'Associé Gérant',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Sephora PAHO',
		role: 'CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]

export default function Teams() {
	return (
		<Animate>
			<div className="bg-gray-50 py-8 sm:py-12">
				<div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
					<div className="max-w-xl">
						<h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
							Notre Team
						</h2>
						<p className="mt-6 text-lg/8 text-gray-600">
							Un groupe de professionnels passionnés, dédiés à transformer chaque projet en une réussite tangible.
						</p>
					</div>
					<ul role="list" className="grid gap-x-8 gap-y-3 sm:grid-cols-3 sm:gap-y-5 xl:col-span-2">
						{people.map((person) => (
							<li key={person.name}>
								<div className="flex items-center gap-x-6">
									<Image width={64} height={64} alt="" src={person.imageUrl} className="size-16 rounded-full" />
									<div>
										<h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
										<p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Animate>
	)
}