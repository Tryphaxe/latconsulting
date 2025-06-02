import { Avatar } from 'flowbite-react'
import React from 'react'

export default function Page() {
	return (
		<div>
			{/* Banner */}
			<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
				<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
					<p className="text-sm/6 text-gray-900">
						<strong className="font-semibold">Message(s) reçu(s)</strong>
					</p>
				</div>
			</div>

			{/* Listes des messages */}
			<ul role="list" className="divide-y divide-gray-100">
					<li key="1" className="flex justify-between gap-x-6 py-5">
						<div className="flex min-w-0 gap-x-4">
							<Avatar rounded />
							<div className="min-w-0 flex-auto">
								<p className="text-sm/6 font-semibold text-gray-900">Nom et prenoms</p>
								<p className="mt-1 truncate text-xs/5 text-gray-500">Email</p>
								<p className="mt-1 truncate text-xs/5 text-gray-500">Message</p>
							</div>
						</div>
						<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
							<p className="text-sm/6 text-gray-900">Numéro</p>
								<p className="mt-1 text-xs/5 text-gray-500">
									Created At
								</p>
						</div>
					</li>
			</ul>
		</div>
	)
}