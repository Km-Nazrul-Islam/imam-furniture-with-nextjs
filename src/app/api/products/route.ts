import { NextResponse } from "next/server"
import products from "./products.json"

export async function GET(request: Request) {
  return NextResponse.json(products)
}
