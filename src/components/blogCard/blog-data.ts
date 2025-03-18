import { compareDesc } from "date-fns";
import {
    blog_1_1, blog_1_2, blog_1_3,
    blog_2_1, blog_2_2, blog_2_3, blog_2_title,
    blog_3_1,
    blog_3_2,
    blog_3_3,
    blog_3_4,
    blog_3_title,
    blog_4_1, blog_4_2, blog_4_3, blog_4_4, blog_4_title
} from "./blog-images"

export const blog_data = [
    {
        id: "1",
        images: [blog_1_1, blog_1_2, blog_1_3],
        date: "12-21-2024",
        image_grid_area_name: ["blog_1_1", "blog_1_2", "blog_1_3"],
        grid_template_areas: `"blog_1_2 blog_1_2 blog_1_1 blog_1_1 blog_1_1"
                              "blog_1_2 blog_1_2 blog_1_1 blog_1_1 blog_1_1"
                              "blog_1_3 blog_1_3 blog_1_1 blog_1_1 blog_1_1"
                              "blog_1_3 blog_1_3 blog_1_1 blog_1_1 blog_1_1"`,
        grid_template_column: "1fr 1fr 1fr 1fr 1fr",
        title: "Iris Photography: Where Art meets Science",
        is_html_body: false,
        blog_banner_image: null,
        body: [
            "Iris photography blends aesthetic beauty with biological significance. Known as artistic iris photography, this genre goes beyond simple visual appeal, capturing distinct personal identity traits that hold value in fields like ophthalmology and biometric security. The intricate patterns of the iris not only captivate the eye, but also contain valuable data for scientific exploration.",

            "To capture these delicate details, a photographer must skillfully balance technical precision with creative artistry.",

            "In the world of scientific research, optical coherence tomography (OCT) is a cutting-edge imaging tool that produces high-resolution images of the eye, making it crucial for both medical diagnostics and security technologies. OCT scans offer vital insights into eye health and play a key role in developing advanced iris recognition systems. For artistic eye photography, this same level of detail can transform a simple portrait into a breathtaking piece of art, highlighting the unique colors and patterns of an individual’s iris. ",

            "The challenge lies in merging the clinical accuracy required for scientific purposes with the artistic vision necessary for creative work. Both photographers and researchers need a thorough understanding of eye anatomy, expertise with imaging tools, and an artist’s perspective to create imagery that serves both scientific and artistic objectives. It’s at this intersection that iris photography reaches its full potential, bridging the objective world of science with the subjective realm of art.",

            "So, this was some interesting information about the Art & Science Behind Iris Photography.",

            "Did you know – At Kalaa Iris, Engineers, Artists and photographers together have indigenously developed World’s most compact Iris Photography set-up! "
        ],

        card_content: "Iris photography blends aesthetic beauty with biological significance. Known as artistic iris photography, this genre goes beyond simple visual appeal, capturing distinct personal identity traits that hold value in fields like ophthalmology and biometric security. The intricate patterns of the iris not only captivate the eye, but also contain valuable data for scientific exploration.",


    },

    {
        id: "2",
        images: [blog_2_1, blog_2_2, blog_2_3],
        date: "12-28-2024",
        image_grid_area_name: ["blog_2_1", "blog_2_2", "blog_2_3"],
        grid_template_areas: `
                              "blog_2_1 blog_2_1 blog_2_1 blog_2_1 blog_2_1 blog_2_1"
                              "blog_2_1 blog_2_1 blog_2_1 blog_2_1 blog_2_1 blog_2_1"
                              "blog_2_1 blog_2_1 blog_2_1 blog_2_1 blog_2_1 blog_2_1"

                              "blog_2_2 blog_2_2 blog_2_2 blog_2_3 blog_2_3 blog_2_3"
                              "blog_2_2 blog_2_2 blog_2_2 blog_2_3 blog_2_3 blog_2_3"
                              `,
        grid_template_column: "1fr 1fr 1fr 1fr 1fr 1fr",
        title: "Why Iris Photography is the Perfect Personalized Gift!",
        is_html_body: false,
        blog_banner_image: blog_2_title, 
        body: [
            {
                title: "Unique: ",
                body: "No two irises are the same on this planet. No, not even with identical twins and also, not even with your other eye. The intricate patterns, rings, and grooves are shaped by genetics, making them a symbol of genetic individuality. So, this makes the gift truly one in billions."
            },

            {
                title: "Personalized: ",
                body: "Iris art is a unique representation of your individual personality. You can add their dear name or special quote in the frame which will amplify the effect multifold."
            },

            {
                title: "Intricate: ",
                body: "Iris art highlights the detailed patterns and vivid colors of your iris. So, it’s just not another frame on your wall. It’s a depiction of intricate patterns, textures and colors."
            },
           
            {
                title: "Sentimental: ",
                body: "Iris art makes for a thoughtful and meaningful gift for someone special on a memorable occasion. It stays with you forever as a memory even when the person is not with you."
            },

            {
                title: "Decorative: ",
                body: "Adding a beautiful artwork to someone’s home décor which they will cherish forever makes the gift unforgettable."
            },

           
           
            "Moreover, getting a family Iris artwork frame not only shows the genetic connection at a glance but also proves to be a unique memory of the elderly.",

            "Did you know - Kalaa Iris is India’s first dedicated Iris Photography Studio! Get in touch today to create a customized artwork. "
        ],

        card_content: "No two irises are the same on this planet. No, not even with identical twins and also, not even with your other eye. The intricate patterns, rings, and grooves are shaped by genetics, making them a symbol of genetic individuality. So, this makes the gift truly one in billions.",


    },

    {
        id: "3",
        images: [blog_3_1, blog_3_2, blog_3_3, blog_3_4],
        date: "01-06-2025",
        image_grid_area_name: ["blog_3_1", "blog_3_2", "blog_3_3", "blog_3_4"],
        grid_template_areas: `"blog_3_1 blog_3_1 blog_3_1 blog_3_2 blog_3_2"
                              "blog_3_1 blog_3_1 blog_3_1 blog_3_2 blog_3_2"
                              "blog_3_1 blog_3_1 blog_3_1 blog_3_2 blog_3_2"
                              "blog_3_4 blog_3_4 blog_3_3 blog_3_3 blog_3_3"
                              "blog_3_4 blog_3_4 blog_3_3 blog_3_3 blog_3_3"
                              "blog_3_4 blog_3_4 blog_3_3 blog_3_3 blog_3_3"`,
        grid_template_column: "1fr 1fr 1fr 1fr 1fr",
        image_classes: "object-contain object-center bg-white",
        title: "How to Select the Perfect Frame for Your Iris Print",
        is_html_body: true,
        blog_banner_image: blog_3_title,
        body: [
            
        ],

        card_content: "When choosing a frame for your iris print, focus on one that complements the colors and details of the iris. Opt for simple, sleek designs with neutral tones like black, white, or soft wood finishes that allow the intricate patterns of the iris to stand out. Additionally, take into account the overall vibe of your space and pick a frame that suits the atmosphere you want to create—be it modern, minimalist, or traditional.",


    },


    {
        id: "4",
        images: [blog_4_1, blog_4_2, blog_4_3, blog_4_4],
        date: "01-12-2025",
        image_grid_area_name: ["blog_4_1", "blog_4_2", "blog_4_3", "blog_4_4"],
        grid_template_areas: `"blog_4_1 blog_4_1 blog_4_1 blog_4_2 blog_4_2 blog_4_2"
                              "blog_4_1 blog_4_1 blog_4_1 blog_4_2 blog_4_2 blog_4_2"
                              "blog_4_3 blog_4_3 blog_4_3 blog_4_4 blog_4_4 blog_4_4"
                              "blog_4_3 blog_4_3 blog_4_3 blog_4_4 blog_4_4 blog_4_4"`,
        grid_template_column: "1fr 1fr 1fr 1fr 1fr 1fr",
        title: "A Biological masterpiece within our Eyes",
        is_html_body: false,
        blog_banner_image: blog_4_title,
        body: [
            "How has nature managed to create billions of unique iris? The answer to this is complex and fascinating. Human Iris starts to develop in the womb in 3rd-4th month of pregnancy. Genetic code plays a vital role in the overall structure of the iris. However, this isn’t the only factor involved here. Complicated developmental process and environmental factors also influence the overall appearance of the iris.",

            "In the development process of an iris, tissues fold, expand and contract resulting in the intricate ridges, trenches and flower shaped patterns. Since this process is random, the outcome of this is pretty unique. Even with identical twins who share nearly similar DNA, don’t share the iris pattern. While the tissue in the iris develops and the pigment is deposited, variations do occur. Other factors like position of fetus or minor variations in blood flow also influence the final result. ",

            "This is nature’s own way of ensuring individuality in appearance.",

            "Capture the beauty of your genetic individuality with Kalaa Iris and create an ‘eye’conic masterpiece, quite literally!"
        ],

        card_content: "How has nature managed to create billions of unique iris? The answer to this is complex and fascinating. Human Iris starts to develop in the womb in 3rd-4th month of pregnancy. Genetic code plays a vital role in the overall structure of the iris. However, this isn’t the only factor involved here. Complicated developmental process and environmental factors also influence the overall appearance of the iris.",


    },
].sort((a,b) => compareDesc(new Date(a.date), new Date(b.date)))

export type blog_data_type = typeof blog_data[0];