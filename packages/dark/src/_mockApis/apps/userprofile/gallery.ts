// project imports
import mock from '../../mockAdapter';
// assets
import image1 from '@/assets/images/products/s1.jpg';
import image2 from '@/assets/images/products/s2.jpg';
import image3 from '@/assets/images/products/s3.jpg';
import image4 from '@/assets/images/products/s4.jpg';
import image5 from '@/assets/images/products/s5.jpg';
import image6 from '@/assets/images/products/s6.jpg';
import image7 from '@/assets/images/products/s7.jpg';
import image8 from '@/assets/images/products/s8.jpg';
import image9 from '@/assets/images/products/s9.jpg';
import image10 from '@/assets/images/products/s10.jpg';
import image11 from '@/assets/images/products/s11.jpg';
import image12 from '@/assets/images/products/s12.jpg';

// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

// gallery components

const gallery: KeyedObject[] = [
    {
        id: '#1Gallery',
        image: image1,
        title: '1080p_table_denar.pdf',
        dateTime: 'Tue Aug 24 2024'
    },
    {
        id: '#2Gallery',
        image: image2,
        title: 'handmade.mp2',
        dateTime: 'Fri Apr 30 2024'
    },
    {
        id: '#3Gallery',
        image: image3,
        title: 'granite_cheese.wav',
        dateTime: 'Fri Jun 25 2024'
    },
    {
        id: '#4Gallery',
        image: image4,
        title: 'invoice.mpg',
        dateTime: 'Sat Oct 23 2024'
    },
    {
        id: '#5Gallery',
        image: image5,
        title: 'benchmark_forge.m1v',
        dateTime: 'Fri Jan 21 2024'
    },
    {
        id: '#6Gallery',
        image: image6,
        title: 'violet_withdrawal.png',
        dateTime: 'Wed Sep 22 2024'
    },
    {
        id: '#7Gallery',
        image: image7,
        title: 'web_readiness.mpeg',
        dateTime: 'Mon Jul 12 2024'
    },
    {
        id: '#8Gallery',
        image: image8,
        title: 'zimbabwe.htm',
        dateTime: 'Sat Mar 20 2024'
    },
    {
        id: '#9Gallery',
        image: image9,
        title: 'circuit.m3a',
        dateTime: 'Tue Jan 18 2024'
    },
    {
        id: '#10Gallery',
        image: image10,
        title: 'data_red.png',
        dateTime: 'Sun Apr 04 2024'
    },
    {
        id: '#11Gallery',
        image: image11,
        title: 'handcrafted.html',
        dateTime: 'Tue May 25 2024'
    },
    {
        id: '#12Gallery',
        image: image12,
        title: 'hacking_games.pdf',
        dateTime: 'Tue Oct 19 2024'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/gallery/list').reply(200, { gallery });
