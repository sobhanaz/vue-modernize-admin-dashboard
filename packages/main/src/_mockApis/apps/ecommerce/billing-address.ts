import mock from '../../mockAdapter';

// third-party
import { add, sub } from 'date-fns';
import { Chance } from 'chance';
//Types
import type { Address } from '@/types/apps/EcommerceType';

const chance = new Chance();

// billing address list
let address: Address[] = [
    {
        id: 1,
        name: chance.name(),
        destination: 'Home',
        building: chance.address({ short_suffix: true }),
        city: chance.city(),
        state: chance.state({ full: true }),
        phone: chance.phone(),
        isDefault: true
    },
    {
        id: 2,
        name: chance.name(),
        destination: 'Office',
        building: chance.address({ short_suffix: true }),
        city: chance.city(),
        state: chance.state({ full: true }),
        phone: chance.phone(),
        isDefault: false
    },
    {
        id: 3,
        name: chance.name(),
        destination: 'Office',
        building: chance.address({ short_suffix: true }),
        city: chance.city(),
        state: chance.state({ full: true }),
        phone: chance.phone(),
        isDefault: false
    }
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/api/address/list').reply(() => {
    return [200, address];
});

mock.onPost('/api/address/new').reply((request) => {
    try {
        const data = JSON.parse(request.data);
        const { name, destination, building, street, city, state, country, post, phone, isDefault } = data;
        const newAddress = {
            id: new Date(),
            name,
            destination,
            building,
            street,
            city,
            state,
            country,
            post,
            phone,
            isDefault
        };

        if (isDefault) {
            address = address.map((item) => {
                if (item.isDefault === true) {
                    return { ...item, isDefault: false };
                }
                return item;
            });
        }

        address = [...address, newAddress];

        return [200, { address }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/address/edit').reply((request) => {
    try {
        const data = JSON.parse(request.data);

        if (data.isDefault) {
            address = address.map((item) => {
                if (item.isDefault === true) {
                    return { ...item, isDefault: false };
                }
                return item;
            });
        }

        address = address.map((item) => {
            if (item.id === data.id) {
                return data;
            }
            return item;
        });

        return [200, { address }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});
