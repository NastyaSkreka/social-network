let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11}
            ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Ok'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Viktor'}
        ],
    }
}

export default state;