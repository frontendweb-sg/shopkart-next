import { NextResponse } from "next/server";
import { Error } from "mongoose";
import { CustomError } from "@/errors/custom-error";
import { ValidationError } from "@/errors/validation-error";

/**
 * Error handerl
 * @param error
 * @returns
 */
export const errorHandler = (error: CustomError) => {
  if (error instanceof Error.ValidationError) {
    error = new ValidationError(error);
  }
  console.log("Error", error);
  return NextResponse.json({ errors: error.renderError() }, { status: error.status });
};
