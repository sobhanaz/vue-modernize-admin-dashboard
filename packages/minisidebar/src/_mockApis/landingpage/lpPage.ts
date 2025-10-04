import { ref } from 'vue';

import type {
    ProductsSliderTypes,
    UserReviewTypes,
    ListFeatureTypes,
    DemosMegaMenuTypes,
    AppsMegaMenuTypes,
} from '@/types/landingpage/LandingpageTypes';

import type { faqPageType } from '@/types/components/pages/faqData';

import img1 from '@/assets/images/landingpage/demos/demo-main.jpg';
import img2 from '@/assets/images/landingpage/demos/demo-dark.jpg';
import img3 from '@/assets/images/landingpage/demos/demo-horizontal.jpg';
import img4 from '@/assets/images/landingpage/demos/demo-mini.jpg';
import img5 from '@/assets/images/landingpage/demos/demo-rtl.jpg';
import img6 from '@/assets/images/landingpage/apps/app-calendar.jpg';
import img7 from '@/assets/images/landingpage/apps/app-chat.jpg';
import img8 from '@/assets/images/landingpage/apps/app-contact.jpg';
import img9 from '@/assets/images/landingpage/apps/app-email.jpg';
import img10 from '@/assets/images/landingpage/apps/app-note.jpg';
import img11 from '@/assets/images/landingpage/apps/app-blog.jpg';
import img12 from '@/assets/images/landingpage/apps/app-shop.jpg';
import img13 from '@/assets/images/landingpage/apps/app-productlist.jpg';
import img14 from '@/assets/images/landingpage/apps/app-invoice.jpg';
import img15 from '@/assets/images/landingpage/apps/app-blog-detail.jpg';
import img16 from '@/assets/images/landingpage/apps/app-product-detail.jpg';
import img17 from '@/assets/images/landingpage/apps/app-kanban.jpg';

const productsSlider: ProductsSliderTypes[] = [
    {
        type: true,
        img: img1,
        name: 'Main',
        link: 'https://modernize-vuejs.adminmart.com/dashboards/modern'
    },
    {
        type: true,
        img: img2,
        name: 'Dark',
        link: 'https://modernize-vue3-dark.netlify.app/dashboards/modern'
    },
    {
        type: true,
        img: img3,
        name: 'Horizontal',
        link: 'https://modernize-vue3-horizontal.netlify.app/dashboards/modern'
    },
    {
        type: true,
        img: img4,
        name: 'Minisidebar',
        link: 'https://modernize-vue3-minisidebar.netlify.app/dashboards/modern'
    },
    {
        type: true,
        img: img5,
        name: 'RTL',
        link: 'https://modernize-vue3-rtl.netlify.app/dashboards/modern'
    },
    {
        type: false,
        img: img6,
        name: 'Calandar App',
        link: '/apps/calendar'
    },
    {
        type: false,
        img: img7,
        name: 'Chat App',
        link: '/apps/chats'
    },
    {
        type: false,
        img: img8,
        name: 'Contact App',
        link: '/apps/contacts'
    },
    {
        type: false,
        img: img9,
        name: 'User Profile App',
        link: '/apps/user/profile'
    },
    {
        type: false,
        img: img10,
        name: 'Notes App',
        link: '/apps/notes'
    },
    {
        type: false,
        img: img11,
        name: 'Blog App',
        link: '/apps/blog/posts'
    },
    {
        type: false,
        img: img15,
        name: 'Blog Detail App',
        link: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones'
    },
    {
        type: false,
        img: img12,
        name: 'eCommerce Shop App',
        link: '/ecommerce/products'
    },
    {
        type: false,
        img: img16,
        name: 'eCommerce Product Detail App',
        link: '/ecommerce/product/detail/1'
    },
    {
        type: false,
        img: img13,
        name: 'eCommerce Product List App',
        link: '/ecommerce/productlist'
    },
    {
        type: false,
        img: img14,
        name: 'Invoice App',
        link: '/apps/invoice'
    },
    {
        type: false,
        img: img17,
        name: 'Kanban App',
        link: '/apps/kanban'
    }
];

