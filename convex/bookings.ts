import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createBooking = mutation({
  args: {
    bookingCode: v.string(),
    customerName: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    address: v.string(),
    district: v.string(),
    city: v.string(),
    postalCode: v.optional(v.string()),
    googleMaps: v.optional(v.string()),
    device: v.string(),
    brand: v.optional(v.string()),
    model: v.optional(v.string()),
    deviceAge: v.optional(v.string()),
    services: v.array(v.string()),
    problem: v.string(),
    bookingDate: v.string(),
    bookingTime: v.string(),
    locationType: v.union(v.literal("rumah"), v.literal("kantor")),
    priority: v.union(v.literal("normal"), v.literal("urgent")),
    notes: v.optional(v.string()),
    images: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const bookingId = await ctx.db.insert("bookings", {
      ...args,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    });
    return bookingId;
  },
});
