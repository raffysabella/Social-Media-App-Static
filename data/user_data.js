const user_data = [
    {
        id: 0,
        userName: 'wyatt_kft',
        pass: 'wyatf09',
        profile: require('../assets/profile/img003.jpg'),
        firstName: 'Wyatt',
        middleName: 'Fabre',
        lastName: 'Guzman',
        following: 789,
        followers: 999,
        photos: [
            { photoId: 1, photo: require('./../assets/wyatt-photo/img-w001.jpg'), p_likes: 23 },
            { photoId: 2, photo: require('./../assets/wyatt-photo/img-w002.jpg'), p_likes: 342 },
            { photoId: 3, photo: require('./../assets/wyatt-photo/img-w003.jpg'), p_likes: 234 },
            { photoId: 4, photo: require('./../assets/wyatt-photo/img-w004.jpg'), p_likes: 34 },
            { photoId: 5, photo: require('./../assets/wyatt-photo/img-w005.jpg'), p_likes: 92 },
            { photoId: 6, photo: require('./../assets/wyatt-photo/img-w006.jpg'), p_likes: 29 },
            { photoId: 7, photo: require('./../assets/wyatt-photo/img-w001.jpg'), p_likes: 287 },
            { photoId: 8, photo: require('./../assets/wyatt-photo/img-w002.jpg'), p_likes: 87 },
            { photoId: 9, photo: require('./../assets/wyatt-photo/img-w003.jpg'), likes: 35 },
            { photoId: 10, photo: require('./../assets/wyatt-photo/img-w004.jpg'), p_likes: 76 },
            { photoId: 11, photo: require('./../assets/wyatt-photo/img-w005.jpg'), p_likes: 23 },
            { photoId: 12, photo: require('./../assets/wyatt-photo/img-w006.jpg'), p_likes: 534 },
        ],
        post: [
            { postId: 7, title: 'Expo vs Bare Workflow', desc: 'Decided to stick with Expo for this project. The development speed is just too good to ignore. 🚀', date: 'Just now', likes: 56, comments: 14 },
            { postId: 8, title: 'Russian Grammar is Tough', desc: 'Learning a new language while doing a degree is a challenge, but progress is progress. 🇷🇺📖', date: '45 mins ago', likes: 9, comments: 2 },
            { postId: 9, title: 'Afternoon at the Beach', desc: 'Nothing clears the head like the breeze in Opol. Back to coding tomorrow. 🌊', date: '3 hrs ago', likes: 88, comments: 10 },
            { postId: 10, title: 'Project Manager Struggles', desc: 'Keeping the team on track for the capstone. It’s more about communication than code sometimes. 📋', date: 'Yesterday', likes: 42, comments: 6 },
            { postId: 11, title: 'Valorant Ace!', desc: 'Finally hit that clip I’ve been trying to get. Time to get back to the grind though. 🎮', date: '2 days ago', likes: 67, comments: 21 },
            { postId: 12, title: 'Clean Code Goals', desc: 'Refactoring my PHP controllers today. If it looks like spaghetti, it’s gotta go. 🍝❌', date: '1 week ago', likes: 15, comments: 1 }
        ]
    },
    {
        id: 1,
        userName: 'miller_gwetler',
        pass: 'miluwu',
        profile: require('../assets/profile/img004.jpg'),
        firstName: 'Miller Jane',
        middleName: 'Van',
        lastName: 'Genllie',
        following: 82,
        followers: 979,
        photos: [
            { photoId: 1, photo: require('./../assets/miller-photo/miller001.jpg'), p_likes: 654 },
            { photoId: 2, photo: require('./../assets/miller-photo/miller002.jpg'), p_likes: 233 },
            { photoId: 3, photo: require('./../assets/miller-photo/miller003.jpg'), p_likes: 23 },
            { photoId: 4, photo: require('./../assets/miller-photo/miller004.jpg'), p_likes: 23 },
            { photoId: 5, photo: require('./../assets/miller-photo/miller005.jpg'), p_likes: 243 },
            { photoId: 6, photo: require('./../assets/miller-photo/miller006.jpg'), p_likes: 19 },
            { photoId: 7, photo: require('./../assets/miller-photo/miller007.jpg'), p_likes: 37 },
        ],
        post: [
            { postId: 1, title: 'UI Design Breakthrough', desc: 'Finally settled on a color palette for my latest project. There is something so satisfying about finding the perfect shade of violet. 🎨✨', date: 'Just now', likes: 112, comments: 15 },
            { postId: 2, title: 'Study Date with Coffee', desc: 'Cracking down on my React Native refresher today. Caramel Macchiato is the only thing keeping me going! ☕📖', date: '2 hrs ago', likes: 45, comments: 8 },
            { postId: 3, title: 'Journaling My Week', desc: 'Taking some time to reflect. It’s been a hectic semester, but journaling helps me stay grounded. ✍️🌿', date: '5 hrs ago', likes: 32, comments: 4 },
            { postId: 4, title: 'Morning Calisthenics', desc: 'Started my day with a 30-minute workout. My muscles are screaming, but I feel amazing! 💪✨', date: 'Yesterday', likes: 89, comments: 12 },
            { postId: 5, title: 'Sunset Vibes', desc: 'The sky tonight is just incredible. Nature is the best designer, honestly. 🌅🧡', date: '2 days ago', likes: 156, comments: 20 },
            { postId: 6, title: '3D Modeling Progress', desc: 'Spent the whole night rendering a single scene. The life of a creative is 10% design and 90% waiting for the loading bar. 💻3D', date: '4 days ago', likes: 27, comments: 3 }
        ]
    },

    // --- NEW USERS (IDs 2-9) ---

    {
        id: 2,
        userName: 'harvey_jannice',
        pass: 'pass123',
        profile: require('../assets/profile/img001.jpg'),
        firstName: 'Harvey',
        middleName: 'Jay',
        lastName: 'Jannice',
        following: 120,
        followers: 340,
        photos: [
            { photoId: 1, photo: require('../assets/profile/img001.jpg'), p_likes: 145 }
        ],
        post: [
            { postId: 1, title: 'Coding at 3 AM 💻', desc: 'My code finally works, but I have no idea why. Don’t touch anything! 🛑 #DeveloperLife', date: '2h ago', likes: 54, comments: 12 },
            { postId: 2, title: 'React Native Error 🔴', desc: 'Spent 2 hours fixing a red screen just to realize I forgot to save the file. I love my life. 🙃', date: '9h ago', likes: 67, comments: 14 },
            { postId: 3, title: 'Deployment Day 🚀', desc: 'Pushing to production. If the server crashes, I’m moving to the mountains. ⛰️', date: '2d ago', likes: 89, comments: 19 },
            { postId: 4, title: 'StackOverflow Saviour 🙏', desc: 'To the person who answered this question 7 years ago: You are my hero. 🦸‍♂️', date: '5d ago', likes: 122, comments: 9 },
            { postId: 5, title: 'First Freelance Gig 💵', desc: 'Got my first client! Time to act like I know exactly what I\'m doing. 💼', date: '2w ago', likes: 180, comments: 25 },
            { postId: 6, title: 'Hackathon Weekend 💻', desc: '48 hours of coding, pizza, and zero sleep. We didn\'t win, but the experience was... exhausting. 🍕', date: '1mo ago', likes: 115, comments: 18 }
        ]
    },
    {
        id: 3,
        userName: 'kim_lauvry',
        pass: 'kimmy22',
        profile: require('../assets/profile/img002.jpg'),
        firstName: 'Kim',
        middleName: 'Marie',
        lastName: 'Lauvry',
        following: 450,
        followers: 1205,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img002.jpg'), p_likes: 88 }
        ],
        post: [
            { postId: 1, title: 'Manifesting a Vacation ✈️', desc: 'Currently pretending I’m on a beach instead of in a lecture. Is it Friday yet? 🌊', date: '5h ago', likes: 635, comments: 45 },
            { postId: 2, title: 'OOTD 👗', desc: 'Dressed up just to go buy snacks at 7/11. No regrets. ✨', date: '10h ago', likes: 412, comments: 32 },
            { postId: 3, title: 'Foodie Trip 🍜', desc: 'Ramen weather! 🌧️ Best comfort food after a long exam week.', date: '3d ago', likes: 520, comments: 38 },
            { postId: 4, title: 'Online Shopping 🛍️', desc: 'I have 15 items in my cart. I should probably close the app. *Checks out anyway* 💸', date: '6d ago', likes: 390, comments: 42 },
            { postId: 5, title: 'Cat Café 😺', desc: 'I went for the coffee, stayed for the cats. This one fell asleep on my laptop. 😻', date: '2w ago', likes: 702, comments: 55 },
            { postId: 6, title: 'New Hair 💇‍♀️', desc: 'Impulse decision to cut my hair. Do we like it? Be honest! ✂️', date: '1mo ago', likes: 560, comments: 80 }
        ]
    },
    {
        id: 4,
        userName: 'joseff',
        pass: 'gymrat99',
        profile: require('../assets/profile/img005.jpg'),
        firstName: 'Joseff',
        middleName: 'Lee',
        lastName: 'Santos',
        following: 89,
        followers: 210,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img005.jpg'), p_likes: 199 }
        ],
        post: [
            { postId: 1, title: 'Gym Session 🏃‍♂️', desc: 'Calisthenics today. If I can do a muscle-up, I can finish this React Native app. Maybe.', date: '12h ago', likes: 42, comments: 5 },
            { postId: 2, title: 'Leg Day 🦵', desc: 'Walking down the stairs tomorrow is going to be a problem. Worth it though! 💪', date: '1d ago', likes: 88, comments: 12 },
            { postId: 3, title: 'Protein Shake 🥤', desc: 'Forgot to wash my shaker bottle yesterday. The smell... deadly. 💀', date: '3d ago', likes: 65, comments: 20 },
            { postId: 4, title: 'Rest Day 🧘‍♂️', desc: 'Body is sore, mind is tired. Taking a day off to recharge. Remember to rest guys! 🔋', date: '1w ago', likes: 110, comments: 18 },
            { postId: 5, title: 'New PR! 🏋️', desc: 'Hit a new personal record on bench press! 100kg club soon? Let’s go! 🔥', date: '2w ago', likes: 130, comments: 28 },
            { postId: 6, title: 'Cheat Day 🍔', desc: 'I ate a burger the size of my head. No regrets. Back to the grind tomorrow! 🍟', date: '1mo ago', likes: 140, comments: 26 }
        ]
    },
    {
        id: 5,
        userName: 'patrick_pickle',
        pass: 'minecraft_steve',
        profile: require('../assets/profile/img006.jpg'),
        firstName: 'Patrick',
        middleName: 'Star',
        lastName: 'Pickle',
        following: 56,
        followers: 88,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img006.jpg'), p_likes: 42 }
        ],
        post: [
            { postId: 1, title: 'Minecraft Chill 🧊', desc: 'Nothing beats the soundtrack while building a house I’ll never finish. 🏡⛏️', date: 'Just now', likes: 15, comments: 2 },
            { postId: 2, title: 'Speedrun Attempt ⏱️', desc: 'Tried to speedrun Minecraft. Fell in lava in the first 5 minutes. Resetting... 🔥', date: '1d ago', likes: 29, comments: 6 },
            { postId: 3, title: 'CoD Rank Up 🎖️', desc: 'Finally reached Legendary! The grind was real. Who wants to carry me next season? 🎮', date: '4d ago', likes: 45, comments: 12 },
            { postId: 4, title: 'Server Hosting 🌐', desc: 'Finally set up my own Minecraft server for the boys. IP in bio! ⛏️', date: '1w ago', likes: 56, comments: 24 },
            { postId: 5, title: 'Retro Gaming 🕹️', desc: 'Playing some old school Pokemon. The nostalgia is hitting hard. 🐢🔥', date: '2w ago', likes: 90, comments: 15 }
        ]
    },
    {
        id: 6,
        userName: 'jhonnalyn_marsigan',
        pass: 'notes_queen',
        profile: require('../assets/profile/img007.jpg'),
        firstName: 'Jhonnalyn',
        middleName: 'Rose',
        lastName: 'Marsigan',
        following: 230,
        followers: 450,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img007.jpg'), p_likes: 123 }
        ],
        post: [
            { postId: 1, title: 'Aesthetic Notes ✨', desc: 'Rewriting my notes because my handwriting looked like a CAPTCHA code. ✍️📖', date: '6h ago', likes: 120, comments: 18 },
            { postId: 2, title: 'Library Vibes 📖', desc: 'It is so quiet here I’m afraid to open my bag of chips. Hunger is real. 🤫🍟', date: '1d ago', likes: 156, comments: 22 },
            { postId: 3, title: 'Study Playlist 🎶', desc: 'Lofi beats to relax/study to is the only thing keeping me sane right now. 🎧', date: '4d ago', likes: 189, comments: 25 },
            { postId: 4, title: 'Review Season 📝', desc: 'Highlighters everywhere. My notes look like a rainbow exploded. 🌈', date: '1w ago', likes: 210, comments: 29 },
            { postId: 5, title: 'Coffee Shop Study ☕', desc: 'Spent $10 on a latte just to use their WiFi for 5 hours. Stonks. 📈', date: '3w ago', likes: 245, comments: 31 }
        ]
    },
    {
        id: 7,
        userName: 'kenboi_ytrtr',
        pass: 'valgod_aim',
        profile: require('../assets/profile/img008.jpg'),
        firstName: 'Ken',
        middleName: 'Boi',
        lastName: 'Rivera',
        following: 110,
        followers: 150,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img008.jpg'), p_likes: 76 }
        ],
        post: [
            { postId: 1, title: 'Ace! ♠️', desc: 'Finally got an Ace in Valorant! My hands are still shaking. Clip coming soon! 🎥', date: '2d ago', likes: 92, comments: 15 },
            { postId: 2, title: 'Valorant Nights 🔫', desc: 'The "last game" turned into 5 games and a derank. Good times. 🥲', date: '2d ago', likes: 34, comments: 10 },
            { postId: 3, title: 'Lag Spike 📶', desc: '999ms ping at the most important moment. Thanks ISP. Love you so much. 😤', date: '4d ago', likes: 76, comments: 30 },
            { postId: 4, title: 'Mobile Legends 📱', desc: 'Tank main life: I set up the perfect set, and my team is farming jungle. Why?? 🛡️', date: '1w ago', likes: 88, comments: 35 },
            { postId: 5, title: 'Ranking Down 📉', desc: 'I love this game. I hate this game. See you tomorrow. 🤬🎮', date: '3w ago', likes: 67, comments: 22 }
        ]
    },
    {
        id: 8,
        userName: 'maske_yvwe',
        pass: 'dev_ops',
        profile: require('../assets/profile/img009.jpg'),
        firstName: 'Maske',
        middleName: 'Code',
        lastName: 'Yvwe',
        following: 300,
        followers: 890,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img009.jpg'), p_likes: 180 }
        ],
        post: [
            { postId: 1, title: 'Found a Bug 🐞', desc: 'It’s not a bug, it’s an "unintentional feature." Please don’t tell the client. 🤫', date: '4h ago', likes: 98, comments: 21 },
            { postId: 2, title: 'JavaScript Logic 🤯', desc: 'Why is "11" + 1 = "111" but "11" - 1 = 10? JS, are you okay? ❓', date: '2d ago', likes: 304, comments: 56 },
            { postId: 3, title: 'Dark Mode Everything 🌑', desc: 'If your IDE is in light mode, are you even a developer? My eyes hurt just thinking about it. 😎', date: '5d ago', likes: 450, comments: 88 },
            { postId: 4, title: 'CSS is Pain 🎨', desc: 'Trying to center a div horizontally and vertically. It moved to the next page. Send help. 📐', date: '1w ago', likes: 560, comments: 99 },
            { postId: 5, title: 'Git Commit Messages 💬', desc: 'Current commit history: "fix", "fix again", "please work", "final fix", "ACTUALLY final". 📜', date: '3w ago', likes: 420, comments: 63 }
        ]
    },
    {
        id: 9,
        userName: 'kisme_watrte',
        pass: 'calm_waters',
        profile: require('../assets/profile/img010.jpg'),
        firstName: 'Kisme',
        middleName: 'Jean',
        lastName: 'Watrte',
        following: 150,
        followers: 220,
        photos: [
             { photoId: 1, photo: require('../assets/profile/img010.jpg'), p_likes: 67 }
        ],
        post: [
            { postId: 1, title: 'Peace and Quiet 🍃', desc: 'Meditation before the coding chaos begins. Deep breaths in, semicolons out. 🧘‍♂️', date: '8h ago', likes: 56, comments: 7 },
            { postId: 2, title: 'Morning Walk ☀️', desc: 'Starting the day with fresh air before staring at a screen for 12 hours. Balance. 🌳', date: '2d ago', likes: 78, comments: 9 },
            { postId: 3, title: 'Sunset Views 🌅', desc: 'Sometimes you just need to look up from the keyboard and appreciate the sky. 🧡', date: '5d ago', likes: 134, comments: 11 },
            { postId: 4, title: 'Plant Mom 🌱', desc: 'My cactus is the only thing I haven\'t killed yet. Progress! 🌵', date: '1w ago', likes: 145, comments: 16 },
            { postId: 5, title: 'Yoga Time 🧘‍♀️', desc: 'Trying to touch my toes. I think my hamstrings are made of steel cables. 🤸‍♀️', date: '3w ago', likes: 88, comments: 10 }
        ]
    }
];

export default user_data;