/*User Review Section*/
import review1 from '@/assets/images/profile/user-1.jpg';
import review2 from '@/assets/images/profile/user-2.jpg';
import review3 from '@/assets/images/profile/user-3.jpg';

const userReview: UserReviewTypes[] = [
    {
        img: review3,
        title: 'Eminson Mendoza',
        subtitle: 'Features avaibility',
        review: 'This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recomended!'
    },
    {
        img: review1,
        title: 'Jenny Wilson',
        subtitle: 'Features avaibility',
        review: 'The dashboard template from adminmart has helped me provide a clean and sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.'
    },
    {
        img: review2,
        title: 'Minshan Cui',
        subtitle: 'Features avaibility',
        review: 'The quality of design is excellent, customizability and flexibility much better than the other products available in the market.I strongly recommend the AdminMart to other.'
    },
    {
        img: review3,
        title: 'Eminson Mendoza',
        subtitle: 'Features avaibility',
        review: 'This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recomended!'
    },
    {
        img: review1,
        title: 'Jenny Wilson',
        subtitle: 'Features avaibility',
        review: 'The dashboard template from adminmart has helped me provide a clean and sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.'
    },
    {
        img: review2,
        title: 'Minshan Cui',
        subtitle: 'Features avaibility',
        review: 'The quality of design is excellent, customizability and flexibility much better than the other products available in the market.I strongly recommend the AdminMart to other.'
    },
    {
        img: review3,
        title: 'Eminson Mendoza',
        subtitle: 'Features avaibility',
        review: 'This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recomended!'
    },
    {
        img: review1,
        title: 'Jenny Wilson',
        subtitle: 'Features avaibility',
        review: 'The dashboard template from adminmart has helped me provide a clean and sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.'
    }
];

/*Feature Section*/
/*import tabler icons*/
import {
    WandIcon,
    ShieldLockIcon,
    ArchiveIcon,
    AdjustmentsIcon,
    TagIcon,
    DiamondIcon,
    DatabaseIcon,
    LanguageKatakanaIcon,
    BuildingCarouselIcon,
    ArrowsShuffleIcon,
    ChartPieIcon,
    LayersIntersectIcon,
    RefreshIcon,
    BookIcon,
    CalendarIcon,
    MessageIcon,
    PresentationIcon
} from 'vue-tabler-icons';

const listFeature: ListFeatureTypes[] = [
    {
        icon: WandIcon,
        title: '6 Theme Colors',
        subtitle: 'We have included 6 pre-defined Theme Colors with Modernize Admin.'
    },
    {
        icon: ShieldLockIcon,
        title: 'Authguard',
        subtitle: 'We have AUTH guard functionality which is based on JWT.'
    },
    {
        icon: ArchiveIcon,
        title: '65+ Page Templates',
        subtitle: 'Yes, we have 5 demos & 65+ Pages per demo to make it easier.'
    },
    {
        icon: PresentationIcon,
        title: '4+ Frontend Pages',
        subtitle: 'We have added useful frontend pages with Modernize Admin'
    },
    {
        icon: AdjustmentsIcon,
        title: '45+ UI Components',
        subtitle: 'Almost 45+ UI Components being given with Modernize Admin Pack.'
    },
    {
        icon: TagIcon,
        title: 'Vuetify',
        subtitle: 'It is made with Vuetify which is a powerful UI Component Framework.'
    },
    {
        icon: DiamondIcon,
        title: '3400+ Font Icons',
        subtitle: 'Lots of Icon Fonts are included here in the package of Modernize Admin.'
    },
    {
        icon: DatabaseIcon,
        title: 'Axios',
        subtitle: 'Axios is a promise-based HTTP Client for node.js and the browser.'
    },
    {
        icon: LanguageKatakanaIcon,
        title: 'i18n Vue',
        subtitle: 'Vue i18n is a powerful internationalization framework for Vue.'
    },
    {
        icon: BuildingCarouselIcon,
        title: 'Vue3 Carousel',
        // subtitle: 'The Last Vue3 Carousel You will Ever Need!'
        subtitle: 'Flexible, responsive, and highly customizable Vue carousel component'
    },
    {
        icon: ArrowsShuffleIcon,
        title: 'Easy to Customize',
        subtitle: 'Customization will be easy as we understand your pain.'
    },
    {
        icon: ChartPieIcon,
        title: 'Lots of Chart Options',
        subtitle: 'You name it and we have it, Yes lots of variations for Charts.'
    },
    {
        icon: LayersIntersectIcon,
        title: 'Lots of Table Examples',
        subtitle: 'Data Tables are initial requirement and we added them.'
    },
    {
        icon: RefreshIcon,
        title: 'Regular Updates',
        subtitle: 'We are constantly updating our pack with new features.'
    },
    {
        icon: BookIcon,
        title: 'Detailed Documentation',
        subtitle: 'We have made detailed documentation, so it will easy to use.'
    },
    {
        icon: CalendarIcon,
        title: 'Calendar Design',
        subtitle: 'Calendar is available with our package & in nice design.'
    },
    {
        icon: MessageIcon,
        title: 'Dedicated Support',
        subtitle: 'We believe in supreme support is key and we offer that.'
    }
];

