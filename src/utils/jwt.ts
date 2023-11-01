import { AuthError } from "@/errors/auth-error";
import Jwt from "jsonwebtoken";
import type { JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";

interface Options extends SignOptions {}

const DEFAULT_OPTIONS: Options = {
  expiresIn: "1h",
};

export class JWT {
  static genToken(user: JwtPayload, option: Options = DEFAULT_OPTIONS) {
    return Jwt.sign(user, process.env.NEXTAUTH_SECRET, option);
  }
  static verify(token: string) {
    return Jwt.verify(token, process.env.NEXTAUTH_SECRET, (error, decoded) => {
      if (error) throw new AuthError(error.message);
      return decoded;
    });
  }
}
