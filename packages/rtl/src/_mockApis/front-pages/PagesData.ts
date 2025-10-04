import type { LeaderType, TemplateType, ThemeFeatures, PackageType, FooterType } from '@/types/components/front-pages/index';
import type { faqPageType } from '@/types/components/pages/faqData';

const QA1: faqPageType[] = [
    {
        question: 'Combine teammate schedules',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Factor in outside colleagues',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Round robin pooling',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    }
];
const QA2: faqPageType[] = [
    {
        question: 'Combine teammate schedules 2',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Factor in outside colleagues',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Round robin pooling',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    }
];
const QA3: faqPageType[] = [
    {
        question: 'Combine teammate schedules 3',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Factor in outside colleagues',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Round robin pooling',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    }
];

const QA4: faqPageType[] = [
    {
        question: 'Combine teammate schedules 4',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Factor in outside colleagues',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    },
    {
        question: 'Round robin pooling',
        answer: 'Factor in availability for required attendees, and skip checking for conflicts for optional attendees.'
    }
];

// OurLeaders
import leader1 from '@/assets/images/front-pages/leaders/leader1.png';
import leader2 from '@/assets/images/front-pages/leaders/leader2.png';
import leader3 from '@/assets/images/front-pages/leaders/leader3.png';
import leader4 from '@/assets/images/front-pages/leaders/leader4.png';
import leader5 from '@/assets/images/front-pages/leaders/leader4.png';
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
    CircleCheckIcon,
    CircleXIcon
} from 'vue-tabler-icons';
const OurLeaders: LeaderType[] = [
    {
        img: leader1,
        name: 'Alex Martinez',
        position: 'CEO & Co-Founder'
    },
    {
        img: leader2,
        name: 'Jordan Nguyen',
        position: 'CTO & Co-Founder'
    },
    {
        img: leader3,
        name: 'Taylor Roberts',
        position: 'Product Manager'
    },
    {
        img: leader4,
        name: 'Morgan Patel',
        position: 'Lead Developer'
    },
    {
        img: leader2,
        name: 'Jordan Nguyen',
        position: 'CTO & Co-Founder'
    },
    {
        img: leader5,
        name: 'Taylor Roberts',
        position: 'Product Manager'
    },
    {
        img: leader1,
        name: 'Alex Martinez',
        position: 'CEO & Co-Founder'
    },
    {
        img: leader2,
        name: 'Jordan Nguyen',
        position: 'CTO & Co-Founder'
    },
];

const templateText: TemplateType[] = [
    {
        title: 'High Customizability',
        subtitle:
            'Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.'
    },
    {
        title: 'Powerful Data Analytics',
        subtitle:
            ' Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make data-driven decisions with ease.'
    },
    {
        title: 'Interactive Graphs & Charts',
        subtitle:
            'Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.'
    }
];

const ThemeFeature1: ThemeFeatures[] = [
    {
        icon: WandIcon,
        title: '6 Theme Colors'
    },
    {
        icon: ShieldLockIcon,
        title: 'Authguard'
    },
    {
        icon: ArchiveIcon,
        title: '65+ Page Templates'
    },
    {
        icon: AdjustmentsIcon,
        title: '45+ UI Components'
    },
    {
        icon: TagIcon,
        title: 'Vuetify'
    },
    {
        icon: DiamondIcon,
        title: '3400+ Font Icons'
    }
];
const ThemeFeature2: ThemeFeatures[] = [
    {
        icon: DatabaseIcon,
        title: 'Axios'
    },
    {
        icon: LanguageKatakanaIcon,
        title: 'i18n Vue'
    },
    {
        icon: BuildingCarouselIcon,
        title: 'Vue3 Carousel'
    },
    {
        icon: ArrowsShuffleIcon,
        title: 'Easy to Customize'
    }
];
const ThemeFeature3: ThemeFeatures[] = [
    {
        icon: ChartPieIcon,
        title: 'Lots of Chart Options'
    },
    {
        icon: LayersIntersectIcon,
        title: 'Lots of Table Examples'
    },
    {
        icon: RefreshIcon,
        title: 'Regular Updates'
    },
    {
        icon: BookIcon,
        title: 'Detailed Documentation'
    },
    {
        icon: CalendarIcon,
        title: 'Calendar Design'
    },
    {
        icon: MessageIcon,
        title: 'Dedicated Support'
    }
];

