import {NextResponse} from "next/server";
import {applyRateLimiting} from "@/utils/rate-limiting";

export const middleware = async (request) => {
    try {
        // rate limiting control
        await applyRateLimiting(request, NextResponse);
    } catch (error) {
        return new NextResponse('Too many request', {
            status: 429
        })
    }
};

export const config = {
    matcher: '/api/(.*)'
}
