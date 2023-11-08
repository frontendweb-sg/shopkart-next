import { AuthError } from "@/errors/auth-error";
import { CustomError } from "@/errors/custom-error";
import { connectDb } from "@/lib/db";
import { errorHandler } from "@/middleware/error-handler";
import { IUserDoc, User } from "@/models/user";
import { JWT } from "@/utils/jwt";
import { Password } from "@/utils/password";
import { NextRequest, NextResponse } from "next/server";

/**
 * User sign-in handler
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  await connectDb();
  try {
    const body = (await req.json()) as ILogin;
    console.log("body", body);
    const user = (await User.findOne({
      $or: [{ email: body.email }, { mobile: body.email }],
    })) as IUserDoc;

    if (!user) {
      throw new AuthError("No account associate with this email and mobile,please register");
    }

    const verify = Password.compare(body.password, user.password);
    if (!verify) {
      throw new AuthError("Invalid password!");
    }

    const token = JWT.genToken({
      id: user.id,
      email: user.email,
    });
    user.secretToken = token;

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return errorHandler(error as CustomError);
  }
}
