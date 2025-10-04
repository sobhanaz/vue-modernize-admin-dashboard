import type { paymentGateway,recentTrans  } from '@/types/components/dashboard/ecommerceDashboard';
import icon1 from "@/assets/images/svgs/icon-paypal.svg";
import icon2 from "@/assets/images/svgs/icon-office-bag.svg";
import icon3 from "@/assets/images/svgs/icon-master-card.svg";
import icon4 from "@/assets/images/svgs/icon-pie.svg";

/*--Payment gateways--*/
const paymentGateways : paymentGateway[] = [
    {
        img: icon1,
        title:'Paypal',
        subtitle:'Big Brands',
        rank:'+$6,235',
        disable:'',
        bgcolor:"primary",
      },
      {
        img: icon2,
        title:'Wallet',
        subtitle:'Bill payment',
        rank:'-$345',
        disable:'emphasis',
        bgcolor:"success",
      },
      {
        img: icon3,
        title:'Credit Card',
        subtitle:'Money reversed',
        rank:'+$2,235',
        disable:'',
        bgcolor:"warning",
      },
      {
        img: icon4,
        title:'Refund',
        subtitle:'Bill Payment',
        rank:'-$32',
        disable:'emphasis',
        bgcolor:"error",
      },
];

/*--Recent Transaction--*/
const recentTransaction  : recentTrans[] = [
    {
        title:'09:30 am',
        subtitle:'Payment received from John Doe of $385.90',
        textcolor:'primary',
        boldtext:false,
        line:true,
        link:'',
        url:''
      },
      {
        title:'10:00 am',
        subtitle:'New sale recorded',
        textcolor:'secondary',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'12:00 am',
        subtitle:'Payment was made of $64.95 to Michael',
        textcolor:'success',
        boldtext:false,
        line:true,
        link:'',
        url:''
      },
      {
        title:'09:30 am',
        subtitle:'New sale recorded',
        textcolor:'warning',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'09:30 am',
        subtitle:'New arrival recorded',
        textcolor:'error',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'12:00 am',
        subtitle:'Payment Done',
        textcolor:'success',
        boldtext:false,
        line:false,
        link:'',
        url:''
      },
]

export{paymentGateways,recentTransaction}