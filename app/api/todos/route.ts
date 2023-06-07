import { prisma } from "../../libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const allTodos = await prisma.todo.findMany();
  console.log("GET /api/todos allTodos:", allTodos);
  return NextResponse.json(allTodos);
}
