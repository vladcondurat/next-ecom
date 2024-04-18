"use server";

import { db } from "@/db";
import { Product, product } from "@/db/schema";
import { getSession } from "@/lib/auth";

export async function addProductAction(
  productData: Omit<Product, "id" | "createdAt" | "updatedAt">
) {
  const session = await getSession();

  if (!session) throw new Error("Unauthorized");

  await db.insert(product).values({ ...productData });
}
