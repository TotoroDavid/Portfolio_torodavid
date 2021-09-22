/**
 * json with the information of
 * the menu 
 */
import * as RiIcons from 'react-icons/ri'

export const Navbar_data = [
    {
        title: '.Home',
        path: '/home',
        // icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: '.Work',
                path: '/work',
                // icon: <IoIcons.IoIosPaper />
            },
            {
                title: '.About',
                path: '/about',
                // icon: <IoIcons.IoIosPaper />
            },
            {
                title: '.Contact',
                path: '/contact',
                // icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    // {
    //     title: '.MyPortfolio',
    //     path: '/portfolio'
    // },
    {
        title: '.Links',
        path: '/',
    },
]