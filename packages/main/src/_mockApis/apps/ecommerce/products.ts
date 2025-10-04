import mock from '../../mockAdapter';

// third-party
import { add, sub } from 'date-fns';
import { Chance } from 'chance';
import product1 from '@/assets/images/products/s11.jpg';
import product2 from '@/assets/images/products/s2.jpg';
import product3 from '@/assets/images/products/s3.jpg';
import product4 from '@/assets/images/products/s4.jpg';
import product5 from '@/assets/images/products/s5.jpg';
import product6 from '@/assets/images/products/s6.jpg';
import product7 from '@/assets/images/products/s7.jpg';
import product8 from '@/assets/images/products/s8.jpg';

//Types
import type { Products } from '@/types/apps/EcommerceType';

const chance = new Chance();
// products list
const products: Products[] = [
    {
        id: 1,
        image: product1,
        name: 'Cute Soft Teddybear',
        description: chance.paragraph({ sentences: 1 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 25,
        salePrice: 200,
        offerPrice: 175,
        gender: 'kids',
        categories: ['fashion', 'toys'],
        colors: ['error', 'warning', 'primary', 'secondary'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
        isStock: true,
        qty: 1,
        rank:87,
        price:'200'
    },
    {
        id: 2,
        image: product2,
        name: 'Psalms Book for Growth',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 10,
        salePrice: 89,
        offerPrice: 81,
        gender: 'kids',
        categories: ['fashion', 'toys'],
        colors: ['lightprimary', 'success', 'lighterror', 'warning'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
        isStock: false,
        qty: 1,
        rank:87,
        price:'100'
    },
    {
        id: 3,
        image: product3,
        name: 'The Psychology of Money',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 40,
        salePrice: 85.0,
        offerPrice: 49.9,
        gender: 'male',
        categories: ['fashion', 'electronics'],
        colors: ['lightprimary', 'primary'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 4, hours: 9, minutes: 50 }),
        isStock: true,
        qty: 1,
        rank:50,
        price:'100'
    },
    {
        id: 4,
        image: product4,
        name: 'Boat Headphone',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 17,
        salePrice: 36.0,
        offerPrice: 29,
        gender: 'kids',
        categories: ['fashion', 'electronics', 'toys'],
        colors: ['error', 'warning', 'warning'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 7, hours: 6, minutes: 45 }),
        isStock: false,
        qty: 1,
        rank:90,
        price:'50'
    },
    {
        id: 5,
        image: product5,
        name: 'MacBook Air Pro',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 20,
        salePrice: 15,
        offerPrice: 12,
        gender: 'male',
        categories: ['books'],
        colors: ['warning', 'lightprimary'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 2, hours: 9, minutes: 45 }),
        isStock: true,
        qty: 1,
        rank:88,
        price:'50'
    },
    {
        id: 6,
        image: product6,
        name: 'Gaming Console',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 13,
        salePrice: 99,
        offerPrice: 86,
        gender: 'female',
        categories: ['fashion', 'kitchen'],
        colors: ['primary', 'warning'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: add(new Date(), { days: 6, hours: 10, minutes: 0 }),
        isStock: true,
        qty: 1,
        rank:95,
        price:'100'
    },
    {
        id: 7,
        image: product7,
        name: 'Red Valvet Dress',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 15,
        salePrice: 16,
        offerPrice: 14.59,
        gender: 'female',
        categories: ['fashion'],
        colors: ['error', 'secondary', 'primary', 'warning'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: add(new Date(), { days: 14, hours: 1, minutes: 55 }),
        isStock: false,
        qty: 1,
        rank:60,
        price:'50'
    },
    {
        id: 8,
        image: product8,
        name: 'Shoes for Girls',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 20,
        salePrice: 130,
        offerPrice: 105,
        gender: 'female',
        categories: ['toys'],
        colors: ['lightsuccess', 'primary', 'success'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 0, hours: 11, minutes: 10 }),
        isStock: true,
        qty: 1,
        rank:80,
        price:'151'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

// mock.onGet('/api/products/list').reply(200, { products });
mock.onGet('/api/products/list').reply(() => {
    return [200, products];
});

export default products;