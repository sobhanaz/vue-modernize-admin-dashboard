type attachType = {
    icon?: string;
    file?: string;
    fileSize?: string;
};

type chatHistoryType = {
    createdAt?: any;
    msg: string;
    senderId: number | string;
    type: string;
    attachment: attachType[];
    id: string;
};

export type ChatType = {
    id: number;
    name: string;
    status: string;
    thumb: string;
    recent: boolean;
    chatHistory: chatHistoryType[];
};
