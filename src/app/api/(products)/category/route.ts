import { BadRequestError } from "@/errors/bad-request-error";
import { CustomError } from "@/errors/custom-errot";
import { connectDb } from "@/lib/db";
import { errorHandler } from "@/middleware/error-handler";
import { Category, ICategory, ICategoryDoc } from "@/models/category";
import { toSlug } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * Category handler
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  await connectDb();
  try {
    const body = (await req.json()) as ICategory;

    body.slug = toSlug(body.title) as string;
    const isSlug = await Category.findOne({ slug: body.slug });

    if (isSlug) throw new BadRequestError("Category already existed!");

    const category = new Category(body);
    await category.save();

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

/**
 * Get all categories handler
 * @param req
 * @returns
 */
export async function GET(req: NextRequest) {
  await connectDb();
  try {
    const query = req.nextUrl.searchParams;
    const limit = 10;
    const skip = 10;
    const categories = (await Category.find()) as ICategoryDoc[];
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}
