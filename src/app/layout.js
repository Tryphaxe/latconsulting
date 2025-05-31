import { Afacad } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

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
      <body
        className={`${afacad.className} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
