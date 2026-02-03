// -- added data --
const feed_data = [
    // --- Wyatt (id: 0 in user_data) ---
    {
        id: 3,
        userName: '@wyatt_kft',
        userProfile: require('../assets/profile/img003.jpg'),
        date: '1d ago',
        headerCapt: 'The Ultimate Setup 🎧',
        captions: 'New mechanical keyboard just arrived. My roommates are going to hate the clicking, but my productivity is +100. ⌨️🔥',
        likes: 87,
        comments: 3
    },
    {
        id: 13,
        userName: '@wyatt_kft',
        userProfile: require('../assets/profile/img003.jpg'),
        date: '11h ago',
        headerCapt: 'New Monitor!',
        captions: 'Dual screen setup complete. Now I can watch tutorials on one screen and cry on the other. 🖥️🖥️',
        likes: 105,
        comments: 8
    },
    {
        id: 23,
        userName: '@wyatt_kft',
        userProfile: require('../assets/profile/img003.jpg'),
        date: '3d ago',
        headerCapt: 'Cable Management 🧵',
        captions: 'Spent 3 hours organizing cables under my desk. You can’t see them, but I know they are neat. 😌',
        likes: 110,
        comments: 14
    },
    {
        id: 33,
        userName: '@wyatt_kft',
        userProfile: require('../assets/profile/img003.jpg'),
        date: '6d ago',
        headerCapt: 'Mouse Upgrade 🖱️',
        captions: 'Wireless is a game changer. No more drag! ⚡',
        likes: 95,
        comments: 10
    },
    {
        id: 43,
        userName: '@wyatt_kft',
        userProfile: require('../assets/profile/img003.jpg'),
        date: '2w ago',
        headerCapt: 'Clean Desk Policy 🧹',
        captions: 'My desk is clean for exactly 5 minutes before I ruin it with snacks and papers. 🗑️',
        likes: 77,
        comments: 5
    },
    {
        id: 53,
        userName: '@wyatt_kft',
        userProfile: require('../assets/profile/img003.jpg'),
        date: '1mo ago',
        headerCapt: 'Mechanical Keyboard Cleaning 🧼',
        captions: 'Taking all the keycaps off is satisfying. Putting them back on is a puzzle. 🧩',
        likes: 82,
        comments: 7
    },

    // --- Miller (id: 1 in user_data) ---
    {
        id: 4,
        userName: '@miller_gwetler',
        userProfile: require('../assets/profile/img004.jpg'),
        date: '3h ago',
        headerCapt: 'Coffee vs. Deadline ☕',
        captions: 'On my 4th cup of coffee. I can see sounds now. Capstone project is moving fast! 🚀 #ITstudent',
        likes: 786,
        comments: 89
    },
    {
        id: 14,
        userName: '@miller_gwetler',
        userProfile: require('../assets/profile/img004.jpg'),
        date: '1d ago',
        headerCapt: 'Group Project 📚',
        captions: 'Why am I always the one fixing the GitHub merge conflicts? Send help. 🆘',
        likes: 230,
        comments: 45
    },
    {
        id: 24,
        userName: '@miller_gwetler',
        userProfile: require('../assets/profile/img004.jpg'),
        date: '3d ago',
        headerCapt: 'Sleep is for the Weak 💤',
        captions: 'Who needs sleep when you have deadlines and energy drinks? (Me. I need sleep.) 😴',
        likes: 340,
        comments: 67
    },
    {
        id: 34,
        userName: '@miller_gwetler',
        userProfile: require('../assets/profile/img004.jpg'),
        date: '1w ago',
        headerCapt: 'Forgot the Semicolon ;',
        captions: 'Spent 40 minutes debugging... it was a missing semicolon. I need a nap. 🛌',
        likes: 670,
        comments: 112
    },
    {
        id: 44,
        userName: '@miller_gwetler',
        userProfile: require('../assets/profile/img004.jpg'),
        date: '2w ago',
        headerCapt: 'Database Drama 🗄️',
        captions: 'Dropped the wrong table. Thank god for backups. Always backup your data kids! 💾',
        likes: 310,
        comments: 42
    },
    {
        id: 54,
        userName: '@miller_gwetler',
        userProfile: require('../assets/profile/img004.jpg'),
        date: '1mo ago',
        headerCapt: 'IT Student Starter Pack 🎒',
        captions: 'Laptop charger, hoodie, headphones, and a slight sense of panic. Ready for class! 🏫',
        likes: 350,
        comments: 50
    },

    // --- Harvey (id: 2 in user_data) ---
    {
        id: 1,
        userName: '@harvey_jannice',
        userProfile: require('../assets/profile/img001.jpg'),
        date: '2h ago',
        headerCapt: 'Coding at 3 AM 💻',
        captions: 'My code finally works, but I have no idea why. Don’t touch anything! 🛑 #DeveloperLife #ReactNative',
        likes: 54,
        comments: 12,
        media: [
            {
                mediaId: 1
            }
        ]
    },
    {
        id: 11,
        userName: '@harvey_jannice',
        userProfile: require('../assets/profile/img001.jpg'),
        date: '9h ago',
        headerCapt: 'React Native Error 🔴',
        captions: 'Spent 2 hours fixing a red screen just to realize I forgot to save the file. I love my life. 🙃',
        likes: 67,
        comments: 14
    },
    {
        id: 21,
        userName: '@harvey_jannice',
        userProfile: require('../assets/profile/img001.jpg'),
        date: '2d ago',
        headerCapt: 'Deployment Day 🚀',
        captions: 'Pushing to production. If the server crashes, I’m moving to the mountains. ⛰️',
        likes: 89,
        comments: 19
    },
    {
        id: 31,
        userName: '@harvey_jannice',
        userProfile: require('../assets/profile/img001.jpg'),
        date: '5d ago',
        headerCapt: 'StackOverflow Saviour 🙏',
        captions: 'To the person who answered this question 7 years ago: You are my hero. 🦸‍♂️',
        likes: 122,
        comments: 9
    },
    {
        id: 41,
        userName: '@harvey_jannice',
        userProfile: require('../assets/profile/img001.jpg'),
        date: '2w ago',
        headerCapt: 'First Freelance Gig 💵',
        captions: 'Got my first client! Time to act like I know exactly what I\'m doing. 💼',
        likes: 180,
        comments: 25
    },
    {
        id: 51,
        userName: '@harvey_jannice',
        userProfile: require('../assets/profile/img001.jpg'),
        date: '1mo ago',
        headerCapt: 'Hackathon Weekend 💻',
        captions: '48 hours of coding, pizza, and zero sleep. We didn\'t win, but the experience was... exhausting. 🍕',
        likes: 115,
        comments: 18
    },

    // --- Kim (id: 3 in user_data) ---
    {
        id: 2,
        userName: '@kim_lauvry',
        userProfile: require('../assets/profile/img002.jpg'),
        date: '5h ago',
        headerCapt: 'Manifesting a Vacation ✈️',
        captions: 'Currently pretending I’m on a beach instead of in a lecture. Is it Friday yet? 🌊',
        likes: 635,
        comments: 45
    },
    {
        id: 12,
        userName: '@kim_lauvry',
        userProfile: require('../assets/profile/img002.jpg'),
        date: '10h ago',
        headerCapt: 'OOTD 👗',
        captions: 'Dressed up just to go buy snacks at 7/11. No regrets. ✨',
        likes: 412,
        comments: 32
    },
    {
        id: 22,
        userName: '@kim_lauvry',
        userProfile: require('../assets/profile/img002.jpg'),
        date: '3d ago',
        headerCapt: 'Foodie Trip 🍜',
        captions: 'Ramen weather! 🌧️ Best comfort food after a long exam week.',
        likes: 520,
        comments: 38
    },
    {
        id: 32,
        userName: '@kim_lauvry',
        userProfile: require('../assets/profile/img002.jpg'),
        date: '6d ago',
        headerCapt: 'Online Shopping 🛍️',
        captions: 'I have 15 items in my cart. I should probably close the app. *Checks out anyway* 💸',
        likes: 390,
        comments: 42
    },
    {
        id: 42,
        userName: '@kim_lauvry',
        userProfile: require('../assets/profile/img002.jpg'),
        date: '2w ago',
        headerCapt: 'Cat Café 😺',
        captions: 'I went for the coffee, stayed for the cats. This one fell asleep on my laptop. 😻',
        likes: 702,
        comments: 55
    },
    {
        id: 52,
        userName: '@kim_lauvry',
        userProfile: require('../assets/profile/img002.jpg'),
        date: '1mo ago',
        headerCapt: 'New Hair 💇‍♀️',
        captions: 'Impulse decision to cut my hair. Do we like it? Be honest! ✂️',
        likes: 560,
        comments: 80
    },

    // --- Joseff (id: 4 in user_data) ---
    {
        id: 5,
        userName: '@joseff',
        userProfile: require('../assets/profile/img005.jpg'),
        date: '12h ago',
        headerCapt: 'Gym Session 🏃‍♂️',
        captions: 'Calisthenics today. If I can do a muscle-up, I can finish this React Native app. Maybe.',
        likes: 42,
        comments: 5
    },
    {
        id: 15,
        userName: '@joseff',
        userProfile: require('../assets/profile/img005.jpg'),
        date: '1d ago',
        headerCapt: 'Leg Day 🦵',
        captions: 'Walking down the stairs tomorrow is going to be a problem. Worth it though! 💪',
        likes: 88,
        comments: 12
    },
    {
        id: 25,
        userName: '@joseff',
        userProfile: require('../assets/profile/img005.jpg'),
        date: '3d ago',
        headerCapt: 'Protein Shake 🥤',
        captions: 'Forgot to wash my shaker bottle yesterday. The smell... deadly. 💀',
        likes: 65,
        comments: 20
    },
    {
        id: 35,
        userName: '@joseff',
        userProfile: require('../assets/profile/img005.jpg'),
        date: '1w ago',
        headerCapt: 'Rest Day 🧘‍♂️',
        captions: 'Body is sore, mind is tired. Taking a day off to recharge. Remember to rest guys! 🔋',
        likes: 110,
        comments: 18
    },
    {
        id: 45,
        userName: '@joseff',
        userProfile: require('../assets/profile/img005.jpg'),
        date: '2w ago',
        headerCapt: 'New PR! 🏋️',
        captions: 'Hit a new personal record on bench press! 100kg club soon? Let’s go! 🔥',
        likes: 130,
        comments: 28
    },
    {
        id: 55,
        userName: '@joseff',
        userProfile: require('../assets/profile/img005.jpg'),
        date: '1mo ago',
        headerCapt: 'Cheat Day 🍔',
        captions: 'I ate a burger the size of my head. No regrets. Back to the grind tomorrow! 🍟',
        likes: 140,
        comments: 26
    },

    // --- Patrick (id: 5 in user_data) ---
    {
        id: 6,
        userName: '@patrick_pickle',
        userProfile: require('../assets/profile/img006.jpg'),
        date: 'Just now',
        headerCapt: 'Minecraft Chill 🧊',
        captions: 'Nothing beats the C418 soundtrack while building a house I’ll never finish. 🏡⛏️',
        likes: 15,
        comments: 2
    },
    {
        id: 16,
        userName: '@patrick_pickle',
        userProfile: require('../assets/profile/img006.jpg'),
        date: '1d ago',
        headerCapt: 'Speedrun Attempt ⏱️',
        captions: 'Tried to speedrun Minecraft. Fell in lava in the first 5 minutes. Resetting... 🔥',
        likes: 29,
        comments: 6
    },
    {
        id: 26,
        userName: '@patrick_pickle',
        userProfile: require('../assets/profile/img006.jpg'),
        date: '4d ago',
        headerCapt: 'CoD Rank Up 🎖️',
        captions: 'Finally reached Legendary! The grind was real. Who wants to carry me next season? 🎮',
        likes: 45,
        comments: 12
    },
    {
        id: 36,
        userName: '@patrick_pickle',
        userProfile: require('../assets/profile/img006.jpg'),
        date: '1w ago',
        headerCapt: 'Server Hosting 🌐',
        captions: 'Finally set up my own Minecraft server for the boys. IP in bio! ⛏️',
        likes: 56,
        comments: 24
    },
    {
        id: 46,
        userName: '@patrick_pickle',
        userProfile: require('../assets/profile/img006.jpg'),
        date: '2w ago',
        headerCapt: 'Retro Gaming 🕹️',
        captions: 'Playing some old school Pokemon. The nostalgia is hitting hard. 🐢🔥',
        likes: 90,
        comments: 15
    },

    // --- Jhonnalyn (id: 6 in user_data) ---
    {
        id: 7,
        userName: '@jhonnalyn_marsigan',
        userProfile: require('../assets/profile/img007.jpg'),
        date: '6h ago',
        headerCapt: 'Aesthetic Notes ✨',
        captions: 'Rewriting my notes because my handwriting looked like a CAPTCHA code. ✍️📖',
        likes: 120,
        comments: 18
    },
    {
        id: 17,
        userName: '@jhonnalyn_marsigan',
        userProfile: require('../assets/profile/img007.jpg'),
        date: '1d ago',
        headerCapt: 'Library Vibes 📖',
        captions: 'It is so quiet here I’m afraid to open my bag of chips. Hunger is real. 🤫🍟',
        likes: 156,
        comments: 22
    },
    {
        id: 27,
        userName: '@jhonnalyn_marsigan',
        userProfile: require('../assets/profile/img007.jpg'),
        date: '4d ago',
        headerCapt: 'Study Playlist 🎶',
        captions: 'Lofi beats to relax/study to is the only thing keeping me sane right now. 🎧',
        likes: 189,
        comments: 25
    },
    {
        id: 37,
        userName: '@jhonnalyn_marsigan',
        userProfile: require('../assets/profile/img007.jpg'),
        date: '1w ago',
        headerCapt: 'Review Season 📝',
        captions: 'Highlighters everywhere. My notes look like a rainbow exploded. 🌈',
        likes: 210,
        comments: 29
    },
    {
        id: 47,
        userName: '@jhonnalyn_marsigan',
        userProfile: require('../assets/profile/img007.jpg'),
        date: '3w ago',
        headerCapt: 'Coffee Shop Study ☕',
        captions: 'Spent $10 on a latte just to use their WiFi for 5 hours. Stonks. 📈',
        likes: 245,
        comments: 31
    },

    // --- Ken (id: 7 in user_data) ---
    {
        id: 8,
        userName: '@kenboi_ytrtr',
        userProfile: require('../assets/profile/img008.jpg'),
        date: '2d ago',
        headerCapt: 'Valorant Nights 🔫',
        captions: 'The "last game" turned into 5 games and a derank. Good times. 🥲',
        likes: 34,
        comments: 10
    },
    {
        id: 18,
        userName: '@kenboi_ytrtr',
        userProfile: require('../assets/profile/img008.jpg'),
        date: '2d ago',
        headerCapt: 'Ace! ♠️',
        captions: 'Finally got an Ace in Valorant! My hands are still shaking. Clip coming soon! 🎥',
        likes: 92,
        comments: 15
    },
    {
        id: 28,
        userName: '@kenboi_ytrtr',
        userProfile: require('../assets/profile/img008.jpg'),
        date: '4d ago',
        headerCapt: 'Lag Spike 📶',
        captions: '999ms ping at the most important moment. Thanks ISP. love you so much. 😤',
        likes: 76,
        comments: 30
    },
    {
        id: 38,
        userName: '@kenboi_ytrtr',
        userProfile: require('../assets/profile/img008.jpg'),
        date: '1w ago',
        headerCapt: 'Mobile Legends 📱',
        captions: 'Tank main life: I set up the perfect set, and my team is farming jungle. Why?? 🛡️',
        likes: 88,
        comments: 35
    },
    {
        id: 48,
        userName: '@kenboi_ytrtr',
        userProfile: require('../assets/profile/img008.jpg'),
        date: '3w ago',
        headerCapt: 'Ranking Down 📉',
        captions: 'I love this game. I hate this game. See you tomorrow. 🤬🎮',
        likes: 67,
        comments: 22
    },

    // --- Maske (id: 8 in user_data) ---
    {
        id: 9,
        userName: '@maske_yvwe',
        userProfile: require('../assets/profile/img009.jpg'),
        date: '4h ago',
        headerCapt: 'Found a Bug 🐞',
        captions: 'It’s not a bug, it’s an "unintentional feature." Please don’t tell the client. 🤫 #Coding',
        likes: 98,
        comments: 21
    },
    {
        id: 19,
        userName: '@maske_yvwe',
        userProfile: require('../assets/profile/img009.jpg'),
        date: '2d ago',
        headerCapt: 'JavaScript Logic 🤯',
        captions: 'Why is "11" + 1 = "111" but "11" - 1 = 10? JS, are you okay? ❓',
        likes: 304,
        comments: 56
    },
    {
        id: 29,
        userName: '@maske_yvwe',
        userProfile: require('../assets/profile/img009.jpg'),
        date: '5d ago',
        headerCapt: 'Dark Mode Everything 🌑',
        captions: 'If your IDE is in light mode, are you even a developer? My eyes hurt just thinking about it. 😎',
        likes: 450,
        comments: 88
    },
    {
        id: 39,
        userName: '@maske_yvwe',
        userProfile: require('../assets/profile/img009.jpg'),
        date: '1w ago',
        headerCapt: 'CSS is Pain 🎨',
        captions: 'Trying to center a div horizontally and vertically. It moved to the next page. Send help. 📐',
        likes: 560,
        comments: 99
    },
    {
        id: 49,
        userName: '@maske_yvwe',
        userProfile: require('../assets/profile/img009.jpg'),
        date: '3w ago',
        headerCapt: 'Git Commit Messages 💬',
        captions: 'Current commit history: "fix", "fix again", "please work", "final fix", "ACTUALLY final". 📜',
        likes: 420,
        comments: 63
    },

    // --- Kisme (id: 9 in user_data) ---
    {
        id: 10,
        userName: '@kisme_watrte',
        userProfile: require('../assets/profile/img010.jpg'),
        date: '8h ago',
        headerCapt: 'Peace and Quiet 🍃',
        captions: 'Meditation before the coding chaos begins. Deep breaths in, semicolons out. 🧘‍♂️',
        likes: 56,
        comments: 7
    },
    {
        id: 20,
        userName: '@kisme_watrte',
        userProfile: require('../assets/profile/img010.jpg'),
        date: '2d ago',
        headerCapt: 'Morning Walk ☀️',
        captions: 'Starting the day with fresh air before staring at a screen for 12 hours. Balance. 🌳',
        likes: 78,
        comments: 9
    },
    {
        id: 30,
        userName: '@kisme_watrte',
        userProfile: require('../assets/profile/img010.jpg'),
        date: '5d ago',
        headerCapt: 'Sunset Views 🌅',
        captions: 'Sometimes you just need to look up from the keyboard and appreciate the sky. 🧡',
        likes: 134,
        comments: 11
    },
    {
        id: 40,
        userName: '@kisme_watrte',
        userProfile: require('../assets/profile/img010.jpg'),
        date: '1w ago',
        headerCapt: 'Plant Mom 🌱',
        captions: 'My cactus is the only thing I haven\'t killed yet. Progress! 🌵',
        likes: 145,
        comments: 16
    },
    {
        id: 50,
        userName: '@kisme_watrte',
        userProfile: require('../assets/profile/img010.jpg'),
        date: '3w ago',
        headerCapt: 'Yoga Time 🧘‍♀️',
        captions: 'Trying to touch my toes. I think my hamstrings are made of steel cables. 🤸‍♀️',
        likes: 88,
        comments: 10
    }
];

export default feed_data;