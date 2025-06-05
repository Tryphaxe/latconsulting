'use client';

import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';
import { Home, FileText, Users, MessageCircle, Settings, Pentagon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from 'flowbite-react';
import toast from 'react-hot-toast'
import axios from 'axios';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
	{ name: 'Dashboard', href: '/admin/dashboard', icon: Home },
	{ name: 'Posts', href: '/admin/posts', icon: FileText },
	{ name: 'Utilisateurs', href: '/admin/users', icon: Users },
	{ name: 'Messages', href: '/admin/messages', icon: MessageCircle },
	{ name: 'Paramètres', href: '/admin/settings', icon: Settings },
];
const userNavigation = [
	{ name: 'Profile', href: '#' },
	{ name: 'Déconnexion', href: '#' },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function LayoutWrapper({ children }) {
	const pathname = usePathname();
	const [count, setCount] = useState(0);
	const adminPath = pathname.replace('/admin/', '').split('/')[0];

	const isActive = (href) => pathname.startsWith(href);
	const fetchCount = async () => {
		try {
			const response = await axios.get('/api/sms/count');
			setCount(response.data || 0);
		} catch (error) {
			toast.error("Erreur API Récupération count");
			setCount(0);
		}
	};
	useEffect(() => {
		fetchCount();
	}, []);
	return (
		<div className="min-h-full">
			<Disclosure as="nav" className="bg-gray-50 sticky top-0 z-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<div className="shrink-0">
								<Image
									alt="Lat consulting logo"
									src="/img/laticon.png"
									width={60}
									height={60}
									className="h-8 w-auto"
								/>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									{navigation.map((item) => {
										const Icon = item.icon;
										const showCount = item.name === 'Messages';
										return (
											<Link
												key={item.name}
												href={item.href}
												aria-current={isActive(item.href) ? 'page' : undefined}
												className={classNames(
													isActive(item.href)
														? 'bg-orange-600 text-white'
														: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
													'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150'
												)}
											>
												<Icon size={16} />
												{item.name}
												{showCount && (
													<Badge color="warning" className="ms-2 rounded-full px-1.5">{count}</Badge>
												)}
											</Link>
										);
									})}
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<div style={{ backgroundImage: `url(${user.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="size-8 rounded-full center cover" />
										</MenuButton>
									</div>
									<MenuItems
										transition
										className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
									>
										{userNavigation.map((item) => (
											<MenuItem key={item.name}>
												<a
													href={item.href}
													className="block px-4 py-2 text-sm text-orange-700 data-focus:bg-gray-100 data-focus:outline-hidden"
												>
													{item.name}
												</a>
											</MenuItem>
										))}
									</MenuItems>
								</Menu>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							{/* Mobile menu button */}
							<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open main menu</span>
								<Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
								<XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
							</DisclosureButton>
						</div>
					</div>
				</div>

				<DisclosurePanel className="md:hidden">
					<div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
						{navigation.map((item) => {
							const Icon = item.icon;
							const showCount = item.name === 'Messages';
							return (
								<DisclosureButton
									key={item.name}
									as={Link}
									href={item.href}
									aria-current={isActive(item.href) ? 'page' : undefined}
									className={classNames(
										isActive(item.href)
											? 'bg-orange-600 text-white'
											: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
										'flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors duration-150'
									)}
								>
									<Icon size={16} />
									{item.name}
									{showCount && (
										<Badge color="warning" className="ms-2 rounded-full px-1.5">{count}</Badge>
									)}
								</DisclosureButton>
							);
						})}

					</div>
					<div className="border-t border-gray-700 pt-4 pb-3">
						<div className="flex items-center px-5">
							<div className="shrink-0">
								<div style={{ backgroundImage: `url(${user.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
									className="size-8 rounded-full" />
							</div>
							<div className="ml-3">
								<div className="text-base/5 font-medium text-orange-600">{user.name}</div>
								<div className="text-sm font-medium text-gray-600">{user.email}</div>
							</div>
						</div>
						<div className="mt-3 space-y-1 px-2">
							{userNavigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-orange-500"
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</div>
				</DisclosurePanel>
			</Disclosure>
			<header className="bg-white shadow-sm flex items-center gap-x-3 px-6 sm:px-18 py-5">
				<Pentagon size={16} color="gray" />
				<span className="capitalize text-gray-900 text-lg font-bold">{adminPath}</span>
			</header>
			<main>
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
			</main>
		</div>
	);
}