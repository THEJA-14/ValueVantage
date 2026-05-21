// Shared category list used across regions
export const CATEGORIES = [
  "Dress",
  "Home Improvements",
  "Kitchen",
  "Garden",
  "Health & Fitness",
  "Food",
  "Beauty",
  "Lights",
  "Electronics",
  "Travel Accessories",
  "Toys",
  "Shoes & Sandals",
] as const;

export type Category = (typeof CATEGORIES)[number];
