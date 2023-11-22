import { BadRequestError } from "@/errors/bad-request-error";
import { CustomError } from "@/errors/custom-error";
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
    const query = req.nextUrl.searchParams;
    const slug = query.get("q");
    const category = query.get("category");
    const filter = slug
      ? {
          slug: {
            $regex: slug,
            $options: "i",
          },
        }
      : {};
    let products = (await Product.find(filter).populate("category")) as IProductDoc[];

    if (category) {
      products = (await Product.find(filter).populate({
        path: "category",
        match: {
          slug: category,
        },
      })) as IProductDoc[];
      products = products.filter((item: IProductDoc) => item.category);
    }
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
    body.price = +body.price;
    const product = new Product(body);
    const result = await product.save();
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}
