import { Handshake, House, Images, Users } from "lucide-react";



export const navigation_links = [
    {
        id: 1,
      name: "Home",
      link: "/home",
      icon: House
    },

    {
        id: 2,
        name: "Gallery",
        link: "/gallery",
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
        name: "Franchise",
        link: "/franchise",
        icon: Handshake
    },
  ]

  export type Navlinks = typeof navigation_links[0];
  
  