import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
    matcher: ['/', '/upcoming', '/previous', '/recordings', '/personal-room', '/meeting(.*)',],
};

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };