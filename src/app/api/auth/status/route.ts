import { getServerSession } from "next-auth/next"
import { NextResponse } from 'next/server'
import { authOptions } from "../[...nextauth]/route"

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { isAuthenticated: false, error: "Unauthorized user" },
                { status: 401 }
            )
        }

        // Session found, user is authenticated
        return NextResponse.json(
            { isAuthenticated: true, error: null },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error checking auth status:", error)
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        )
    }
}