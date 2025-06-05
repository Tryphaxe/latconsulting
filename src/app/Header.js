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
import { Button } from 'flowbite-react'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const { pathname } = typeof window !== "undefined" ? window.location : { pathname: "/" };

	return (
		<header className="bg-white shadow-sm rounded-b-lg sm:mx-12 mx-5 mb-5 sticky top-0 z-50">
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
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
					<Link
						href="/"
						className={`text-md font-semibold text-gray-900 border-b ${pathname === "/" ? "border-orange-500" : "border-transparent"} pb-1 transition-all`}
					>
						Accueil
					</Link>
					<Link
						href="/pages/services"
						className={`text-md font-semibold text-gray-900 border-b ${pathname === "/pages/services" ? "border-orange-500" : "border-transparent"} pb-1 transition-all`}
					>
						Services
					</Link>
					<Link
						href="/pages/about"
						className={`text-md font-semibold text-gray-900 border-b ${pathname === "/pages/about" ? "border-orange-500" : "border-transparent"} pb-1 transition-all`}
					>
						A propos
					</Link>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href=""
						className='text-gray-700 bg-gray-50 hover:bg-green-50 hover:text-gray-900 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150'
					>
						<i className="fa-brands fa-whatsapp" style={{ color: 'rgb(10, 128, 8)' }} />
						Whatsapp
					</Link>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-60" />
				<DialogPanel className="fixed inset-y-0 right-0 z-60 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
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
									className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-orange-100 ${pathname === "/" ? "bg-orange-500 text-white" : ""}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									Accueil
								</Link>
								<Link
									href="/pages/services"
									className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-orange-100 ${pathname === "/pages/services" ? "bg-orange-500 text-white" : ""}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									Services
								</Link>
								<Link
									href="/pages/about"
									className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-orange-100 ${pathname === "/pages/about" ? "bg-orange-500 text-white" : ""}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									A propos
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}