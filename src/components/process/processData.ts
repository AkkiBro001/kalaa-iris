import { FaCameraRetro } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import { IoIosImages } from "react-icons/io";

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

export type ProcessDataType = typeof processData[0]