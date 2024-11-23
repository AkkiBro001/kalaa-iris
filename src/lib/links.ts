import { Handshake, House, Images, Users } from "lucide-react";



export const navigation_links = [
    {
        id: 1,
      name: "Home",
      link: "/",
      icon: House
    },

    {
        id: 2,
        name: "Gallary",
        link: "/gallary",
        icon: Images
    },

    {
        id: 3,
        name: "About Us",
        link: "/about-us",
        icon: Users
    },

    {
        id: 4,
        name: "Francise",
        link: "/francise",
        icon: Handshake
    },
  ]

  export type Navlinks = typeof navigation_links[0];
  
  