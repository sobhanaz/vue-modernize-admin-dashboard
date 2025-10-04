import type { TablerIconComponent } from "vue-tabler-icons";
type listPriceType={
    icon: TablerIconComponent;
    iconcolor: string;
    listtitle: string;
    status:boolean
};
type pricingType = {
    caption: string;
    image: string;
    free: boolean;
    buttontext: string;
    tagtext: boolean;
    price: number;
    yearlyprice: number;
    list:listPriceType[];
};
export type { pricingType };