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
  description: "Kalaa Iris – where art, science, engineering and emotion converge to celebrate the magic that lies within your gaze.",
  icons: [{url: "/fav-icon.png", sizes: "any", type: 'image/png'}],

  openGraph: {
    title: "KALAA IRIS | WE CREATE ‘EYE’ CONIC ART",
    description: "Welcome to Kalaa Iris – Where Art meets vision!",
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
