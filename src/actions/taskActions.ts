"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string" || title.trim() === "") {
    return;
  }

  await prisma.task.create({
    data: {
      title,
    },
  });

  revalidatePath("/");
}

export async function deleteTask(id: string) {
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}

export async function updateTask(
  id: string,
  title: string
) {
  if (!title.trim()) return;

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  revalidatePath("/");
}
