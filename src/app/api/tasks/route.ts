import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Saari tasks ko fetch karne ki API
export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}