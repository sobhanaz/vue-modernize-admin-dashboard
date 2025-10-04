// product shop list
export type Products = {
    id: string | number | undefined;
    image: string;
    name: string;
    description?: string;
    rating?: number;
    discount?: number;
    salePrice?: number;
    offerPrice?: number;
    gender?: string;
    price?:string;
    categories?: string[];
    colors?: string[];
    popularity?: number;
    date?: number;
    created: Date;
    isStock?: boolean;
    new?: number;
    qty?: number;
    rank?:number;
};


// checkout-cart billing address
export type Address = {
    id?: string | any | Date;
    name: string;
    destination: string;
    building: string;
    city: string;
    state: string;
    phone: string;
    isDefault: boolean;
};

// product reviews list
export type Reviews = {
    id: string | number | undefined;
    rating: number;
    review: string;
    date: Date | string;
    profile: {
        avatar: string;
        name: string;
        status: boolean;
    };
};

// product shop filter
export type ProductsFilter = {
    length?: number;
    search: string;
    sort: string;
    gender: string[];
    categories: string[];
    colors: string[];
    price:string[];
    rating: number;
};

// product shop filter - sort options
export type SortOptionsProps = {
    value: string;
    label: string;
};

// product shop filter - colors options
export type ColorsOptionsProps = {
    label: string;
    value: string;
    bg: string;
};

export type PaymentOptionsProps = {
    id: number;
    value: string;
    title: string;
    caption: string;
    image: string;
    size: {
        width: number;
        height: number;
    };
};

export interface ProductStateProps {
    products?: Products[];
    cart?: Products[] | any;
    relatedProducts?: Products[];
    reviews?: Reviews[];
    addresses?: Address[];
    sortBy?: String;
    gender?: object | [] | String;
    category?: object | [] | String;
    price?: object | [] | String;
    error?: object | string | null;
    subTotal?: any;
    total?: number;
    discount?: any;
    color?: string;
    rank?:number;
}



