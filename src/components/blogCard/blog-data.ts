import {blog_1_1, blog_1_2, blog_1_3} from "./blog-images"

export const blog_data = [
    {
        id: "1",
        images: [blog_1_1, blog_1_2, blog_1_3],
        date: "21st Dec 2024",
        image_grid_area_name: ["blog_1_1", "blog_1_2", "blog_1_3"],
        grid_template_areas: `"blog_1_2 blog_1_2 blog_1_1 blog_1_1 blog_1_1"
                              "blog_1_2 blog_1_2 blog_1_1 blog_1_1 blog_1_1"
                              "blog_1_3 blog_1_3 blog_1_1 blog_1_1 blog_1_1"
                              "blog_1_3 blog_1_3 blog_1_1 blog_1_1 blog_1_1"`,
        grid_template_column: "1fr 1fr 1fr 1fr 1fr",
        title: "Iris Photography: Where Art meets Science",
        body: [
            "Iris photography blends aesthetic beauty with biological significance. Known as artistic iris photography, this genre goes beyond simple visual appeal, capturing distinct personal identity traits that hold value in fields like ophthalmology and biometric security. The intricate patterns of the iris not only captivate the eye, but also contain valuable data for scientific exploration.",

            "To capture these delicate details, a photographer must skillfully balance technical precision with creative artistry.",

            "In the world of scientific research, optical coherence tomography (OCT) is a cutting-edge imaging tool that produces high-resolution images of the eye, making it crucial for both medical diagnostics and security technologies. OCT scans offer vital insights into eye health and play a key role in developing advanced iris recognition systems. For artistic eye photography, this same level of detail can transform a simple portrait into a breathtaking piece of art, highlighting the unique colors and patterns of an individual’s iris. ",

            "The challenge lies in merging the clinical accuracy required for scientific purposes with the artistic vision necessary for creative work. Both photographers and researchers need a thorough understanding of eye anatomy, expertise with imaging tools, and an artist’s perspective to create imagery that serves both scientific and artistic objectives. It’s at this intersection that iris photography reaches its full potential, bridging the objective world of science with the subjective realm of art.",

            "So, this was some interesting information about the Art & Science Behind Iris Photography.",

            "Did you know – At Kalaa Iris, Engineers, Artists and photographers together have indigenously developed World’s most compact Iris Photography set-up! "
        ],

        card_content: "Iris photography blends aesthetic beauty with biological significance. Known as artistic iris photography, this genre goes beyond simple visual appeal, capturing distinct personal identity traits that hold value in fields like ophthalmology and biometric security. The intricate patterns of the iris not only captivate the eye, but also contain valuable data for scientific exploration.",

        social_links: [
            {
                id: "instagram",
                url: "/",
            }
        ]

    }
]

export type blog_data_type = typeof blog_data[0];