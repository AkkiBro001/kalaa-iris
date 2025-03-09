import type { Metadata } from "next";
import {poppins} from "./fonts/fonts"
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import MobileNav from "@/components/mobileNav/MobileNav";
import FooterBar from "@/components/footer/footer";
import StaticLinkFooter from "@/components/staticLinkFooter.tsx/staticLinkFooter";
import FloatingWhatsApp from "@/components/floating-whatsapp/floating-whatsapp";
import { Toaster } from "@/components/ui/toaster"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"



export const metadata: Metadata = {
  title: "KALAA IRIS | Iris Photography India",
  description: "Kalaa Iris is India's first iris photography studio, Discover the captivating beauty of your iris with Kalaa Iris. We combine art, science, and technology to transform the unique patterns of your eye into breathtaking works of art.",
  icons: [{url: "/fav-icon.png", sizes: "any", type: 'image/png'}],
  keywords: "India's first dedicated Iris Photography Studio, Premium Iris Photography in India, Unique Artwork for Decor, Customised gifts, kala iris, kalaa iris, iris india, iris photography india, kalaa iris india, kala iris india, iris bengaluru, iris photography studio, kalaa iris bangalore, iris bangalore, iris photography bangalore, iris photography, eye photography india, eye photography bengaluru, eye photo, eye art, unique iris patterns, personal photography, artistic iris captures, iris effects",
  openGraph: {
    title: "KALAA IRIS | Iris Photography India",
    description: "Kalaa Iris is India's first iris photography studio, Discover the captivating beauty of your iris with Kalaa Iris. We combine art, science, and technology to transform the unique patterns of your eye into breathtaking works of art.",
    url: "https://kalaairis.com/",
  },
  alternates: {
    canonical: "https://kalaairis.com/about-us",
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
        className={`${poppins.variable} antialiased bg-black text-white dark`}
      >
        <main className="w-full max-w-[3000px] mx-auto min-h-[100vh] relative flex flex-col">
            <ContextMenu>
            <ContextMenuTrigger>
            <FloatingWhatsApp />
            <Toaster/>
            <Navigation />
            {children}
            <StaticLinkFooter />
            <FooterBar />
            <MobileNav /> 
            </ContextMenuTrigger>
            <ContextMenuContent className="bg-red-100 border-red-500 hover:!bg-red-100 focus-within:bg-red-100">
            <ContextMenuItem className="hover:!bg-red-100 p-4 bg-red-100 focus-within:bg-red-100 flex gap-2">
              <b>⚠️ Alert:</b><span>Content is protected</span>
            </ContextMenuItem>
            </ContextMenuContent>
            </ContextMenu>
         </main>
        
        
      </body>
    </html>
  );
}
