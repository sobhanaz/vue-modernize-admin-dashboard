// project imports
import mock from '../../mockAdapter';
import { Chance } from 'chance';

// types
import type { Post } from '@/types/apps/PostType';

// assets
import image1 from '@/assets/images/products/s1.jpg';
import image2 from '@/assets/images/products/s2.jpg';
import image4 from '@/assets/images/products/s4.jpg';
import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';

const chance = new Chance();

// social profile
let posts: Post[] = [
    {
        id: '#1POST_MATHEW',
        profile: {
            id: '#52MATHEW',
            avatar: user1,
            name: 'Mathew Anderson',
            time: '15 min ago'
        },
        data: {
            content: chance.paragraph({ sentences: 2 }),
            images: [
                {
                    img: image1,
                    featured: true
                }
            ],
            likes: {
                like: true,
                value: 102
            },
            comments: [
                {
                    id: '#3COMMENTMATHEWE',
                    profile: {
                        id: '#52MATHEW',
                        avatar: user3,
                        name: 'Deran Mac',
                        time: '8 mins ago '
                    },
                    data: {
                        comment: chance.paragraph({ sentences: 1 }),
                        likes: {
                            like: true,
                            value: 55
                        }
                    }
                },
                {
                    id: '#2COMMENT_MATHEW',
                    profile: {
                        id: '#52MATHEW',
                        avatar: user4,
                        name: 'Jonathan Bg',
                        time: '5 mins ago '
                    },
                    data: {
                        comment:
                        chance.paragraph({ sentences: 1 }),
                        likes: {
                            like: false,
                            value: 68
                        },
                        replies: [
                            {
                                id: '#1REPLY_MATHEW',
                                profile: {
                                    id: '#52MATHEW',
                                    avatar: user5,
                                    name: 'Carry minati',
                                    time: 'just now '
                                },
                                data: {
                                    comment: chance.paragraph({ sentences: 1 }),
                                    likes: {
                                        like: true,
                                        value: 10
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        id: '#4POST_CARRY',
        profile: {
            id: '#52CARRY',
            avatar: user1,
            name: 'Carry Minati',
            time: 'now'
        },
        data: {
            content: chance.paragraph({ sentences: 2 }),
            images: [],
            likes: {
                like: false,
                value: 67
            },
            comments: []
        }
    },
    {
        id: '#2POST_GENELIA',
        profile: {
            id: '#52GENELIA',
            avatar: user2,
            name: 'Genelia Desouza',
            time: '15 min ago '
        },
        data: {
            content: chance.paragraph({ sentences: 1 }),
            images: [
                {
                    img: image2,
                    title: 'Image Title'
                },
                {
                    img: image4,
                    title: 'Painter'
                }
            ],
            likes: {
                like: false,
                value: 320
            },
            comments: [
                {
                    id: '#2COMMENT_GENELIA',
                    profile: {
                        id: '#52GENELIA',
                        avatar: user3,
                        name: 'Ritesh Deshmukh',
                        time: '15 min ago '
                    },
                    data: {
                        comment:
                        chance.paragraph({ sentences: 1 }),
                        likes: {
                            like: true,
                            value: 65
                        },
                        replies: []
                    }
                }
            ]
        }
    },
    {
        id: '#3POST_Mathew',
        profile: {
            id: '#52Mathew',
            avatar: user1,
            name: 'Mathew Anderson',
            time: '15 min ago '
        },
        data: {
            content: chance.paragraph({ sentences: 1 }),
            images: [],
            video: 'd1-FRj20WBE',
            likes: {
                like: true,
                value: 130
            }
        }
    }
];

// ==============================|| MOCK SERVICES ||============================== //

//mock.onGet('/api/posts/list').reply(200, { posts });
mock.onGet('/api/posts/list').reply(() => {
    return [200, posts];
});

mock.onPost('/api/posts/editComment').reply((config) => {
    try {
        const { key, id } = JSON.parse(config.data);

        posts = posts.filter((post, index) => {
            if (post.id === key) {
                const cComments = post.data.comments || [];
                post.data.comments = [id, ...cComments];
                return post;
            }
            return post;
        });

        return [200, { posts }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/comments/add').reply((config) => {
    try {
        const { postId, comment } = JSON.parse(config.data);

        const postIndex = posts.findIndex((x) => x.id === postId);
        const post = posts[postIndex];
        const cComments = post.data.comments || [];
        post.data.comments = [comment, ...cComments];

        return [200, { posts: [...posts] }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/replies/add').reply((config) => {
    try {
        const { postId, commentId, reply } = JSON.parse(config.data);
        const postIndex = posts.findIndex((x: any) => x.id === postId);
        const post = posts[postIndex];
        const cComments = post.data.comments || [];
        const commentIndex = cComments.findIndex((x: any) => x.id === commentId);
        const comment = cComments[commentIndex];
        /** comment.data.replies has to be defined */
        if (comment && comment.data && comment.data.replies) comment.data.replies = [...comment.data.replies, reply];
        return [200, { posts: [...posts] }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/posts/list/like').reply((config) => {
    try {
        const { postId } = JSON.parse(config.data);
        const postIndex = posts.findIndex((x: any) => x.id === postId);

        const post = { ...posts[postIndex] };
        post.data = { ...post.data };

        post.data.likes = { ...post.data.likes };
        post.data.likes.like = !post.data.likes.like;
        post.data.likes.value = post.data.likes.like ? post.data.likes.value + 1 : post.data.likes.value - 1;
        posts[postIndex] = post;
        return [200, { posts: [...posts] }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/comments/list/like').reply((config) => {
    try {
        const { postId, commentId } = JSON.parse(config.data);
        const postIndex = posts.findIndex((x: any) => x.id === postId);
        const post = posts[postIndex];
        const cComments = post.data.comments || [];
        const commentIndex = cComments.findIndex((x: any) => x.id === commentId);
        const comment = { ...cComments[commentIndex] };
        /** comment.data.likes has to be defined  */
        if (comment && comment.data && comment.data.likes) comment.data.likes.like = !comment.data.likes.like;
        if (comment && comment.data && comment.data.likes)
            comment.data.likes.value = comment.data.likes.like ? comment.data.likes.value + 1 : comment.data.likes.value - 1;
        if (post && post.data && post.data.comments) post.data.comments[commentIndex] = comment;
        return [200, { posts: [...posts] }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/replies/list/like').reply((config) => {
    try {
        const { postId, commentId, replayId } = JSON.parse(config.data);
        const postIndex = posts.findIndex((x: any) => x.id === postId);
        const post = posts[postIndex];
        const cComments = post.data.comments || [];
        const commentIndex = cComments.findIndex((x: any) => x.id === commentId);
        const comment = { ...cComments[commentIndex] };
        const replayIndex = comment?.data?.replies?.findIndex((x: any) => x.id === replayId);
        if (replayIndex !== undefined) {
            if (comment && comment.data && comment.data.replies) {
                const reply = { ...comment.data.replies[replayIndex] };
                if (reply && reply.data && reply.data.likes) {
                    reply.data.likes.like = !reply.data.likes.like;
                    reply.data.likes.value = reply.data.likes.like ? reply.data.likes.value + 1 : reply.data.likes.value - 1;
                }
                comment.data.replies[replayIndex] = reply;
                if (post && post.data && post.data.comments) post.data.comments[commentIndex] = comment;
            }
        }
        return [200, { posts: [...posts] }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});
