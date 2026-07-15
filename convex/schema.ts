import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bookings: defineTable({
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
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("technician_assigned"),
      v.literal("on_the_way"),
      v.literal("working"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_bookingCode", ["bookingCode"])
    .index("by_phone", ["phone"])
    .index("by_status", ["status"]),
});
