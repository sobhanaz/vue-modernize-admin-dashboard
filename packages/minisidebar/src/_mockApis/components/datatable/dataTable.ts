
import type { Datatables,SelectedRowDatatable,filtrable } from '@/types/components/datatables/index';

import img1 from '@/assets/images/blog/blog-img1.jpg';
import img2 from '@/assets/images/blog/blog-img2.jpg';
import img3 from '@/assets/images/blog/blog-img3.jpg';
import img4 from '@/assets/images/blog/blog-img4.jpg';
import img5 from '@/assets/images/blog/blog-img5.jpg';

const BasicDatatables: Datatables[] = [
    {
        name: 'Sunil Joshi',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9'
    },
    {
        name: 'Andrew McDownland',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',

    },
    {
        name: 'Christopher Jamil',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k'
    },
    {
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        project: 'Hosting Press HTML',
        status: 'Active',
        budget: '$2.4k'
    },
    {
        name: 'Micheal Doe',
        post: 'Content Writer',
        project: 'Helping Hands WP Theme',
        status: 'Cancel',
        budget: '$9.3k'
    },
    {
        name: 'Daniel Kristeen',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',

    },
    {
        name: 'Julian Josephs',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k'
    },
    {
        name: 'Jan Petrovic',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9'
    },
    {
        name: 'Leanne Graham',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',

    },
    {
        name: 'Glenna Reichert',
        post: 'Web DEveloper',
        project: 'Monster Admin',
        status: 'Pending',
        budget: '$30.5k',
    },
    
];

const SelectedRow: SelectedRowDatatable[] = [
    {
        name: 'Sunil Joshi',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9',
        selectable: false,
    },
    {
        name: 'Andrew McDownland',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
        selectable: true,
    },
    {
        name: 'Christopher Jamil',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k',
        selectable: true,
    },
    {
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        project: 'Hosting Press HTML',
        status: 'Active',
        budget: '$2.4k',
        selectable: false,
    },
    {
        name: 'Micheal Doe',
        post: 'Content Writer',
        project: 'Helping Hands WP Theme',
        status: 'Cancel',
        budget: '$9.3k',
        selectable: false,
    },
    {
        name: 'Jan Petrovic',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
        selectable: true,
    },
    {
        name: 'Daniel Kristeen',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k',
        selectable: false,
    },
    {
        name: 'Julian Josephs',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9',
        selectable: true
    },
    {
        name: 'Leanne Graham',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
        selectable: false,
    },
    {
        name: 'Glenna Reichert',
        post: 'Web DEveloper',
        project: 'Monster Admin',
        status: 'Pending',
        budget: '$30.5k',
        selectable: true,
    },
    
];

const UppercaseFilter: Datatables[] = [
    {
        name: 'Sunil Joshi',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9',
    
    },
    {
        name: 'Andrew McDownland',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
    },
    {
        name: 'Christopher Jamil',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k',
    },
    {
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        project: 'Hosting Press HTML',
        status: 'Active',
        budget: '$2.4k',
    },
    {
        name: 'MICHEL DOE',
        post: 'Content Writer',
        project: 'Helping Hands WP Theme',
        status: 'Cancel',
        budget: '$9.3k',
    },
    {
        name: 'JAN PETROVICK',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
    },
    {
        name: 'Daniel Kristeen',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k',
    },
    {
        name: 'Julian Josephs',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9',
    },
    {
        name: 'Leanne Graham',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
    },
    {
        name: 'Glenna Reichert',
        post: 'Web DEveloper',
        project: 'Monster Admin',
        status: 'Pending',
        budget: '$30.5k',
    },
    
    
];

const GroupTable: Datatables[] = [
    {
        name: 'Sunil Joshi',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9',
    
    },
    {
        name: 'Andrew McDownland',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
    },
    {
        name: 'Christopher Jamil',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k',
    },
    {
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        project: 'Hosting Press HTML',
        status: 'Active',
        budget: '$2.4k',
    },
    {
        name: 'MICHEL DOE',
        post: 'Content Writer',
        project: 'Helping Hands WP Theme',
        status: 'Cancel',
        budget: '$9.3k',
    },
    {
        name: 'JAN PETROVICK',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
    },
    {
        name: 'Daniel Kristeen',
        post: 'Project Manager',
        project: 'MedicalPro WP Theme',
        status: 'Completed',
        budget: '$12.8k',
    },
    {
        name: 'Julian Josephs',
        post: 'Web Designer',
        project: 'Elite Admin',
        status: 'Active',
        budget: '$3.9',
    },
    {
        name: 'Leanne Graham',
        post: 'Project Manager',
        project: 'Real Homes WP Theme',
        status: 'Pending',
        budget: '$24.5k',
    },
    {
        name: 'Glenna Reichert',
        post: 'Web DEveloper',
        project: 'Monster Admin',
        status: 'Pending',
        budget: '$30.5k',
    },
    
];

const Filtrable: filtrable[] = [
    {
        name: 'Nebula GTX 3080',
        image: img1,
        price: 699.99,
        rating: 5,
        stock: true,
    },
    {
        name: 'Galaxy RTX 3080',
        image: img2,
        price: 799.99,
        rating: 4,
        stock: false,
    },
    {
        name: 'Orion RX 6800 XT',
        image: img3,
        price: 649.99,
        rating: 3,
        stock: true,
    },
    {
        name: 'Vortex RTX 3090',
        image: img4,
        price: 1499.99,
        rating: 4,
        stock: true,
    },
    {
        name: 'Cosmos GTX 1660 Super',
        image: img5,
        price: 299.99,
        rating: 4,
        stock: false,
    },
    
];

export {BasicDatatables,SelectedRow,UppercaseFilter,GroupTable,Filtrable};
