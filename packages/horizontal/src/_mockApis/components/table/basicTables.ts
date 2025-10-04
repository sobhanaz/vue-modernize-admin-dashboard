
import type { basicTable1, basicTable2, basicTable3, basicTable4, basicTable5, tableDark, tableDensity, tableFixedHeader, heightTable, tableAction } from '@/types/components/table/index';
/*import tabler icons*/
import { PlusIcon, EditIcon, TrashIcon, CheckIcon, XIcon, ArrowBackUpIcon } from 'vue-tabler-icons';
import img1 from '@/assets/images/profile/user-1.jpg';
import img2 from '@/assets/images/profile/user-2.jpg';
import img3 from '@/assets/images/profile/user-3.jpg';
import img4 from '@/assets/images/profile/user-4.jpg';
import img5 from '@/assets/images/profile/user-5.jpg';
import img6 from '@/assets/images/profile/user-6.jpg';
import authimg1 from '@/assets/images/blog/blog-img1.jpg';
import authimg2 from '@/assets/images/blog/blog-img2.jpg';
import authimg3 from '@/assets/images/blog/blog-img3.jpg';
import authimg4 from '@/assets/images/blog/blog-img4.jpg';
import authimg5 from '@/assets/images/blog/blog-img5.jpg';

/*Basic Table 1*/
const basicTableData1: basicTable1[] = [
    {
        avatar: img1,
        name: 'Sunil Joshi',
        post: 'Web Designer',
        pname: 'Elite Admin',
        status: 'Active',
        statuscolor: 'success',
        teams: [
            {
                id: '1',
                color: 'error',
                text: 'S'
            },
            {
                id: '2',
                color: 'secondary   ',
                text: 'D'
            }
        ],
        budget: '$3.9'
    },
    {
        avatar: img2,
        name: 'Andrew McDownland',
        post: 'Project Manager',
        pname: 'Real Homes WP Theme',
        status: 'Pending',
        statuscolor: 'warning',
        teams: [
            {
                id: '1',
                color: 'secondary',
                text: 'N'
            },
            {
                id: '2',
                color: 'warning   ',
                text: 'X'
            },
            {
                id: '3',
                color: 'primary   ',
                text: 'A'
            }
        ],
        budget: '$24.5k'
    },
    {
        avatar: img3,
        name: 'Christopher Jamil',
        post: 'Project Manager',
        pname: 'MedicalPro WP Theme',
        status: 'Completed',
        statuscolor: 'primary',
        teams: [
            {
                id: '1',
                color: 'secondary',
                text: 'X'
            }
        ],
        budget: '$12.8k'
    },
    {
        avatar: img4,
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        pname: 'Hosting Press HTML',
        status: 'Active',
        statuscolor: 'success',
        teams: [
            {
                id: '1',
                color: 'primary',
                text: 'X'
            },
            {
                id: '2',
                color: 'error',
                text: 'Y'
            }
        ],
        budget: '$2.4k'
    },
    {
        avatar: img5,
        name: 'Micheal Doe',
        post: 'Content Writer',
        pname: 'Helping Hands WP Theme',
        status: 'Cancel',
        statuscolor: 'error',
        teams: [
            {
                id: '1',
                color: 'secondary',
                text: 'S'
            }
        ],
        budget: '$9.3k'
    }
];

/*Basic Table 2*/
const basicTableData2: basicTable2[] = [
    {
        avatar: img1,
        name: 'Olivia Rhye',
        post: 'Xtreme admin',
        status: 'active',
        statuscolor: 'primary',
        users: [
            {
                id: '1',
                icon: img2
            },
            {
                id: '2',
                icon: img1
            }
        ]
    },
    {
        avatar: img2,
        name: 'Barbara Steele',
        post: 'Adminpro admin',
        status: 'cancel',
        statuscolor: 'error',
        users: [
            {
                id: '1',
                icon: img3
            },
            {
                id: '2',
                icon: img2
            },
            {
                id: '3',
                icon: img1
            }
        ]
    },
    {
        avatar: img3,
        name: 'Leonard Gordon',
        post: 'Monster admin',
        status: 'active',
        statuscolor: 'primary',
        users: [
            {
                id: '1',
                icon: img2
            },
            {
                id: '2',
                icon: img3
            }
        ]
    },
    {
        avatar: img4,
        name: 'Evelyn Pope',
        post: 'Materialpro admin',
        status: 'pending',
        statuscolor: 'success',
        users: [
            {
                id: '1',
                icon: img3
            },
            {
                id: '2',
                icon: img2
            },
            {
                id: '3',
                icon: img1
            }
        ]
    },
    {
        avatar: img5,
        name: 'Tommy Garza',
        post: 'Elegant admin',
        status: 'cancel',
        statuscolor: 'error',
        users: [
            {
                id: '1',
                icon: img6
            },
            {
                id: '2',
                icon: img5
            }
        ]
    },
    {
        avatar: img6,
        name: 'Isabel Vasquez',
        post: 'Modernize admin',
        status: 'pending',
        statuscolor: 'success',
        users: [
            {
                id: '1',
                icon: img4
            },
            {
                id: '2',
                icon: img2
            }
        ]
    }
];

