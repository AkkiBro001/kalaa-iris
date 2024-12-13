export const gallery_banner_data = [
    {
        id: 'gallery-1',
        img: { desktop: "/gallery/banners/single-terra-forest-effect_desktop.jpg", mobile: "/gallery/banners/single-terra-forest-effect_mobile.jpg" },
        position: 1,
    },
    {
        id: 'gallery-2',
        img: { desktop: "/gallery/banners/single-nebula-exploding-effect_desktop.jpg", mobile: "/gallery/banners/single-nebula-exploding-effect_mobile.jpg" },
        position: 2,
    },
    {
        id: 'gallery-3',
        img: { desktop: "/gallery/banners/single-foggy-effect_desktop.jpg", mobile: "/gallery/banners/single-foggy-effect_mobile.jpg" },
        position: 3,
    },
    {
        id: 'gallery-4',
        img: { desktop: "/gallery/banners/single-explosion-scaled-effect_desktop.jpg", mobile: "/gallery/banners/single-explosion-scaled-effect_mobile.jpg" },
        position: 4,
    }
]

const icon_base_url = "/gallery/icons/";
const img_base_url = "/gallery/images/";

export const category_details = [
    {
        short_code: "all",
        name: "All",
        img: `${icon_base_url}all.png`,
        effects: []
    },

    {
        short_code: "nature",
        name: "Nature",
        img: `${icon_base_url}nature.png`,
        effects: [
            {
                name: "Single Forest Effect",
                short_code: "S_NAT_01",
                img: `${img_base_url}nature/single-forest-effect.jpg`
            },
            {
                name: "Single Lava Effect",
                short_code: "S_NAT_02",
                img: `${img_base_url}nature/single-lava-effect.jpg`
            },
            {
                name: "Single Water Splash Effect",
                short_code: "S_NAT_03",
                img: `${img_base_url}nature/single-water-splash-effect.jpg`
            },
            {
                name: "Single Foggy Effect",
                short_code: "S_NAT_04",
                img: `${img_base_url}nature/single-foggy-effect.jpg`
            },
        ]
    },

    {
        short_code: "space",
        name: "Space",
        img: `${icon_base_url}space.png`,
        effects: [
            {
                name: "Single Nebula Exploding Effect",
                short_code: "S_SPA_01",
                img: `${img_base_url}space/single-nebula-exploding-effect.jpg`
            },
            {
                name: "Single Galaxy Effect",
                short_code: "S_SPA_02",
                img: `${img_base_url}space/single-galaxy-effect.jpg`
            },
            {
                name: "Single Rosette Effect",
                short_code: "S_SPA_03",
                img: `${img_base_url}space/single-rosette-effect.jpg`
            }
        ]
    },

    {
        short_code: "explosion",
        name: "Explosion",
        img: `${icon_base_url}explosion.png`,
        effects: [
            {
                name: "Single Explosion Effect",
                short_code: "S_EXP_01",
                img: `${img_base_url}explosion/single-explosion-effect.jpg`
            },

        ]
    },

    {
        short_code: "particle",
        name: "Particle",
        img: `${icon_base_url}particle.png`,
        effects: [
            {
                name: "Single Bubble Effect",
                short_code: "S_PAR_01",
                img: `${img_base_url}particle/single-bubble-effect.jpg`
            },
            {
                name: "Single Dust Effect",
                short_code: "S_PAR_02",
                img: `${img_base_url}particle/single-dust-effect.jpg`
            }
        ]
    },

    {
        short_code: "couple",
        name: "Couple",
        img: `${icon_base_url}couple.png`,
        effects: [
            {
            name: "Couple Merge Effect",
            short_code: "COU_01",
            img: `${img_base_url}couple/couple-merge-effect.jpg`
        },

        {
            name: "Couple Infinity Effect",
            short_code: "COU_02",
            img: `${img_base_url}couple/couple-infinity-effect.jpg`
        }
    ]
    },

    // {
    //     short_code: "family",
    //     name: "Family",
    //     img: `${icon_base_url}family.png`,
    //     effects: []
    // }
]


export const all_effects_count = category_details.reduce((count, value) => {
    count += value.effects.length
    return count;
}, 0)

export const all_effects = category_details.map((value) => {
    return value.effects
}).flat()

export const category_menu = category_details.map(category => {
    return {name: category.name, short_code: category.short_code, count: category.short_code === "all" ? all_effects_count : category.effects.length}
})


export const selected_gallery = (code: string) => {
    return category_details.find(category => category.short_code === code) 
}

export type CategoryDetailsProps = typeof category_details[0];
export type CategoryMenuProps = typeof category_menu[0]