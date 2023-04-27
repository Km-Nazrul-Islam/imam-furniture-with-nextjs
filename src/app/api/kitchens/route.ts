import { NextResponse } from "next/server"
import kitchenData from "./kitchens.json"

export async function GET(request: Request) {
  return NextResponse.json(kitchenData)
}
