import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';

type authType = {
    username: string,
    password: string,
};

export async function POST(data: authType) {
    const { username, password } = data;
    
    const user = prisma.user.findUnique({
        where: {
            username: username
        }
    })
    console.log(user);
    return user;
}