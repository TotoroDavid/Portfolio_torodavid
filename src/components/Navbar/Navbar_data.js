/**
 * json with the information of
 * the menu 
 */
import * as RiIcons from 'react-icons/ri'

export const Navbar_data = [
    {
        title: '.Home',
        path: '/',
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
                path: '/home/about',
                // icon: <IoIcons.IoIosPaper />
            },
            {
                title: '.Contact',
                path: '/home/contact',
                // icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: '.MyPortfolio',
        path: '/portfolio'
    },
    {
        title: '.Links',
        path: '/links',
    },
]