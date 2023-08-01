const localUser: User = {
    name: 'Me',
}

const users: User[] = [
    {
        name: 'Arnold',
    },
    {
        name: 'Jane',
    },
    {
        name: 'Mark',
    },
    {
        name: 'Stew',
    },
    {
        name: 'Akke',
    },
    {
        name: 'Prabh Kaur',
    },
]



const chats: Chat[] = [
    {
        user: users[0],
        messages: [
            {   sender: users[0],
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 16:38'
            },
            {   sender: users[0],
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 16:47'
            },
            {   sender: localUser,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 10:47'
            },
        ]
    },
    {
        user: users[1],
        messages: [
            {   sender: users[1],
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 16:38'
            },
            {   sender: users[1],
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 16:47'
            },
            {   sender: localUser,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 10:47'
            },
        ]
    },
    {
        user: users[2],
        messages: [
            {   sender: users[2],
                content: 'Lorem ipsum dolor sitr adipiscing elit!',
                date: '2023-07-30 16:38'
            },
            {   sender: users[2],
                content: 'Lorem ipsum dolgetur adipiscing elit!',
                date: '2023-07-30 16:47'
            },
            {   sender: localUser,
                content: 'Lorem ipsum dolor sit amefdgdfgsdfgsdfgsgsgtsrbsfghvfhgfiagkghfagkjfagyfgyuagfuyagf yuagyu yfy gaygaf gyuagyufg yuagfakgfay ag ikt, consectetur adipiscing elit!',
                date: '2023-07-30 10:47'
            },
        ]
    },
    {
        user: users[3],
        messages: [
            {   sender: users[3],
                content: 'Lorem ipsum dolrsrtbrsbtrgbstror sit amet, consectetur adipiscing elit!',
                date: '2023-07-30 16:38'
            },
            {   sender: users[3],
                content: 'Lorem ipsum dolor shtrshtrttrtrhsrhrgshssit amet, consectetur adipiscing elit!',
                date: '2023-07-30 16:47'
            },
            {   sender: localUser,
                content: 'Lorem ipsum dolor sit amsrtghstrget, consectetur adipiscing elit!',
                date: '2023-07-30 10:47'
            },
        ]
    },
    {
        user: users[4],
        messages: [
            {   sender: users[4],
                content: 'Lorem ipsum dolor sit hgfsdfhgsfghtrsrghtrsamet, consectetur adipiscing elit!',
                date: '2023-07-30 16:38'
            },
            {   sender: users[4],
                content: 'Lorem ipsum dolor sit amet, congstgtrsectetur adipiscing elit!',
                date: '2023-07-30 16:47'
            },
            {   sender: localUser,
                content: 'Lorem ipsum dolor sit amet, cogsdsgnsectetur adipiscing elit!',
                date: '2023-07-30 10:47'
            },
        ]
    },
    {
        user: users[5],
        messages: [
            {   sender: users[5],
                content: 'Lorem ipsum dolor sit hgfsdfhgsfghtrsrghtrsamet, consectetur adipiscing elit!',
                date: '2023-07-30 16:38'
            },
            {   sender: users[5],
                content: 'Lorem ipsum dolor sit amet, congstgtrsectetur adipiscing elit!',
                date: '2023-07-30 16:47'
            },
            {   sender: localUser,
                content: 'Lorem ipsum dolor sit amet, cogsdsgnsectetur adipiscing elit!',
                date: '2023-07-30 10:47'
            },
        ]
    },
]

export { localUser, chats, users };