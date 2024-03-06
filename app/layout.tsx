import "./globals.css";
//  Next
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
// Components
const Header = dynamic(() => import("@/app/components/Header"));
const ScrollToTop = dynamic(() => import("@/app/components/ScrollToTop"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const AOS = dynamic(() => import("@/app/components/AOS"));
// Font
const poppinsFont = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsFont.className} style={{ minHeight: "200vh" }}>
        <AOS />
        <Header />
        {children}
        <ScrollToTop className="!fixed bottom-10 right-10 z-[20]" />
        <Footer className="mt-20" />
      </body>
    </html>
  );
}
