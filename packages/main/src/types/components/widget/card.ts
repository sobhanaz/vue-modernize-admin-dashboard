import type { TablerIconComponent } from "vue-tabler-icons";

/*Card types*/
type cardsType = {
    avatar: string;
    coveravatar: string;
    read: string;
    title: string;
    link: string;
    category: string;
    name: string;
    view: string;
    comments: string;
    time: string;
};

/*Follow card types*/
type followCard={
    title: string;
    location: string;
    avatar: string;
};

/*Music card types*/
type musicCards={
    title: string;
    subheader: string;
    img: string;
}

/*Products card types*/
type productsCards= {
    title: string;
    link: string;
    photo: string;
    salesPrice: number;
    price: number;
    rating: number;
};

/*Social Icon card types*/
type socialiconCards={
    name: string;
    icon: TablerIconComponent;
    color: string;
};

/*Profile card types*/
type profileCard={
    title: string;
    subtitle: string;
    avatar: string;
};

/*Upcomming List card types*/
type upcommingLists={
    icon: TablerIconComponent;
    title: string;
    subtitle: string;
    rank: string;
    bgcolor: string;
};

/*User card types*/
type userGroupType={
    icon:string;
}
type userCard ={
    title: string;
    subtitle: string;
    avatar: string;
    userGroup: userGroupType[]
};

export type{cardsType, followCard,musicCards,productsCards, socialiconCards,profileCard,upcommingLists,userCard}