import { BadRequestError } from "@/errors/bad-request-error";
import { CustomError } from "@/errors/custom-errot";
import { connectDb } from "@/lib/db";
import { errorHandler } from "@/middleware/error-handler";
import { IProduct, IProductDoc, Product } from "@/models/product";
import { toSlug } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * Product handler
 * 1. Get all products
 * @param req
 * @returns
 */
export async function GET(req: NextRequest) {
  await connectDb();
  try {
    const products = (await Product.find().populate(
      "category"
    )) as IProductDoc[];
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

/**
 * Add product
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  await connectDb();
  try {
    const body = (await req.json()) as IProduct;
    body.slug = toSlug(body.title) as string;

    const hasProduct = (await Product.findOne({
      slug: body.slug,
    })) as IProductDoc;
    if (hasProduct) throw new BadRequestError("Product already existed!");

    const product = new Product(body);
    const result = await product.save();
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}
