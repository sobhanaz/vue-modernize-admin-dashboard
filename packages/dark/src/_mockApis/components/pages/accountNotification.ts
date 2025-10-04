/*import tabler icons*/
import { ArticleIcon, CheckboxIcon, ClockIcon, MailIcon, TruckDeliveryIcon } from 'vue-tabler-icons';
import type { notificationTabType } from '@/types/components/pages/notificationTab';
const notificationTb: notificationTabType[] = [
    {
        title: 'Our newsletter',
        subtitle: 'We will always let you know about important changes',
        icon: ArticleIcon,
        switch: false
    },
    {
        title: 'Order Confirmation',
        subtitle: 'You will be notified when customer order any product',
        icon: CheckboxIcon,
        switch: true
    },
    {
        title: 'Order Status Changed',
        subtitle: 'You will be notified when customer make changes to the order',
        icon: ClockIcon,
        switch: false
    },
    {
        title: 'Order Delivered',
        subtitle: 'You will be notified once the order is delivered',
        icon: TruckDeliveryIcon,
        switch: false
    },
    {
        title: 'Email Notification',
        subtitle: 'Turn on email notificaiton to get updates through email',
        icon: MailIcon,
        switch: true
    }
];

export {notificationTb};
