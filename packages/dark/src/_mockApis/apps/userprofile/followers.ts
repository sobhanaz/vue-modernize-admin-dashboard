// project imports
import mock from '../../mockAdapter';
import user1 from '@/assets/images/profile/user-1.jpg';
import user8 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';
import user6 from '@/assets/images/profile/user-6.jpg';
import user7 from '@/assets/images/profile/user-7.jpg';
import user11 from '@/assets/images/profile/user-3.jpg';
import user12 from '@/assets/images/profile/user-4.jpg';
import user9 from '@/assets/images/profile/user-5.jpg';
import user10 from '@/assets/images/profile/user-2.jpg';

// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

// followers list

const followers: KeyedObject[] = [
    {
        id: '#1Followers_Barney',
        avatar: user6,
        name: 'Barney',
        location: 'Handburgh',
        follow: 1
    },
    {
        id: '#2Followers_Thea',
        avatar: user3,
        name: 'Thea',
        location: 'New jana',
        follow: 2
    },
    {
        id: '#3Followers_Guiseppe',
        avatar: user7,
        name: 'Guiseppe',
        location: 'Jenkinsstad',
        follow: 1
    },
    {
        id: '#4Followers_Henderson',
        avatar: user8,
        name: 'Henderson',
        location: 'South Antonina',
        follow: 1
    },
    {
        id: '#5Followers_Maddison',
        avatar: user6,
        name: 'Maddison',
        location: 'New Dorthy',
        follow: 1
    },
    {
        id: '#6Followers_Wilber',
        avatar: user1,
        name: 'Wilber',
        location: 'Twilahsven',
        follow: 1
    },
    {
        id: '#7Followers_Hayden',
        avatar: user4,
        name: 'Hayden',
        location: 'Darrelshaire',
        follow: 1
    },
    {
        id: '#8Followers_Lloyd',
        avatar: user10,
        name: 'Lloyd',
        location: 'New Credrick',
        follow: 1
    },
    {
        id: '#9Followers_Kris',
        avatar: user8,
        name: 'Kris',
        location: 'New Dianna',
        follow: 1
    },
    {
        id: '#10Followers_Kyler',
        avatar: user11,
        name: 'Kyler',
        location: 'Murraymouth',
        follow: 1
    },
    {
        id: '#11Followers_Pamela',
        avatar: user3,
        name: 'Pamela',
        location: 'Murraymouth',
        follow: 1
    },
    {
        id: '#12Followers_Betty',
        avatar: user6,
        name: 'John Doe',
        location: 'North Zole',
        follow: 1
    },
    {
        id: '#13Followers_Anthony',
        avatar: user5,
        name: 'Anthony',
        location: 'Lake Judy',
        follow: 1
    },
    {
        id: '#14Followers_Reggie',
        avatar: user12,
        name: 'Reggie',
        location: 'Kailynland',
        follow: 1
    },
    {
        id: '#15Followers_Francesca',
        avatar: user1,
        name: 'Francesca',
        location: 'Pagacview',
        follow: 2
    },
    {
        id: '#16Followers_Carmel',
        avatar: user9,
        name: 'Carmel',
        location: 'Port Lerashire',
        follow: 1
    },
    {
        id: '#17Followers_Darwin',
        avatar: user4,
        name: 'Darwin',
        location: 'North Jacquesside',
        follow: 2
    },
    {
        id: '#18Followers_Kaylin',
        avatar: user3,
        name: 'Kaylin',
        location: 'Bergstrombury',
        follow: 1
    },
    {
        id: '#19Followers_Kamryn',
        avatar: user7,
        name: 'Kamryn',
        location: 'South Norma',
        follow: 1
    },
    {
        id: '#20Followers_Madelyn',
        avatar: user8,
        name: 'Madelyn',
        location: 'Port Opheliamouth',
        follow: 1
    }
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/followers/list').reply(200, { followers });

// mock.onGet('/api/followers/list').reply(() => {
//     return [200, followers];
// });
