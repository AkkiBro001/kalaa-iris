
import { FaCameraRetro } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import { IoIosImages } from "react-icons/io";

// import { FaFileImage } from "react-icons/fa6";

export const processData = [
    {
        id: 1,
        icon: FaCameraRetro,
        title: "Step 01: Click",
        desc: "Click a picture of your iris with our specialised high resolution camera",
        step: "01"
    },
    {
        id: 2,
        icon: GrSelect,
        title: "Step 02: Choose",
        desc: "Choose an effect from our specially curated gallery while we optimise your picture",
        step: "02"
    },
    {
        id: 3,
        icon: IoIosImages,
        title: "Step 03: Collect",
        desc: "Collect your unique artwork available for selection in different materials and sizes",
        step: "03"
    }
]

export const printData = [
    {
        id: '1',
        
        material_details: 
            {
                
                label: "Material Type: ",
                value: "CANVAS"
            },
            
        size_details: [
            {
                id: '1',
                type: "A5",
                size: ["8.3 x 5.3 in", "210 x 148 mm"],
                images: "/print/canvas/A5.jpg",
                
            },
        
            {
                id: '2',
                type: "A4",
                size: ["11.69 x 8.27 in", "297 x 210 mm"],
                images: "/print/canvas/A4.jpg",
                
            },
        
            {
                id: '3',
                type: "A3",
                size: ["16.5 x 11.7 in", "420 x 297 mm"],
                images: "/print/canvas/A3.jpg",
                
            }
        ],
        selected_default: 'A3'
    },

    {
        id: '2',
        
        material_details: 
            {
                
                label: "Material Type: ",
                value: "PAPER"
            },
            size_details: [
                {
                    id: '1',
                    type: "A5",
                    size: ["8.3 x 5.3 in", "210 x 148 mm"],
                    images: "/print/paper/A5.jpg",
                    
                },
            
                {
                    id: '2',
                    type: "A4",
                    size: ["11.69 x 8.27 in", "297 x 210 mm"],
                    images: "/print/paper/A4.jpg",
                    
                },
            
                {
                    id: '3',
                    type: "A3",
                    size: ["16.5 x 11.7 in", "420 x 297 mm"],
                    images: "/print/paper/A3.jpg",
                    
                }
            ],
        selected_default: 'A4'
    },

    {
        id: '3',
       
        material_details: 
            {
               
                label: "Material Type: ",
                value: "ACRYLIC"
            },
            size_details: [
                {
                    id: '1',
                    type: "A5",
                    size: ["8.3 x 5.3 in", "210 x 148 mm"],
                    images: "/print/acrylic/A5.jpg",
                    
                },
            
                {
                    id: '2',
                    type: "A4",
                    size: ["11.69 x 8.27 in", "297 x 210 mm"],
                    images: "/print/acrylic/A4.jpg",
                    
                },
            
                {
                    id: '3',
                    type: "A3",
                    size: ["16.5 x 11.7 in", "420 x 297 mm"],
                    images: "/print/acrylic/A3.jpg",
                    
                }
            ],
        selected_default: 'A5'
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
        title: "Space Effects",
        link: "/gallery/space"
    },

    {
        id: 2,
        img: "/effects-thumbnails/fire-effect.jpg",
        title: "Natrue Effects",
        link: "/gallery/nature"
    },

    {
        id: 3,
        img: "/effects-thumbnails/particle-effect.jpg",
        title: "Particle Effects",
        link: "/gallery/particle"
    },

    {
        id: 4,
        img: "/effects-thumbnails/couple-effect.jpg",
        title: "Couple Effects",
        link: "/gallery/couple"
    }
]

export type ProcessDataType = typeof processData[0]
export type PrintDataType = typeof printData[0]
export type ChooseEffectDataType = typeof chooseEffectsData[0]
export type PrintSizeDataType = typeof printSize[0]