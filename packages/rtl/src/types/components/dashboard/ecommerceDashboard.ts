/*Payment Gatway*/
type paymentGateway = {
    img: string;
    title: string;
    subtitle: string;
    rank: string;
    disable: string;
    bgcolor: string;
};

/*Recent Transaction*/
// type recentTrans = {
//     title: string;
//     subtitle: string;
//     textcolor: string;
//     boldtext: string;
//     line: string;
//     link: string;
//     url: string;
// };

type recentTrans = {
    title: string;
    subtitle: string;
    textcolor: string;
    boldtext: boolean;
    line: boolean;
    link: string;
    url: string;
};


export type { paymentGateway,recentTrans }