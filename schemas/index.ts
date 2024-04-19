import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    },
  );

export const profileFormSchema = z.object({
  gender: z.optional(z.string()),
  dob: z.optional(
    z.date().min(new Date("1920-01-01")).max(new Date("2018-01-01")),
  ),
  country: z.optional(z.string()),
  bio: z.optional(z.string().max(320).min(4)),
  urls: z.optional(
    z.array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      }),
    ),
  ),
});

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  subject: z.string().min(2, {
    message: "Subject is required",
  }),
  message: z.string().max(999).min(4),
});

export const NewsletterFormSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const AddLocationFormSchema = z.object({
  name: z
    .string()
    .max(40)
    .min(5, { message: "Name must be between 5 and 40 characters" }),
  country: z.string(),
  city: z.string(),
  category: z.string(),
  description: z.string().max(999).min(60),
  images: z.array(z.string()),
  video: z.optional(z.string().url({ message: "URL/link of video required" })),
  dateArrived: z.date(),
  address: z.string().min(1),
  openingTime: z.optional(z.coerce.number().min(1)),
  closingTime: z.optional(z.coerce.number().min(1)),
  price: z.optional(z.coerce.number().min(1)),
  specialFeatures: z.array(z.string()).optional(),
  idealFor: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});
