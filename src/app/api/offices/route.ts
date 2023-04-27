import { NextResponse } from "next/server"
import offices from "./offices.json"

export async function GET(request: Request) {
  return NextResponse.json(offices)
}
