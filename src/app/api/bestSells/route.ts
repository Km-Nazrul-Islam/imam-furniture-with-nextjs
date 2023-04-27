import { NextResponse } from "next/server"
import bestSells from "./bestSells.json"

export async function GET(request: Request) {
  return NextResponse.json(bestSells)
}
