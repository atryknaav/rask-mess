import prisma from "@/app/libs/prismadb";
import { sendStatusCode } from "next/dist/server/api-utils";
import bcrypt from 'bcrypt';
import{ MongoClient } from 'mongodb';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/dist/client/components/headers";

const client = new MongoClient(process.env.DATABASE_URL!);

export async function signin(req: Request) {

    await client.connect();

    const { username, password } = await req.json();
    if (!username || !password) throw new Error ('Username and password are required');

    const userFound = await client.db("test").collection("User").findOne({ username: username});

    if(!userFound) throw new Error ('401: Unauthorized');

    const match = await bcrypt.compare(password, userFound.hashedPassword)

    if(match) {

        const accessToken = jwt.sign(
            { "username": userFound.username },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: '30s'}
        );

        const refreshToken = jwt.sign(
            { "username": userFound.username },
            process.env.REFRESH_TOKEN_SECRET!,
            { expiresIn: '1d'}
        );
            
        const response = NextResponse.json(
            { success: true },
            { status: 200, headers: { "content-type": "application/json" }}
        );

        response.cookies.set({
            name: "token",
            value: accessToken,
            path: '/'
        })

        return response;
    } else {
        return 'Code 401';
    }
}