// ==============================|| PRODUCT - COLOR FILTER ||============================== //
// project imports
import type { ColorsOptionsProps } from '@/types/apps/EcommerceType';

const ColorsOptions: ColorsOptionsProps[] = [
    {
        label: 'Light Primary',
        value: 'primary',
        bg: 'bg-primary'
    },
    {
        label: 'Light Secondary',
        value: 'secondary',
        bg: 'bg-secondary'
    },
    {
        label: 'Light Green',
        value: 'lightsuccess',
        bg: 'bg-lightsuccess'
    },
    {
        label: 'Green',
        value: 'success',
        bg: 'bg-success'
    },
    {
        label: 'Light Red',
        value: 'lighterror',
        bg: 'bg-lighterror'
    },
    {
        label: 'Red',
        value: 'error',
        bg: 'bg-error'
    },
    {
        label: 'Yellow',
        value: 'warning',
        bg: 'bg-warning'
    },
    {
        label: 'Dark Yellow',
        value: 'lightwarning',
        bg: 'bg-lightwarning'
    },
    {
        label: 'Grey',
        value: 'lightText',
        bg: 'bg-lightText'
    },
    {
        label: 'Black',
        value: 'darkText',
        bg: 'bg-darkText'
    }
];

export default ColorsOptions;
