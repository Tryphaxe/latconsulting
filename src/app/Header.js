'use client'

import { useState } from 'react'
import {
	Dialog,
	DialogPanel,
	PopoverGroup,
} from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="bg-white shadow-sm rounded-b-lg sm:mx-12 mx-5 mb-5 sticky top-0 z-50">
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Lat Consulting</span>
						<Image
							alt=""
							src="/img/laticon.png"
							width={60}
							height={60}
							className="h-8 w-auto"
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="size-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<Link href="/" className="text-sm/6 font-semibold text-gray-900">
						Accueil
					</Link>
					<Link href="/pages/services" className="text-sm/6 font-semibold text-gray-900">
						Services
					</Link>
					<Link href="/pages/about" className="text-sm/6 font-semibold text-gray-900">
						A propos
					</Link>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link href="#" className="text-sm/6 font-semibold text-gray-900">
						Connexion <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-60" />
				<DialogPanel className="fixed inset-y-0 right-0 z-60 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Lat Consulting</span>
							<Image
								alt=""
								src="/img/laticon.png"
								width={60}
								height={60}
								className="h-8 w-auto"
							/>
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Link
									href="/"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Accueil
								</Link>
								<Link
									href="/pages/services"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Services
								</Link>
								<Link
									href="/pages/about"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									A propos
								</Link>
							</div>
							<div className="py-6">
								<Link
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Se connecter
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}