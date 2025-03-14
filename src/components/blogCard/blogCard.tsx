"use client";
import Blog_Image_Section from "./components/blog-image-section";
import Blog_Details_Section from "./components/blog-details-section";
import { blog_data_type } from "./blog-data";
import { motion } from "framer-motion";

export default function BlogCard(props: blog_data_type) {
  return (
    <motion.div
    className="blog-card flex sm:flex-row flex-col gap-6 border border-white/80 rounded-xl p-4"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
    >
      <Blog_Image_Section {...props} />
      <Blog_Details_Section {...props} />
    </motion.div>
  );
}