/*Basic Table 3*/
const basicTableData3: basicTable3[] = [
    {
        avatar: img1,
        name: 'Olivia Rhye',
        handle: '@rhye',
        status: 'active',
        statuscolor: 'success',
        statusoffline:false,
        email: 'olivia@ui.com',
        teams: [
            {
                status: 'Design',
                statuscolor: 'primary'
            },
            {
                status: 'Product',
                statuscolor: 'secondary'
            }
        ]
    },
    {
        avatar: img2,
        name: 'Barbara Steele',
        handle: '@steele',
        status: 'offline',
        statusoffline:true,
        statuscolor: 'dark',
        email: 'steele@ui.com',
        teams: [
            {
                status: 'Product',
                statuscolor: 'secondary'
            },
            {
                status: 'Operations',
                statuscolor: 'error'
            }
        ]
    },
    {
        avatar: img3,
        name: 'Leonard Gordon',
        handle: '@gordon',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'olivia@ui.com',
        teams: [
            {
                status: 'Finance',
                statuscolor: 'primary'
            },
            {
                status: 'Customer Success',
                statuscolor: 'success'
            }
        ]
    },
    {
        avatar: img4,
        name: 'Evelyn Pope',
        handle: '@pope',
        status: 'offline',
        statusoffline:true,
        statuscolor: 'dark',
        email: 'steele@ui.com',
        teams: [
            {
                status: 'Operations',
                statuscolor: 'error'
            },
            {
                status: 'Design',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: img5,
        name: 'Tommy Garza',
        handle: '@garza',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'olivia@ui.com',
        teams: [
            {
                status: 'Product',
                statuscolor: 'secondary'
            }
        ]
    },
    {
        avatar: img6,
        name: 'Isabel Vasquez',
        handle: '@vasquez',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'steele@ui.com',
        teams: [
            {
                status: 'Customer Success',
                statuscolor: 'success'
            }
        ]
    }
];

/*Basic Table 4*/
const basicTableData4: basicTable4[] = [
    {
        invoice: 'INV-3066',
        status: 'paid',
        statuscolor: 'primary',
        statusicon: CheckIcon,
        avatar: img1,
        name: 'Olivia Rhye',
        handle: 'olivia@ui.com',
        progress: 60
    },
    {
        invoice: 'INV-3067',
        status: 'cancelled',
        statuscolor: 'error',
        statusicon: XIcon,
        avatar: img2,
        name: 'Barbara Steele',
        handle: 'steele@ui.com',
        progress: 30
    },
    {
        invoice: 'INV-3068',
        status: 'paid',
        statuscolor: 'primary',
        statusicon: CheckIcon,
        avatar: img3,
        name: 'Leonard Gordon',
        handle: 'olivia@ui.com',
        progress: 45
    },
    {
        invoice: 'INV-3069',
        status: 'refunded',
        statuscolor: 'secondary',
        statusicon: ArrowBackUpIcon,
        avatar: img4,
        name: 'Evelyn Pope',
        handle: 'steele@ui.com',
        progress: 37
    },
    {
        invoice: 'INV-3070',
        status: 'cancelled',
        statuscolor: 'error',
        statusicon: XIcon,
        avatar: img5,
        name: 'Tommy Garza',
        handle: 'olivia@ui.com',
        progress: 87
    },
    {
        invoice: 'INV-3071',
        status: 'refunded',
        statuscolor: 'secondary',
        statusicon: ArrowBackUpIcon,
        avatar: img6,
        name: 'Isabel Vasquez',
        handle: 'steele@ui.com',
        progress: 32
    }
];

/*Basic Table 5*/
const basicTableData5: basicTable5[] = [
    {
        avatar: authimg1,
        name: 'Top Authors',
        handle: 'Successful Fellas',
        users: '4300 Users',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'PHP',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: authimg2,
        name: 'Popular Authors',
        handle: 'Most Successful',
        users: '1200 Users',
        courses: [
            {
                status: 'Bootstrap',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: authimg3,
        name: 'New Users',
        handle: 'Awesome Users',
        users: '2000 Users',
        courses: [
            {
                status: 'Reactjs',
                statuscolor: 'success'
            },
            {
                status: 'Angular',
                statuscolor: 'error'
            }
        ]
    },
    {
        avatar: authimg4,
        name: 'Active Customers',
        handle: 'Best Customers',
        users: '1500 Users',
        courses: [
            {
                status: 'Bootstrap',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: authimg5,
        name: 'Bestseller Theme',
        handle: 'Amazing Templates',
        users: '9500 Users',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'Reactjs',
                statuscolor: 'success'
            }
        ]
    }

];


/*Dark Table*/
const darkTableData: tableDark[] = [
    {
        avatar: img6,
        name: 'Andrew McDownland',
        post: 'Project Manager',
        pname: 'Real Homes WP Theme',
        status: 'Pending',
        statuscolor: 'warning',
        teams: [
            {
                id: '1',
                color: 'secondary',
                text: 'N'
            },
            {
                id: '2',
                color: 'warning   ',
                text: 'X'
            },
            {
                id: '3',
                color: 'primary   ',
                text: 'A'
            }
        ],
        budget: '$24.5k'
    },
    {
        avatar: img5,
        name: 'Christopher Jamil',
        post: 'Project Manager',
        pname: 'MedicalPro WP Theme',
        status: 'Completed',
        statuscolor: 'primary',
        teams: [
            {
                id: '1',
                color: 'secondary',
                text: 'X'
            }
        ],
        budget: '$12.8k'
    },
    {
        avatar: img4,
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        pname: 'Hosting Press HTML',
        status: 'Active',
        statuscolor: 'success',
        teams: [
            {
                id: '1',
                color: 'primary',
                text: 'X'
            },
            {
                id: '2',
                color: 'error',
                text: 'Y'
            }
        ],
        budget: '$2.4k'
    },
    {
        avatar: img3,
        name: 'Sunil Joshi',
        post: 'Web Designer',
        pname: 'Elite Admin',
        status: 'Active',
        statuscolor: 'success',
        teams: [
            {
                id: '1',
                color: 'error',
                text: 'S'
            },
            {
                id: '2',
                color: 'secondary   ',
                text: 'D'
            }
        ],
        budget: '$3.9'
    },
    {
        avatar: img2,
        name: 'Micheal Doe',
        post: 'Content Writer',
        pname: 'Helping Hands WP Theme',
        status: 'Cancel',
        statuscolor: 'error',
        teams: [
            {
                id: '1',
                color: 'secondary',
                text: 'S'
            }
        ],
        budget: '$9.3k'
    },
    {
        avatar: img1,
        name: 'John Deo',
        post: 'Web Designer',
        pname: 'Elite Admin',
        status: 'Active',
        statuscolor: 'success',
        teams: [
            {
                id: '1',
                color: 'primary',
                text: 'R'
            },
            {
                id: '2',
                color: 'secondary   ',
                text: 'D'
            }
        ],
        budget: '$3.9'
    }
];

/*Density Table*/
const tableDensityData: tableDensity[] = [
    {
        avatar: img6,
        name: 'Isabel Vasquez',
        post: 'Modernize admin',
        status: 'pending',
        statuscolor: 'success',
        users: [
            {
                id: '1',
                icon: img6
            },
            {
                id: '2',
                icon: img1
            }
        ]
    },
    {
        avatar: img1,
        name: 'Olivia Rhye',
        post: 'Xtreme admin',
        status: 'active',
        statuscolor: 'primary',
        users: [
            {
                id: '1',
                icon: img2
            },
            {
                id: '2',
                icon: img1
            }
        ]
    },
    {
        avatar: img3,
        name: 'Leonard Gordon',
        post: 'Monster admin',
        status: 'active',
        statuscolor: 'primary',
        users: [
            {
                id: '1',
                icon: img2
            },
            {
                id: '2',
                icon: img3
            }
        ]
    },
    {
        avatar: img4,
        name: 'Evelyn Pope',
        post: 'Materialpro admin',
        status: 'pending',
        statuscolor: 'success',
        users: [
            {
                id: '1',
                icon: img3
            },
            {
                id: '2',
                icon: img2
            },
            {
                id: '3',
                icon: img1
            }
        ]
    },
    {
        avatar: img2,
        name: 'Barbara Steele',
        post: 'Adminpro admin',
        status: 'cancel',
        statuscolor: 'error',
        users: [
            {
                id: '1',
                icon: img3
            },
            {
                id: '2',
                icon: img2
            },
            {
                id: '3',
                icon: img1
            }
        ]
    },

    {
        avatar: img5,
        name: 'Tommy Garza',
        post: 'Elegant admin',
        status: 'cancel',
        statuscolor: 'error',
        users: [
            {
                id: '1',
                icon: img6
            },
            {
                id: '2',
                icon: img5
            }
        ]
    }
];

/*Fixed Header Table*/
const tableFixedHeaderData: tableFixedHeader[] = [
    {
        avatar: img2,
        name: 'Barbara Steele',
        handle: '@steele',
        status: 'offline',
        statusoffline:true,
        statuscolor: 'dark',
        email: 'steele@ui.com',
        teams: [
            {
                status: 'Product',
                statuscolor: 'success'
            },
            {
                status: 'Operations',
                statuscolor: 'error'
            }
        ]
    },
    {
        avatar: img3,
        name: 'Leonard Gordon',
        handle: '@gordon',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'olivia@ui.com',
        teams: [
            {
                status: 'Finance',
                statuscolor: 'info'
            },
            {
                status: 'Customer Success',
                statuscolor: 'success'
            }
        ]
    },
    {
        avatar: img1,
        name: 'Olivia Rhye',
        handle: '@rhye',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'olivia@ui.com',
        teams: [
            {
                status: 'Design',
                statuscolor: 'info'
            },
            {
                status: 'Product',
                statuscolor: 'primary'
            },
            {
                status: 'Material',
                statuscolor: 'success'
            },
            {
                status: 'Account',
                statuscolor: 'info'
            }
        ]
    },

    {
        avatar: img4,
        name: 'Evelyn Pope',
        handle: '@pope',
        status: 'offline',
        statusoffline:true,
        statuscolor: 'dark',
        email: 'steele@ui.com',
        teams: [
            {
                status: 'Operations',
                statuscolor: 'error'
            },
            {
                status: 'Design',
                statuscolor: 'info'
            }
        ]
    },
    {
        avatar: img5,
        name: 'Tommy Garza',
        handle: '@garza',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'olivia@ui.com',
        teams: [
            {
                status: 'Product',
                statuscolor: 'warning'
            }
        ]
    },
    {
        avatar: img6,
        name: 'Isabel Vasquez',
        handle: '@vasquez',
        status: 'active',
        statusoffline:false,
        statuscolor: 'success',
        email: 'steele@ui.com',
        teams: [
            {
                status: 'Customer Success',
                statuscolor: 'success'
            }
        ]
    }
];

/*Height Table*/
const heightTableData: heightTable[] = [
    {
        avatar: authimg3,
        name: 'New Users',
        handle: 'Awesome Users',
        users: '2000 Users',
        email: 'mark@ui.com',
        courses: [
            {
                status: 'Reactjs',
                statuscolor: 'success'
            },
            {
                status: 'Angular',
                statuscolor: 'error'
            }
        ]
    },
    {
        avatar: authimg4,
        name: 'Active Customers',
        handle: 'Best Customers',
        users: '1500 Users',
        email: 'deo@ui.com',
        courses: [
            {
                status: 'Bootstrap',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: authimg1,
        name: 'Top Authors',
        handle: 'Successful Fellas',
        users: '4300 Users',
        email: 'olivia@ui.com',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'PHP',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: authimg2,
        name: 'Popular Authors',
        handle: 'Most Successful',
        users: '1200 Users',
        email: 'john@doe.com',
        courses: [
            {
                status: 'Bootstrap',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: authimg5,
        name: 'Bestseller Theme',
        handle: 'Amazing Templates',
        users: '9500 Users',
        email: 'steele@ui.com',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'Reactjs',
                statuscolor: 'success'
            }
        ]
    },
    {
        avatar: authimg1,
        name: 'New Authors',
        handle: 'Successful Fellas',
        users: '4800 Users',
        email: 'olivia@ui.com',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'Java',
                statuscolor: 'info'
            }
        ]
    }
]


/*Table Action*/
const tableActionData: tableAction[] = [
    {
        icon: PlusIcon,
        listtitle: 'Add'
    },
    {
        icon: EditIcon,
        listtitle: 'Edit'
    },
    {
        icon: TrashIcon,
        listtitle: 'Delete'
    }
]
export { basicTableData1, basicTableData2, basicTableData3, basicTableData4, basicTableData5, darkTableData, tableDensityData, tableFixedHeaderData, heightTableData, tableActionData };
