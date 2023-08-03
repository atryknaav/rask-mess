type User = {
    name: string;
    icon?: string;
}

type Message = {
    sender: User;
    content: string;
    date: string;
    read: boolean
}


type Chat = {
    user: User;
    messages: Message[];
}