/*Demos Megamenu*/
const demosMegamenu: DemosMegaMenuTypes[] = [
    {
        img: img1,
        name: 'Main',
        link: 'https://modernize-vuejs.adminmart.com/dashboards/modern'
    },
    {
        img: img2,
        name: 'Dark',
        link: 'https://modernize-vue3-dark.netlify.app/dashboards/modern'
    },
    {
        img: img3,
        name: 'Horizontal',
        link: 'https://modernize-vue3-horizontal.netlify.app/dashboards/modern'
    },
    {
        img: img4,
        name: 'Minisidebar',
        link: 'https://modernize-vue3-minisidebar.netlify.app/dashboards/modern'
    },
    {
        img: img5,
        name: 'RTL',
        link: 'https://modernize-vue3-rtl.netlify.app/dashboards/modern'
    }
];
const appsMegamenu: AppsMegaMenuTypes[] = [
    {
        img: img6,
        name: 'Calandar App',
        link: '/apps/calendar'
    },
    {
        img: img7,
        name: 'Chat App',
        link: '/apps/chats'
    },
    {
        img: img8,
        name: 'Contact App',
        link: '/apps/contacts'
    },
    {
        img: img9,
        name: 'User Profile App',
        link: '/apps/user/profile'
    },
    {
        img: img10,
        name: 'Notes App',
        link: '/apps/notes'
    }
];



import frnt1 from '@/assets/images/landingpage/frontpages/homepage.jpg';
import frnt2 from '@/assets/images/landingpage/frontpages/aboutus.jpg';
import frnt3 from '@/assets/images/landingpage/frontpages/contactus.jpg';
import frnt4 from '@/assets/images/landingpage/frontpages/portfolio.jpg';
import frnt5 from '@/assets/images/landingpage/frontpages/pricing.jpg';
import frnt6 from '@/assets/images/landingpage/frontpages/blogpage.jpg';
import frnt7 from '@/assets/images/landingpage/frontpages/blogdetail.jpg';

const FrontPageMenu: DemosMegaMenuTypes[] = [
    {
        img: frnt1,
        name: 'Homepage',
        link: '/front-page/homepage'
    },
    {
        img: frnt2,
        name: 'About Us',
        link: '/front-page/about-us'
    },
    {
        img: frnt3,
        name: 'Contact Us',
        link: '/front-page/contact-us'
    },
    {
        img: frnt4,
        name: 'Portfolio',
        link: '/front-page/portfolio'
    },
    {
        img: frnt5,
        name: 'Pricing',
        link: '/front-page/pricing'
    },
    {
        img: frnt6,
        name: 'Blog',
        link: '/front-page/blog/posts'
    }
];



export { productsSlider, userReview, listFeature, demosMegamenu, appsMegamenu,FrontPageMenu};
