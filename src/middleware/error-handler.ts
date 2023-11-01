import { NextResponse } from "next/server";
import { Error } from "mongoose";
import { CustomError } from "@/errors/custom-errot";
import { BadRequestError } from "@/errors/bad-request-error";

/**
 * Error handerl
 * @param error
 * @returns
 */
export const errorHandler = (error: CustomError) => {
  console.log(error.message);
  return NextResponse.json({ errors: error.renderError() }, { status: error.status });
};
