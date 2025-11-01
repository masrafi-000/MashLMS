import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseCategories = [
  "Development",
  "Buisness",
  "Finance",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),

  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" }),

  fileKey: z.string().min(1, { message: "File key cannot be empty" }),

  price: z.coerce
    .number()
    .min(1, { message: "Price must be at least 1" }) as unknown as z.ZodNumber,
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, {
      message: "Duration cannot exceed 500 hours",
    }) as unknown as z.ZodNumber,

  level: z.enum(courseLevels),

  category: z.enum(courseCategories, {message: "Category is required"}),
  


  smallDescription: z
    .string()
    .min(3, { message: "Short description must be at least 3 characters long" })
    .max(200, {
      message: "Short description must be at most 200 characters long",
    }),

  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),

  status: z.enum(courseStatus),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
