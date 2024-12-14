import type { Metadata } from "next";
import {poppins} from "./fonts/fonts"
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import MobileNav from "@/components/mobileNav/MobileNav";
import FooterBar from "@/components/footer/footer";
import StaticLinkFooter from "@/components/staticLinkFooter.tsx/staticLinkFooter";
import FloatingWhatsApp from "@/components/floating-whatsapp/floating-whatsapp";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "KALAA IRIS | WE CREATE ‘EYE’ CONIC ART",
  description: "Discover the captivating beauty of your iris with Kalaa Iris. We combine art, science, and technology to transform the unique patterns of your eye into breathtaking works of art.",
  icons: [{url: "/fav-icon.png", sizes: "any", type: 'image/png'}],
  keywords: "iris photography, eye art, unique iris patterns, personal photography, artistic iris captures, iris effects",
  openGraph: {
    title: "KALAA IRIS | WE CREATE ‘EYE’ CONIC ART",
    description: "Discover the captivating beauty of your iris with Kalaa Iris. We combine art, science, and technology to transform the unique patterns of your eye into breathtaking works of art.",
    url: "https://kalaairis.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        <main className="w-full max-w-[1980px] mx-auto border-x border-hairlineColor min-h-[100vh] relative flex flex-col">
          <FloatingWhatsApp />
          <Toaster/>
          <Navigation />
          {children}
          <StaticLinkFooter />
          <FooterBar />
          <MobileNav /> 
       </main>
      </body>
    </html>
  );
}
