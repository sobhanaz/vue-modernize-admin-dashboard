import type { cardsType, followCard, musicCards, productsCards, socialiconCards, profileCard, upcommingLists, userCard } from '@/types/components/widget/card';
/*import tabler icons*/
import {
    BrandFacebookIcon,
    BrandGithubIcon,
    BrandInstagramIcon,
    BrandTwitterIcon,
    MapPinIcon,
    DatabaseIcon,
    PhoneIcon,
    ScreenShareIcon,
    MailIcon
} from 'vue-tabler-icons';

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import img1 from '@/assets/images/blog/blog-img1.jpg';
import img2 from '@/assets/images/blog/blog-img2.jpg';
import img3 from '@/assets/images/blog/blog-img3.jpg';
/*--Products Cards Images--*/
import proimg1 from '@/assets/images/products/s4.jpg';
import proimg2 from '@/assets/images/products/s5.jpg';
import proimg3 from '@/assets/images/products/s4.jpg';
import proimg4 from '@/assets/images/products/s11.jpg';

/*--Blog Cards--*/
const blogCard: cardsType[] = [
    {
        avatar: user1,
        coveravatar: img1,
        read: '2 min Read',
        title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
        link: '/',
        category: 'Social',
        name: 'Georgeanna Ramero',
        view: '9,125',
        comments: '3',
        time: 'Mon, Dec 19'
    },
    {
        avatar: user2,
        coveravatar: img2,
        read: '2 min Read',
        title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
        link: '/',
        category: 'Gadget',
        name: 'Georgeanna Ramero',
        view: '4,150',
        comments: '38',
        time: 'Sun, Dec 18'
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: 'COVID outbreak deepens as more lockdowns loom in China',
        link: '/',
        category: 'Health',
        name: 'Georgeanna Ramero',
        view: '9,480',
        comments: '12',
        time: 'Sat, Dec 17'
    }
];

/*--Follow Cards--*/
const followerCard: followCard[] = [
    {
        title: 'Andrew Grant',
        location: 'El Salvador',
        avatar: user1
    },
    {
        title: 'Leo Pratt',
        location: 'Bulgaria',
        avatar: user2
    },
    {
        title: 'Charles Nunez',
        location: 'Nepal',
        avatar: user3
    }
];

/*--Music Cards--*/
const musicCard: musicCards[] = [
    {
        title: 'Uptown Funk',
        subheader: 'Jon Bon Jovi',
        img: img1
    },
    {
        title: 'Blank Space',
        subheader: 'Madonna',
        img: img2
    },
    {
        title: 'Lean On',
        subheader: 'Jennifer Lopez',
        img: img3
    }
];

/*--Products Cards--*/
const productsCard: productsCards[] = [
    {
        title: 'Boat Headphone',
        link: '/',
        photo: proimg1,
        salesPrice: 375,
        price: 285,
        rating: 4
    },
    {
        title: 'MacBook Air Pro',
        link: '/',
        photo: proimg2,
        salesPrice: 650,
        price: 900,
        rating: 5
    },
    {
        title: 'Red Valvet Dress',
        link: '/',
        photo: proimg3,
        salesPrice: 150,
        price: 200,
        rating: 3
    },
    {
        title: 'Cute Soft Teddybear',
        link: '/',
        photo: proimg4,
        salesPrice: 285,
        price: 345,
        rating: 2
    }
];

/*--Social Cards--*/
const socialiconCard: socialiconCards[] = [
    {
        name: 'facebook',
        icon: BrandFacebookIcon,
        color: 'primary'
    },
    {
        name: 'instagram',
        icon: BrandInstagramIcon,
        color: 'error'
    },
    {
        name: 'github',
        icon: BrandGithubIcon,
        color: 'info'
    },
    {
        name: 'twitter',
        icon: BrandTwitterIcon,
        color: 'secondary'
    }
];

/*--Profile Cards--*/
const profileCards: profileCard[] = [
    {
        title: 'Andrew Grant',
        subtitle: 'Technology Director',
        avatar: user1
    },
    {
        title: 'Leo Pratt',
        subtitle: 'Telecom Analyst',
        avatar: user2
    },
    {
        title: 'Charles Nunez',
        subtitle: 'Environmental Specialist',
        avatar: user3
    }
];

/*--Upcomming Activity Cards--*/
const upcommingCards: upcommingLists[] = [
    {
        icon: MapPinIcon,
        title: 'Trip to singapore',
        subtitle: 'working on',
        rank: '5 mins',
        bgcolor: 'primary'
    },
    {
        icon: DatabaseIcon,
        title: 'Archived Data',
        subtitle: 'working on',
        rank: '10 mins',
        bgcolor: 'secondary'
    },
    {
        icon: PhoneIcon,
        title: 'Meeting with client',
        subtitle: 'pending',
        rank: '15 mins',
        bgcolor: 'warning'
    },
    {
        icon: ScreenShareIcon,
        title: 'Screening Task Team',
        subtitle: 'working on',
        rank: '20 mins',
        bgcolor: 'error'
    },
    {
        icon: MailIcon,
        title: 'Send envelope to John',
        subtitle: 'done',
        rank: '20 mins',
        bgcolor: 'success'
    }
];

/*--User Cards--*/
const userCards: userCard[] = [
    {
        title: 'Andrew Grant',
        subtitle: '3 mutual friends',
        avatar: user1,
        userGroup: [
            {
                icon: user1
            },
            {
                icon: user2
            },
            {
                icon: user3
            }
        ],
    },
    {
        title: 'Leo Pratt',
        subtitle: '3 mutual friends',
        avatar: user2,
        userGroup: [
            {
                icon: user1
            },
            {
                icon: user2
            },
            {
                icon: user3
            }
        ],
    },
    {
        title: 'Charles Nunez',
        subtitle: '3 mutual friends',
        avatar: user3,
        userGroup: [
            {
                icon: user1
            },
            {
                icon: user2
            },
            {
                icon: user3
            }
        ],
    },
    {
        title: 'Lora Powers',
        subtitle: '3 mutual friends',
        avatar: user4,
        userGroup: [
            {
                icon: user1
            },
            {
                icon: user2
            },
            {
                icon: user3
            }
        ],
    },
]


export { blogCard, followerCard, musicCard, productsCard, socialiconCard, profileCards, upcommingCards, userCards }