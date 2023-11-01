import { connectDb } from "@/lib/db";
import { IUserDoc, User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { Error } from "mongoose";
import { BadRequestError } from "@/errors/bad-request-error";
import { errorHandler } from "@/middleware/error-handler";
import { CustomError } from "@/errors/custom-errot";
/**
 * User sign-up api
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  await connectDb();
  try {
    const body = (await req.json()) as ISingup;

    const userExist = (await User.findOne({ email: body.email })) as IUserDoc;
    if (userExist) {
      throw new BadRequestError(
        "User already register with this email, please use another!"
      );
    }

    const user = new User(body) as IUserDoc;
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}
