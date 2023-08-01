import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@/app/libs/prismadb";

type authType = {
    username: string,
    password: string,
  };

export async function POST(req: Request) {
    const data: authType  = await req.json();
    const { username, password } = data;

    const hashedPassword = await bcrypt.hash(password, 13);


    const userExists = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    if (userExists) throw new Error ('This username alreadu exists');

    const user = await prisma.user.create({
        data: {
            username, 
            hashedPassword
        }
    });

    return NextResponse.json({ user });
}