"use client";
import Link from "next/link";
import { iris_images, static_links } from "./staticLinksData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StaticLinkFooter() {
  return (
    <section className="px-6 py-10 bg-secondaryColor flex md:flex-row flex-col md:justify-center items-center gap-10">
      <article className="flex flex-col md:flex-row max-w-[700px] w-full justify-between gap-4">
        {static_links.map((staticLink) => (
          <div key={staticLink.name}>
            <h2 className="mb-4 md:mb-8">{staticLink.name}</h2>

            <ul className="flex flex-col gap-2">
              {staticLink.links.map((link) => {
                if (link.social) {
                  return (<ul className="flex text-3xl gap-4" key={link.linkName}>
                    {link.social.map((social) => (
                      <li key={social.id}>
                        <a href={social.link} className="hover:text-primaryColor">
                          <social.icon/>
                        </a>
                      </li>
                    ))}
                  </ul>);
                }
                return (
                  <li key={link.linkName} className="text-sm text-gray-400">
                    <Link href={link.link} className="hover:underline">
                      {link.linkName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </article>

      <article className="w-[250px] h-[250px] relative">
        {iris_images.slice(0, 3).map((iris, index) => (
          <motion.div
            key={index}
            className="absolute"
            //   initial={{ opacity: 1 }} // Initial opacity is 0
            animate={{ opacity: [1, 0, 0, 1] }} // Animate opacity to 1
            transition={{
              duration: 3,
              delay: index * 1, // Stagger the animations by 0.5 seconds
              repeat: Infinity,
              ease: "ease",
            }}
          >
            <Image width={500} height={500} alt="iris" src={iris} />
          </motion.div>
        ))}
      </article>
    </section>
  );
}
