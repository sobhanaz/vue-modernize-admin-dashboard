import type { TablerIconComponent } from "vue-tabler-icons";
type LeaderType = {
    img: string;
    name: string;
    position: string;
};
type TemplateType = {
    title: string;
    subtitle: string;
};

type UserReviews = {
    img: string;
    title: string;
    review: string;
};

type ThemeFeatures = {
    icon: any;
    title: string;
};

type PackagesPriceType={
    listtitle: string;
    status:boolean;
    icon:boolean;
    disable:boolean;
};

type PackageType = {
    caption: string;
    subtext:string;
    price: number;
    period:string;
    buttontext: string;
    url: string;
    tagtext: boolean;
    list:PackagesPriceType[];
};

type FooterType = {
    menu:string;
    link:string
}

export type { LeaderType, TemplateType,UserReviews,ThemeFeatures,PackageType,FooterType};