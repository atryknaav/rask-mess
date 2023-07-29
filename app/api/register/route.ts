import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            username, password
        } = body;

        if (!username || !password) {
            return new NextResponse('Missing info', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                username,
                hashedPassword
            }
        });

        return NextResponse.json(user);
    } catch (err) {
        console.log(err, 'REGISTRATION ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
}