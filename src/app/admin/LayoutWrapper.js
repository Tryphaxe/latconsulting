"use client"

import { usePathname } from 'next/navigation';
import { Pentagon } from 'lucide-react';
import App from './app';

export default function LayoutWrapper({ children }) {
	const pathname = usePathname();
	const adminPath = pathname.replace('/admin/', '').split('/')[0];
	return (
		<>
			<div className="min-h-full">
				<App />
				<header className="bg-white shadow-sm flex items-center gap-x-3 px-6 sm:px-18 py-5">
					<Pentagon size={16} color="gray" />
					<span className="capitalize text-gray-900 text-lg font-bold">{adminPath}</span>
				</header>
				<main>
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
				</main>
			</div>
		</>
	);
}