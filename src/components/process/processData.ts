
import { FaCameraRetro } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import { IoIosImages } from "react-icons/io";

// import { FaFileImage } from "react-icons/fa6";

export const processData = [
    {
        id: 1,
        icon: FaCameraRetro,
        title: "Step 01: Click",
        desc: "We take your photo of your iris using specialized high resolution camera.",
        step: "01"
    },
    {
        id: 2,
        icon: GrSelect,
        title: "Step 02: Choose",
        desc: "We carefully optimize the photo, keeping original colors and pattern.",
        step: "02"
    },
    {
        id: 3,
        icon: IoIosImages,
        title: "Step 03: Collect",
        desc: "We print your new art from a selection of size and quality materials",
        step: "03"
    }
]

export const printData = [
    {
        id: 1,
        img: "/print/print-1.webp",
        details: [
            {
                
                label: "Material Type: ",
                value: "CANVAS"
            },
            
        ],

    },

    {
        id: 2,
        img: "/print/print-2.webp",
        details: [
            {
                
                label: "Material Type: ",
                value: "PAPER"
            }
        ],

    },

    {
        id: 3,
        img: "/print/print-1.webp",
        details: [
            {
               
                label: "Material Type: ",
                value: "ACRALIC"
            }
        ],

    }
]

export const printSize = [
    {
        id: '1',
        type: "A5",
        size: ["8.3 x 5.3 in", "210 x 148 mm"],
        images: "/print/A5.jpg",
    },

    {
        id: '2',
        type: "A4",
        size: ["11.69 x 8.27 in", "297 x 210 mm"],
        images: "/print/A4.jpg",
    },

    {
        id: '3',
        type: "A3",
        size: ["16.5 x 11.7 in", "420 x 297 mm"],
        images: "/print/A3.jpg",
    }
]

export const chooseEffectsData = [
    {
        id: 1,
        img: "/effects-thumbnails/galaxy-effect.jpg",
        title: "Single Galaxy Effects",
        link: "#"
    },

    {
        id: 2,
        img: "/effects-thumbnails/nature-effect.jpg",
        title: "Single Natrue Effects",
        link: "#"
    },

    {
        id: 3,
        img: "/effects-thumbnails/fire-effect.jpg",
        title: "Single Fire Effects",
        link: "#"
    }
]

export type ProcessDataType = typeof processData[0]
export type PrintDataType = typeof printData[0]
export type ChooseEffectDataType = typeof chooseEffectsData[0]
export type PrintSizeDataType = typeof printSize[0]