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

// Photos components

const photos: KeyedObject[] = [
    {
        id: '#1Photos',
        avatar: image1,
    },
    {
        id: '#2Photos',
        avatar: image2,
    },
    {
        id: '#3Photos',
        avatar: image3,
    },
    {
        id: '#4Photos',
        avatar: image4,
    },
    {
        id: '#5Photos',
        avatar: image5,
    },
    {
        id: '#6Photos',
        avatar: image6,
    },
    {
        id: '#7Photos',
        avatar: image7,
    },
    {
        id: '#8Photos',
        avatar: image8,
    },
    {
        id: '#9Photos',
        avatar: image9,
    },
    {
        id: '#10Photos',
        avatar: image10,
    },
    {
        id: '#11Photos',
        avatar: image11,
    },
    {
        id: '#12Photos',
        avatar: image12,
    },
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/photos').reply(200, { photos });
