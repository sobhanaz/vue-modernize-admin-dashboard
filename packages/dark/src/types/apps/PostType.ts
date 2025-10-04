export type Profile = {
    id: string;
    avatar: string;
    name: string;
    time: string;
};

export type PostImage = {
    img: string;
    featured?: boolean;
    title?: string;
};

export type Likes = {
    like: boolean;
    value: number;
};

export type Group = {
    id: string;
    avatar: string;
    name: string;
};

export type Reply = {
    id: string;
    profile: Profile;
    data: CommentData;
};

export type CommentData = {
    name?: string;
    comment?: string;
    likes?: Likes;
    video?: string;
    replies?: Reply[];
};

export type PostData = {
    id?: string;
    content: string;
    images: PostImage[];
    video?: string;
    likes: Likes;
    comments?: Comment[];
};
export type Comment = {
    id: string;
    profile: Profile;
    data?: CommentData;
};
export type Post = {
    id?: string;
    profile: Profile;
    data: PostData;
};
