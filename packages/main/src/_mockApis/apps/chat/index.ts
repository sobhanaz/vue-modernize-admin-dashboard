import mock from '../../mockAdapter';
import { Chance } from 'chance';
import type { ChatType } from '@/types/apps/ChatType';
import { sub } from 'date-fns';
import { uniqueId } from 'lodash';

import user1 from '@/assets/images/profile/user-2.jpg';
import user2 from '@/assets/images/profile/user-3.jpg';
import user3 from '@/assets/images/profile/user-4.jpg';
import user4 from '@/assets/images/profile/user-5.jpg';
import user5 from '@/assets/images/profile/user-6.jpg';

import background1 from '@/assets/images/blog/blog-img5.jpg';

import adobe from '@/assets/images/chat/icon-adobe.svg';
import chrome from '@/assets/images/chat/icon-chrome.svg';
import figma from '@/assets/images/chat/icon-figma.svg';
import java from '@/assets/images/chat/icon-javascript.svg';
import zip from '@/assets/images/chat/icon-zip-folder.svg';

const chance = new Chance();

// const ChatData: ChatTypes[] = [
const ChatData: ChatType[] = [
    {
        id: 1,
        name: 'James Johnson',
        status: 'online',
        thumb: user1,
        recent: false,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 1 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
                    { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
                    { icon: figma, file: 'about-us.htmlf', fileSize: '1KB' },
                    { icon: java, file: 'work-project.zip', fileSize: '20MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 30 }),
                msg: chance.sentence({ words: 10 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },

            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: background1,
                senderId: uniqueId(),
                type: 'img',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 2,
        name: 'Maria Hernandez',
        status: 'away',
        thumb: user2,
        recent: true,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 1 }),
                msg: chance.sentence({ words: 5 }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 30 }),
                msg: chance.sentence({ words: 10 }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 2,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: background1,
                senderId: 2,
                type: 'img',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 1 }),
                msg: chance.sentence({ words: 5 }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 3,
        name: 'David Smith',
        status: 'busy',
        thumb: user3,
        recent: false,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 30 }),
                msg: chance.sentence({ words: 10 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 4,
        name: 'Maria Rodriguez',
        status: 'offline',
        thumb: user4,
        recent: true,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 1 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 4,
                type: 'text',
                attachment: [
                    { icon: java, file: 'work-project.zip', fileSize: '20MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 11 }),
                msg: background1,
                senderId: uniqueId(),
                type: 'img',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 4,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 1 }),
                msg: chance.sentence({ words: 7 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 5,
        name: 'Robert Smith',
        status: 'online',
        thumb: user5,
        recent: true,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 1 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
                    { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
                    { icon: figma, file: 'about-us.htmlf', fileSize: '1KB' },
                    { icon: java, file: 'work-project.zip', fileSize: '20MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 30 }),
                msg: chance.sentence({ words: 10 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: background1,
                senderId: 5,
                type: 'img',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 5,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 6,
        name: 'Joseph Sarah',
        status: 'busy',
        thumb: user1,
        recent: false,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
                    { icon: java, file: 'work-project.zip', fileSize: '20MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: background1,
                senderId: uniqueId(),
                type: 'img',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 2 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 6,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 7,
        name: 'Thomas Smith',
        status: 'away',
        thumb: user2,
        recent: true,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
                    { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 1 }),
                msg: chance.sentence({ words: 10 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 15 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 7,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 7,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 8,
        name: 'David Elizabeth',
        status: 'offline',
        thumb: user3,
        recent: false,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
                    { icon: java, file: 'work-project.zip', fileSize: '20MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 1 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 8,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 9,
        name: 'Charles Martha',
        status: 'online',
        thumb: user4,
        recent: false,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: java, file: 'work-project.zip', fileSize: '20MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 8 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 8 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 5 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 9,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 2 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 9,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 10,
        name: 'Samuel Eliza',
        status: 'online',
        thumb: user5,
        recent: false,
        chatHistory: [
            {
                createdAt: sub(new Date(), { hours: 10 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 1,
                type: 'text',
                attachment: [
                    { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
                    { icon: zip, file: 'custom.js', fileSize: '2MB' }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 11 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { hours: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), { minutes: 6 }),
                msg: chance.sentence({ words: 5 }),
                senderId: 10,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    }
];

mock.onGet('/api/data/chat/ChatData').reply(() => {
    return [200, ChatData];
});

export default ChatData;
