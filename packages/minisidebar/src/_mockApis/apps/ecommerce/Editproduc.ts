import type { Productreview } from "@/types/apps/Editproducts";

import img1 from '@/assets/images/profile/user-5.jpg';
import img2 from '@/assets/images/profile/user-8.jpg';
import img3 from '@/assets/images/profile/user-3.jpg';
import img4 from '@/assets/images/profile/user-4.jpg';
import img5 from '@/assets/images/profile/user-5.jpg';
import img6 from '@/assets/images/profile/user-6.jpg';
import img7 from '@/assets/images/profile/user-7.jpg';
import img8 from '@/assets/images/profile/user-10.jpg';


const ProductreviewData: Productreview[] = [
    {
        review:5,
        image:img1,
        name: 'Sunil Joshi',
        comment:'I like this design',
        date:'1 day ago'
    },
    {
        review:4,
        image:img2,
        name: 'Mark Richard',
        comment:'Awesome quality with great materials used, but could be more comfortable',
        date:'11:20 PM'
    },
    {
        review:4.5,
        image:img3,
        name: 'Hanry Lord',
        comment:'This is the best product I have ever used.',
        date:'Today'
    },
    {
        review:3.5,
        image:img4,
        name: 'Britny Cox',
        comment:'Beautifully crafted. Worth every penny.',
        date:'Today'
    },
    {
        review:4,
        image:img5,
        name: 'Olvin wild',
        comment:'Awesome value for money. Shipping could be faster tho.',
        date:'12:00 PM'
    },
    {
        review:5,
        image:img6,
        name: 'Dan wilsed',
        comment:'Excellent quality, I got it for my sons birthday and he loved it',
        date:'1 May 2024'
    },
    {
        review:5,
        image:img7,
        name: 'Jon Miller',
        comment:'Firesale is on! Buy now! Totally worth it!',
        date:'25 April 2024'
    },
    {
        review:3.5,
        image:img8,
        name: 'Anaa Crown',
        comment:'Excellent quality, I got it for my sons birthday and he loved it',
        date:'1 May 2024'
    }
];

export {ProductreviewData}