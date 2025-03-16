import { Handshake, House, Images, Newspaper, Users } from "lucide-react";



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
        name: "Blogs",
        link: "/blogs",
        icon: Newspaper
    },

    {
        id: 5,
        name: "Franchise",
        link: "/franchise",
        icon: Handshake
    },
  ]

  export type Navlinks = typeof navigation_links[0];
  
  