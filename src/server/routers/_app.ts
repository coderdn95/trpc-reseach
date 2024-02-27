import { t } from "../trpc";
import { petRouter } from "./pet";
import { postRouter } from "./post";
import { userRouter } from "./user";


export const appRouter = t.router({
    user: userRouter, // Write procedures under "user" namespace
    post: postRouter,
    pet: petRouter
});