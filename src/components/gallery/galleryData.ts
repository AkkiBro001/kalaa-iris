export const gallery_banner_data = [
    {
        id: 'gallery-1',
        img: {desktop: "/gallery/banners/single-terra-forest-effect_desktop.jpg", mobile: "/gallery/banners/single-terra-forest-effect_mobile.jpg"},
        position: 1,
    },
    {
        id: 'gallery-2',
        img: {desktop: "/gallery/banners/single-nebula-exploding-effect_desktop.jpg", mobile: "/gallery/banners/single-nebula-exploding-effect_mobile.jpg"},
        position: 2,
    },
    {
        id: 'gallery-3',
        img: {desktop: "/gallery/banners/single-foggy-effect_desktop.jpg", mobile: "/gallery/banners/single-foggy-effect_mobile.jpg"},
        position: 3,
    },
    {
        id: 'gallery-4',
        img: {desktop: "/gallery/banners/single-explosion-scaled-effect_desktop.jpg", mobile: "/gallery/banners/single-explosion-scaled-effect_mobile.jpg"},
        position: 4,
    }
]

export const category_details = [
    {
        short_code: "all",
        name: "All",
        img: "/gallery/icons/all.png"
    },

    {
        short_code: "nature",
        name: "Nature",
        img: "/gallery/icons/nature.png"
    },

    {
        short_code: "couple",
        name: "Couple",
        img: "/gallery/icons/couple.png"
    },

    {
        short_code: "family",
        name: "Family",
        img: "/gallery/icons/family.png"
    }
]

export type CategoryDetailsProps = typeof category_details[0]