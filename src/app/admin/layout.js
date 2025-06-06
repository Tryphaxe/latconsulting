import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
	title: "Lat Consulting",
	description: "Consulting services for your travel needs",
	icons: {
		icon: "/img/laticon.png",
		apple: "/img/laticon.png",
	},
};

export default function AdminLayout({ children }) {
	return (
		<div className="h-full bg-white">
			<LayoutWrapper>{children}</LayoutWrapper>
		</div>
	);
}