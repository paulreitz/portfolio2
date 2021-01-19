export default [
    {
        title: 'Portfolio',
        thumbnail: 'portfolio.jpg',
        images: [
            'portfolio1.jpg',
            'portfolio2.jpg',
            'portfolio3.jpg'
        ],
        description: 'A place for me to showcase my work',
        why: 'This is both for practice and as a single location to place relevant information about my work history.'
    },
    {
        title: 'Color Theme Generator',
        link: 'https://pfr-color-wheel.herokuapp.com/',
        thumbnail: 'color.jpg',
        images: [
            'color1.jpg',
            'color2.jpg',
            'color3.jpg',
            'color4.jpg'
        ],
        description: 'A Theme creator for web apps that outputs variables for both Sass and Less. The theme for this portfolio was created with this tool',
        why: `Most color wheels available on the web (even the premium ones) are intended more for designers and artists. 
        It can be extremely tedious to export the color schemes created with these tools, 
        then convert that to CSS, and make minor adjustments afterwords.`,
        github: [
            {
                link: 'https://github.com/paulreitz/color-wheel'
            }
        ]
    },
    {
        title: 'Guild Wars 2 Craft Utility',
        thumbnail: 'gw2c.jpg',
        images: [
            'gw2c1.jpg',
            'gw2c2.jpg',
            'gw2c3.jpg',
            'gw2c4.jpg'
        ],
        description: 'A utility to help track what items I need to collect as I\'m playing Guild Wars 2. Unfortunately, I\'ve had to remove this project due to hosting costs.',
        why: `In GW2, like most online fantasy games, in order to get the best items in the game, they need to be crafted. 
        This involves a rather complex, and often confusing, list of in game items that need to be collected. 
        I built this to help keep that list organized.`,
        github: [
            {
                label: 'Scrubber',
                link: 'https://github.com/paulreitz/GW2CraftUtil_Scrubber'
            },
            {
                label: 'Server',
                link: 'https://github.com/paulreitz/GW2CraftUtil_Server'
            },
            {
                label: 'Client',
                link: 'https://github.com/paulreitz/GW2CraftUtil_Client'
            }
        ]
    }
]