const Packages: PackageType[] = [
    {
        tagtext: false,
        caption: 'Single Use',
        subtext: 'Use for single end product which end users can’t be charged for.',
        price: 49,
        period: 'one time pay',
        buttontext: 'Purchase Now',
        url: '/',
        list: [
            {
                listtitle: 'Full sou rce code',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Documentation',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Use in SaaS app',
                status: true,
                icon: true,
                disable: true
            },
            {
                listtitle: '<b>One</b> Project',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Technical Support',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Free Updates',
                status: true,
                icon: false,
                disable: false
            }
        ]
    },

    {
        tagtext: false,
        caption: 'Multiple Use',
        subtext: 'Use for unlimited end products end users can’t be charged for.',
        price: 89,
        period: 'one time pay',
        buttontext: 'Purchase Now',
        url: '/',
        list: [
            {
                listtitle: 'Full sou rce code',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Documentation',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Use in SaaS app',
                status: true,
                icon: true,
                disable: true
            },
            {
                listtitle: '<b>Unlimited</b> Project',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Technical Support',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Free Updates',
                status: true,
                icon: false,
                disable: false
            }
        ]
    },

    {
        tagtext: true,
        caption: 'Extended Use',
        subtext: 'Use for single end product which end users can be charged for.',
        price: 299,
        period: 'one time pay',
        buttontext: 'Purchase Now',
        url: '/',
        list: [
            {
                listtitle: 'Full sou rce code',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Documentation',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Use in SaaS app',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: '<b>One</b> Project',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Technical Support',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Free Updates',
                status: true,
                icon: false,
                disable: false
            }
        ]
    },
    {
        tagtext: false,
        caption: 'Unlimited Use',
        subtext: 'Use in unlimited end products end users can be charged for.',
        price: 499,
        period: 'one time pay',
        buttontext: 'Purchase Now',
        url: '/',
        list: [
            {
                listtitle: 'Full sou rce code',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Documentation',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: 'Use in SaaS app',
                status: false,
                icon: true,
                disable: false
            },
            {
                listtitle: '<b>Unlimited</b> Project',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Technical Support',
                status: true,
                icon: false,
                disable: false
            },
            {
                listtitle: '<b>One Year</b> Free Updates',
                status: true,
                icon: false,
                disable: false
            }
        ]
    }
];

const FAQData: TemplateType[] = [
    {
        title: 'What is included with my purchase?',
        subtitle:
            'Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.'
    },
    {
        title: 'Are there any recurring fees?',
        subtitle:
            ' Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make data-driven decisions with ease.'
    },
    {
        title: 'Can I use the template on multiple projects?',
        subtitle:
            'Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.'
    },
    {
        title: 'Can I customize the admin dashboard template to match my brand?',
        subtitle:
            'Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.'
    },
    {
        title: 'Are there any restrictions on using the template?',
        subtitle:
            'Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.'
    },
    {
        title: 'How can I get support after purchase?',
        subtitle:
            'Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.'
    }
];

// Footer Menu Links
const FooterMenu1: FooterType[] = [
    {
        menu: 'Cards',
        link: '/widgets/cards'
    },
    {
        menu: 'Pricing',
        link: '/pages/pricing'
    },
    {
        menu: 'Account Settings',
        link: '/pages/account-settings'
    },
    {
        menu: 'FAQ',
        link: '/pages/faq'
    },
    {
        menu: 'Search Results',
        link: '/pages/search-results'
    },
   
];
const FooterMenu2: FooterType[] = [
    {
        menu: 'Treeview',
        link: '/pages/treeview'
    },
    {
        menu: 'Banners',
        link: '/widgets/banners'
    },
    {
        menu: 'Charts',
        link: '/widgets/charts'
    },
    {
        menu: 'Gallery Lightbox',
        link: '/pages/gallery-lightbox'
    },
    {
        menu: 'Social Contacts',
        link: '/pages/social-media-contacts'
    }
];
const FooterMenu3: FooterType[] = [
    {
        menu: 'Form Layout',
        link: '/forms/form-layouts'
    },
    {
        menu: 'Tables',
        link: '/tables/basic'
    },
    {
        menu: 'Stepper',
        link: '/forms/form-elements/stepper'
    },
    {
        menu: 'Datatables',
        link: '/tables/datatables/basic'
    },
    {
        menu: 'Validation',
        link: '/forms/form-validation'
    }
];
export {
    QA1,
    QA2,
    QA3,
    QA4,
    OurLeaders,
    templateText,
    ThemeFeature1,
    ThemeFeature2,
    ThemeFeature3,
    Packages,
    FAQData,
    FooterMenu1,
    FooterMenu2,
    FooterMenu3
};
