import { BadRequestError } from "@/errors/bad-request-error";
import { CustomError } from "@/errors/custom-errot";
import { connectDb } from "@/lib/db";
import { errorHandler } from "@/middleware/error-handler";
import { Category, ICategory, ICategoryDoc } from "@/models/category";
import { toSlug } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: { categoryId: String };
}

/**
 * Get single category by category id
 * @param req
 * @param param1
 * @returns
 */
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDb();
  try {
    const categoryId = params.categoryId;

    const category = (await Category.findById(categoryId)) as ICategoryDoc;

    if (!category) throw new BadRequestError("Category not existes!");

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

/**
 * Update category
 * @param req
 * @param param1
 * @returns
 */
export async function PUT(req: NextRequest, { params }: IParams) {
  await connectDb();
  try {
    const searchParams = req.nextUrl.searchParams;
    const categoryId = params.categoryId as string;
    const status = searchParams.get("status") as DocVisibility;

    if (status) {
      return updateVisibility(status, categoryId);
    }

    const category = (await Category.findById(categoryId)) as ICategoryDoc;

    if (!category) throw new BadRequestError("Category not existes!");

    const body = (await req.json()) as ICategory;
    body.slug = toSlug(body.title) as string;
    const result = await Category.findByIdAndUpdate(
      categoryId,
      {
        $set: body,
      },
      { new: true }
    );

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

/**
 * Delete category
 * @param req
 * @param param1
 * @returns
 */
export async function DELETE(req: NextRequest, { params }: IParams) {
  await connectDb();
  try {
    const categoryId = params.categoryId;

    const category = (await Category.findById(categoryId)) as ICategoryDoc;

    if (!category) throw new BadRequestError("Category not existes!");

    await Category.findByIdAndDelete(categoryId);
    return NextResponse.json(
      {
        id: categoryId,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

const updateVisibility = async (status: DocVisibility, categoryId: string) => {
  const result = await Category.findByIdAndUpdate(
    categoryId,
    {
      $set: {
        active: status === "active" ? true : false,
      },
    },
    { new: true }
  );
  return NextResponse.json(result, { status: 200 });
};
