const user_data = [
    {
        id: 1,
        userName: 'wyatt_kft',
        pass: 'wyatf09',
        profile: require('../assets/profile/img003.jpg'),
        firstName: 'Wyatt',
        middleName: 'Fabre',
        lastName: 'Guzman',
        following: 789,
        followers: 999,
        photos: [
            {
                photoId: 1,
                photo: require('./../assets/wyatt-photo/img-w001.jpg'),
                p_likes: 23
            },
            {
                photoId: 2,
                photo: require('./../assets/wyatt-photo/img-w002.jpg'),
                p_likes: 342
            },
            {
                photoId: 3,
                photo: require('./../assets/wyatt-photo/img-w003.jpg'),
                p_likes: 234
            },
            {
                photoId: 4,
                photo: require('./../assets/wyatt-photo/img-w004.jpg'),
                p_likes: 34
            },
            {
                photoId: 5,
                photo: require('./../assets/wyatt-photo/img-w005.jpg'),
                p_likes: 92
            },
            {
                photoId: 6,
                photo: require('./../assets/wyatt-photo/img-w006.jpg'),
                p_likes: 29
            },
                        {
                photoId: 7,
                photo: require('./../assets/wyatt-photo/img-w001.jpg'),
                p_likes: 287
            },
            {
                photoId: 8,
                photo: require('./../assets/wyatt-photo/img-w002.jpg'),
                p_likes: 87
            },
            {
                photoId: 9,
                photo: require('./../assets/wyatt-photo/img-w003.jpg'),
                likes: 35
            },
            {
                photoId: 10,
                photo: require('./../assets/wyatt-photo/img-w004.jpg'),
                p_likes: 76
            },
            {
                photoId: 11,
                photo: require('./../assets/wyatt-photo/img-w005.jpg'),
                p_likes: 23
            },
            {
                photoId: 12,
                photo: require('./../assets/wyatt-photo/img-w006.jpg'),
                p_likes: 534
            },
        ],
        post: [
            {
                postId: 1,
                title: '',
                desc: '',
                likes: 0,
                comments: 0
            }
        ]
    },
    {
        id: 2,
        userName: 'miller_gwetler',
        pass: 'miluwu',
        profile: require('../assets/profile/img004.jpg'),
        firstName: 'Miller',
        middleName: 'Van',
        lastName: 'Genllie',
        following: 832,
        followers: 999,
        post: [
            {
                postId: 1,
                title: '',
                desc: '',
                likes: 0,
                comments: 0
            }
        ]
    }
]

export default user_data;