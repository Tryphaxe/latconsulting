import { Afacad } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lat Consulting",
  description: "Consulting services for your travel needs",
  icons: {
    icon: "/img/laticon.png",
    apple: "/img/laticon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body
        className={`${afacad.className} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <div className="sm:hidden flex fixed right-0 bottom-0 z-50 m-4">
          <Link
            href="https://wa.me/message/FQLHZGTUGRWSO1/"
            className='shadow-lg animate-bounce text-gray-700 bg-gray-50 hover:bg-green-50 hover:text-gray-900 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150'
          >
            <i className="fa-brands fa-whatsapp" style={{ color: 'rgb(10, 128, 8)' }} />
            Whatsapp
          </Link>
        </div>
        <Toaster
          position="bottom-right"
        />
      </body>
    </html>
  );
}
