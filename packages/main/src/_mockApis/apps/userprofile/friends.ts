// project imports
import mock from '../../mockAdapter';
import { Chance } from 'chance';


import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user8 from '@/assets/images/profile/user-6.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';
import user6 from '@/assets/images/profile/user-6.jpg';
import user7 from '@/assets/images/profile/user-7.jpg';
import user11 from '@/assets/images/profile/user-3.jpg';
import user12 from '@/assets/images/profile/user-4.jpg';
import user9 from '@/assets/images/profile/user-5.jpg';
import user10 from '@/assets/images/profile/user-2.jpg';

const chance = new Chance();

// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

// friends list
const friends: KeyedObject[] = [
    {
        id: '#1Friends_Barney',
        avatar: user1,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 10
    },
    {
        id: '#2Friends_Thea',
        avatar: user2,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 89
    },
    {
        id: '#3Friends_Guiseppe',
        avatar: user3,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 65
    },
    {
        id: '#4Friends_Henderson',
        avatar: user4,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 1
    },
    {
        id: '#5Friends_Maddison',
        avatar: user5,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 14
    },
    {
        id: '#6Friends_Wilber',
        avatar: user6,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 36
    },
    {
        id: '#7Friends_Hayden',
        avatar: user7,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 106
    },
    {
        id: '#8Friends_Lloyd',
        avatar: user8,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 10
    },
    {
        id: '#9Friends_Kris',
        avatar: user9,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 0
    },
    {
        id: '#10Friends_Kyler',
        avatar: user10,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 48
    },
    {
        id: '#11Friends_Pamela',
        avatar: user11,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 72
    },
    {
        id: '#12Friends_Betty',
        avatar: user12,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 99
    },
    {
        id: '#13Friends_Anthony',
        avatar: user1,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 78
    },
    {
        id: '#14Friends_Reggie',
        avatar: user3,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 1
    },
    {
        id: '#15Friends_Francesca',
        avatar: user4,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 68
    },
    {
        id: '#16Friends_Carmel',
        avatar: user5,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 15
    },
    {
        id: '#17Friends_Darwin',
        avatar: user6,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 10
    },
    {
        id: '#18Friends_Kaylin',
        avatar: user7,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 36
    },
    {
        id: '#19Friends_Kamryn',
        avatar: user8,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 55
    },
    {
        id: '#20Friends_Madelyn',
        avatar: user9,
        name: chance.name(),
        location: chance.country({ full: true }),
        role: chance.profession(),
        mutual: 78
    }
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/friends/list').reply(200, { friends });
