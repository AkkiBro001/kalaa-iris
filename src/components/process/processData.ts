import { FaCameraRetro } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import { IoIosImages } from "react-icons/io";
import { IoPrint } from "react-icons/io5";
import { FaFileImage } from "react-icons/fa6";

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
                icon: IoPrint,
                label: "Type: ",
                value: "CANVAS"
            },
            {
                icon: FaFileImage,
                label: "Size: ",
                value: "A3"
            }
        ],

    },

    {
        id: 2,
        img: "/print/print-2.webp",
        details: [
            {
                icon: IoPrint,
                label: "Type: ",
                value: "PAPER"
            },
            {
                icon: FaFileImage,
                label: "Size: ",
                value: "A5"
            }
        ],

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