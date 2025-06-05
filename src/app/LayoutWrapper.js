'use client';

import { usePathname } from 'next/navigation';
import Header from "./Header";
import { Footerr } from "./Footer";
import Link from 'next/link';

export default function LayoutWrapper({ children }) {
	const pathname = usePathname();
	const isAdminPage = pathname.startsWith('/admin');

	return (
		<>
			{!isAdminPage && <Header />}
			{children}
			{!isAdminPage && <Footerr />}
		</>
	);
}
