import { BadRequestError } from "@/errors/bad-request-error";
import { CustomError } from "@/errors/custom-error";
import { connectDb } from "@/lib/db";
import { errorHandler } from "@/middleware/error-handler";
import { IProduct, IProductDoc, Product } from "@/models/product";
import { toSlug } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: { productId: String };
}

/**
 * Get single product by product id
 * @param req
 * @param param1
 * @returns
 */
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDb();
  try {
    const productId = params.productId;
    console.log("p", productId);

    const product = (await Product.findById(productId).populate("category")) as IProductDoc;
    if (!product) throw new BadRequestError("Product is not exist!");

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

/**
 * Update product
 * @param req
 * @param param1
 * @returns
 */
export async function PUT(req: NextRequest, { params }: IParams) {
  await connectDb();
  try {
    const searchParams = req.nextUrl.searchParams;
    const productId = params.productId as string;
    const status = searchParams.get("status") as DocVisibility;

    if (status) {
      return updateVisibility(status, productId);
    }

    const product = (await Product.findById(productId)) as IProductDoc;

    if (!product) throw new BadRequestError("Product not existed!");

    const body = (await req.json()) as IProduct;
    body.slug = toSlug(body.title) as string;
    const result = await Product.findByIdAndUpdate(
      productId,
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
 * Delete Product
 * @param req
 * @param param1
 * @returns
 */
export async function DELETE(req: NextRequest, { params }: IParams) {
  await connectDb();
  try {
    const productId = params.productId as string;

    const product = (await Product.findById(productId)) as IProductDoc;

    if (!product) throw new BadRequestError("Product not existed!");

    await Product.findByIdAndDelete(productId);
    return NextResponse.json(
      {
        id: productId,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}

const updateVisibility = async (status: DocVisibility, productId: string) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    {
      $set: {
        active: status === "active" ? true : false,
      },
    },
    { new: true }
  );
  return NextResponse.json(result, { status: 200 });
};
