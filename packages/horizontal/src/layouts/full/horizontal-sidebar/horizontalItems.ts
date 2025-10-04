import {
    CircleIcon,
    HomeIcon,
    ClipboardIcon,
    AlertCircleIcon,
    SettingsIcon,
    LoginIcon,
    UserPlusIcon,
    RotateIcon,
    ZoomCodeIcon,
    FileDescriptionIcon,
    BorderAllIcon,
    AppsIcon,
    PointIcon,
    BrandAirtableIcon,
    AppWindowIcon,
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    divider?: boolean;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    subCaption?: string;
    class?: string;
    extraclass?: string;
    type?: string;
}

const horizontalItems: menu[] = [
    {
        title: 'Dashboard',
        icon: HomeIcon,
        to: '#',
        children: [
            {
                title: 'Modern',
                icon: CircleIcon,
                to: '/dashboards/modern'
            },
            {
                title: 'Ecommerce',
                icon: CircleIcon,
                to: '/dashboards/ecommerce'
            }
        ]
    },
    {
        title: 'Front Pages',
        icon: AppWindowIcon,
        to: '#',
        children: [
            {
                title: 'Homepage',
                icon: CircleIcon,
                to: '/front-page/homepage'
            },
            {
                title: 'About Us',
                icon: CircleIcon,
                to: '/front-page/about-us'
            },
            {
                title: 'Blog',
                icon: CircleIcon,
                to: '/front-page/blog/posts'
            },
            {
                title: 'Blog Details',
                icon: CircleIcon,
                to: '/front-page/blog/early-black-friday-amazon-deals-cheap-tvs-headphones'
            },
            {
                title: 'Contact Us',
                icon: CircleIcon,
                to: '/front-page/contact-us'
            },
            {
                title: 'Portfolio',
                icon: CircleIcon,
                to: '/front-page/portfolio'
            },
            {
                title: 'Pricing',
                icon: CircleIcon,
                to: '/front-page/pricing'
            }
        ]
    },
    {
        title: 'Apps',
        icon: AppsIcon,
        to: '#',
        children: [
            {
                title: 'Chats',
                icon: CircleIcon,
                to: '/apps/chats'
            },
            {
                title: 'Blog',
                icon: CircleIcon,
                to: '/',
                children: [
                    {
                        title: 'Posts',
                        icon: PointIcon,
                        to: '/apps/blog/posts'
                    },
                    {
                        title: 'Detail',
                        icon: PointIcon,
                        to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones'
                    }
                ]
            },
            {
                title: 'E-Commerce',
                icon: CircleIcon,
                to: '/ecommerce/',
                children: [
                    {
                        title: 'Shop',
                        icon: PointIcon,
                        to: '/ecommerce/products'
                    },
                    {
                        title: 'Detail',
                        icon: PointIcon,
                        to: '/ecommerce/product/detail/1'
                    },
                    {
                        title: 'List',
                        icon: PointIcon,
                        to: '/ecommerce/productlist'
                    },
                    {
                        title: 'Checkout',
                        icon: PointIcon,
                        to: '/ecommerce/checkout'
                    },
                    {
                        title: 'Add Product',
                        icon: PointIcon,
                        to: '/ecommerce/add-product'
                    },
                    {
                        title: 'Edit Product',
                        icon: PointIcon,
                        to: '/ecommerce/edit-product'
                    }
                ]
            },
            {
                title: 'User Profile',
                icon: CircleIcon,
                to: '/',
                children: [
                    {
                        title: 'Profile',
                        icon: PointIcon,
                        to: '/apps/user/profile'
                    },
                    {
                        title: 'Followers',
                        icon: PointIcon,
                        to: '/apps/user/profile/followers'
                    },
                    {
                        title: 'Friends',
                        icon: PointIcon,
                        to: '/apps/user/profile/friends'
                    },
                    {
                        title: 'Gallery',
                        icon: PointIcon,
                        to: '/apps/user/profile/gallery'
                    }
                ]
            },
            {
                title: 'Invoice',
                icon: CircleIcon,
                to: '/',
                children: [
                    {
                        title: 'List',
                        icon: PointIcon,
                        to: '/apps/invoice'
                    },
                    {
                        title: 'Details',
                        icon: PointIcon,
                        to: '/apps/invoice/details/102'
                    },
                    {
                        title: 'Create',
                        icon: PointIcon,
                        to: '/apps/invoice/create'
                    },
                    {
                        title: 'Edit',
                        icon: PointIcon,
                        to: '/apps/invoice/edit/102'
                    }
                ]
            },
            {
                title: 'Notes',
                icon: CircleIcon,
                to: '/apps/notes'
            },
            {
                title: 'Calendar',
                icon: CircleIcon,
                to: '/apps/calendar'
            },
            {
                title: 'Email',
                icon: CircleIcon,
                to: '/apps/email'
            },
            {
                title: 'Tickets',
                icon: CircleIcon,
                to: '/apps/tickets'
            },
            {
                title: 'Kanban',
                icon: CircleIcon,
                to: '/apps/kanban'
            },
        ]
    },

    {
        title: 'Pages',
        icon: ClipboardIcon,
        to: '#',
        children: [
            {
                title: 'Pricing',
                icon: CircleIcon,
                to: '/pages/pricing'
            },
            {
                title: 'Account Setting',
                icon: CircleIcon,
                to: '/pages/account-settings'
            },
            {
                title: 'FAQ',
                icon: CircleIcon,
                to: '/pages/faq'
            },
            {
                title: 'Gallery Lightbox',
                icon: CircleIcon,
                to: '/pages/gallery-lightbox',
            },
            {
                title: 'Search Results',
                icon: CircleIcon,
                to: '/pages/search-results'
            },
            {
                title: 'Social Contacts',
                icon: CircleIcon,
                to: '/pages/social-media-contacts'
            },
            {
                title: 'Treeview',
                icon: CircleIcon,
                to: '/pages/treeview'
            },
            {
                title: 'Widget',
                icon: CircleIcon,
                to: '/widget-card',
                children: [
                    {
                        title: 'Cards',
                        icon: PointIcon,
                        to: '/widgets/cards'
                    },
                    {
                        title: 'Banners',
                        icon: PointIcon,
                        to: '/widgets/banners'
                    },
                    {
                        title: 'Charts',
                        icon: PointIcon,
                        to: '/widgets/charts'
                    }
                ]
            },
            {
                title: 'UI',
                icon: CircleIcon,
                to: '#',
                children: [
                    {
                        title: 'Alert',
                        icon: PointIcon,
                        to: '/ui-components/alert'
                    },
                    {
                        title: 'Accordion',
                        icon: PointIcon,
                        to: '/ui-components/accordion'
                    },
                    {
                        title: 'Avatar',
                        icon: PointIcon,
                        to: '/ui-components/avatar'
                    },
                    {
                        title: 'Chip',
                        icon: PointIcon,
                        to: '/ui-components/chip'
                    },
                    {
                        title: 'Dialog',
                        icon: PointIcon,
                        to: '/ui-components/dialogs'
                    },
                    {
                        title: 'List',
                        icon: PointIcon,
                        to: '/ui-components/list'
                    },
                    {
                        title: 'Menus',
                        icon: PointIcon,
                        to: '/ui-components/menus'
                    },
                    {
                        title: 'Rating',
                        icon: PointIcon,
                        to: '/ui-components/rating'
                    },
                    {
                        title: 'Tabs',
                        icon: PointIcon,
                        to: '/ui-components/tabs'
                    },
                    {
                        title: 'Tooltip',
                        icon: PointIcon,
                        to: '/ui-components/tooltip'
                    },
                    {
                        title: 'Typography',
                        icon: PointIcon,
                        to: '/ui-components/typography'
                    }
                ]
            },
            {
                title: 'Charts',
                icon: CircleIcon,
                to: '#',
                children: [
                    {
                        title: 'Line',
                        icon: PointIcon,
                        to: '/charts/line-chart'
                    },
                    {
                        title: 'Gredient',
                        icon: PointIcon,
                        to: '/charts/gredient-chart'
                    },
                    {
                        title: 'Area',
                        icon: PointIcon,
                        to: '/charts/area-chart'
                    },
                    {
                        title: 'Candlestick',
                        icon: PointIcon,
                        to: '/charts/candlestick-chart'
                    },
                    {
                        title: 'Column',
                        icon: PointIcon,
                        to: '/charts/column-chart'
                    },
                    {
                        title: 'Doughnut & Pie',
                        icon: PointIcon,
                        to: '/charts/doughnut-pie-chart'
                    },
                    {
                        title: 'Radialbar & Radar',
                        icon: PointIcon,
                        to: '/charts/radialbar-chart'
                    }
                ]
            },
            {
                title: 'Auth',
                icon: CircleIcon,
                to: '#',
                children: [
                    {
                        title: 'Error',
                        icon: AlertCircleIcon,
                        to: '/auth/404'
                    },
                    {
                        title: 'Maintenance',
                        icon: SettingsIcon,
                        to: '/auth/maintenance'
                    },
                    {
                        title: 'Login',
                        icon: LoginIcon,
                        to: '#',
                        children: [
                            {
                                title: 'Side Login',
                                icon: PointIcon,
                                to: '/auth/login'
                            },
                            {
                                title: 'Boxed Login',
                                icon: PointIcon,
                                to: '/'
                            }
                        ]
                    },
                    {
                        title: 'Register',
                        icon: UserPlusIcon,
                        to: '#',
                        children: [
                            {
                                title: 'Side Register',
                                icon: PointIcon,
                                to: '/auth/register'
                            },
                            {
                                title: 'Boxed Register',
                                icon: PointIcon,
                                to: '/auth/register2'
                            }
                        ]
                    },
                    {
                        title: 'Forgot Password',
                        icon: RotateIcon,
                        to: '#',
                        children: [
                            {
                                title: 'Side Forgot Password',
                                icon: PointIcon,
                                to: '/auth/forgot-password'
                            },
                            {
                                title: 'Boxed Forgot Password',
                                icon: PointIcon,
                                to: '/auth/forgot-password2'
                            }
                        ]
                    },
                    {
                        title: 'Two Steps',
                        icon: ZoomCodeIcon,
                        to: '#',
                        children: [
                            {
                                title: 'Side Two Steps',
                                icon: SettingsIcon,
                                to: '/auth/two-step'
                            },
                            {
                                title: 'Boxed Two Steps',
                                icon: SettingsIcon,
                                to: '/auth/two-step2'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: 'Forms',
        icon: FileDescriptionIcon,
        to: '#',
        children: [
            {
                title: 'Form Elements',
                icon: CircleIcon,
                to: '/components/',
                children: [
                    {
                        title: 'Autocomplete',
                        icon: PointIcon,
                        to: '/forms/form-elements/autocomplete'
                    },
                    {
                        title: 'Combobox',
                        icon: PointIcon,
                        to: '/forms/form-elements/combobox'
                    },
                    {
                        title: 'Button',
                        icon: PointIcon,
                        to: '/forms/form-elements/button'
                    },
                    {
                        title: 'Checkbox',
                        icon: PointIcon,
                        to: '/forms/form-elements/checkbox'
                    },
                    {
                        title: 'Custom Inputs',
                        icon: PointIcon,
                        to: '/forms/form-elements/custominputs'
                    },
                    {
                        title: 'File Inputs',
                        icon: PointIcon,
                        to: '/forms/form-elements/fileinputs'
                    },
                    {
                        title: 'Radio',
                        icon: PointIcon,
                        to: '/forms/form-elements/radio'
                    },
                    {
                        title: 'Select',
                        icon: PointIcon,
                        to: '/forms/form-elements/select'
                    },
                    {
                        title: 'Date Time',
                        icon: PointIcon,
                        to: '/forms/form-elements/date-time'
                    },
                    {
                        title: 'Slider',
                        icon: PointIcon,
                        to: '/forms/form-elements/slider'
                    },
                    {
                        title: 'Switch',
                        icon: PointIcon,
                        to: '/forms/form-elements/switch'
                    },
                    {
                        title: 'Time Picker',
                        icon: PointIcon,
                        to: '/forms/form-elements/time-picker'
                    },      
                    {
                        title: 'Stepper',
                        icon: PointIcon,
                        to: '/forms/form-elements/stepper'
                    }
                ]
            },
            {
                title: 'Form Layout',
                icon: CircleIcon,
                to: '/forms/form-layouts'
            },
            {
                title: 'Form Horizontal',
                icon: CircleIcon,
                to: '/forms/form-horizontal'
            },
            {
                title: 'Form Vertical',
                icon: CircleIcon,
                to: '/forms/form-vertical'
            },
            {
                title: 'Form Custom',
                icon: CircleIcon,
                to: '/forms/form-custom'
            },
            {
                title: 'Form Validation',
                icon: CircleIcon,
                to: '/forms/form-validation'
            }
        ]
    },
    {
        title: 'Tables',
        icon: BorderAllIcon,
        to: '#',
        children: [
            {
                title: 'Basic Table',
                icon: CircleIcon,
                to: '/tables/basic'
            },
            {
                title: 'Dark Table',
                icon: CircleIcon,
                to: '/tables/dark'
            },
            {
                title: 'Density Table',
                icon: CircleIcon,
                to: '/tables/density'
            },
            {
                title: 'Fixed Header Table',
                icon: CircleIcon,
                to: '/tables/fixed-header'
            },
            {
                title: 'Height Table',
                icon: CircleIcon,
                to: '/tables/height'
            },
            {
                title: 'Editable Table',
                icon: CircleIcon,
                to: '/tables/editable'
            },
        ]
    },
    {
        title: 'Data Tables',
        icon: BrandAirtableIcon,
        to: '#',
        children: [
            {
                title: 'Basic Table',
                icon: CircleIcon,
                to: '/tables/datatables/basic'
            },
            {
                title: 'Header Table',
                icon: CircleIcon,
                to: '/tables/datatables/header'
            },
            {
                title: 'Selection Table',
                icon: CircleIcon,
                to: '/tables/datatables/selection'
            },
            {
                title: 'Sorting Table',
                icon: CircleIcon,
                to: '/tables/datatables/sorting'
            },
            {
                title: 'Pagination Table',
                icon: CircleIcon,
                to: '/tables/datatables/pagination'
            },
            {
                title: 'Filtering Table',
                icon: CircleIcon,
                to: '/tables/datatables/filtering'
            },
            {
                title: 'Grouping Table',
                icon: CircleIcon,
                to: '/tables/datatables/grouping'
            },
            {
                title: 'Table Slots',
                icon: CircleIcon,
                to: '/tables/datatables/slots'
            },
            {
                title: 'CRUD Table',
                icon: CircleIcon,
                to: '/tables/datatables/crudtable'
            },
        ]
    }
];

export default horizontalItems;
