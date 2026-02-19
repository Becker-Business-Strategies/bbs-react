import { z } from "zod";

/**
 * Base schema for contact form input.
 * This matches what the user types into the form.
 */
export const contactFormSchema = z.object({
  name: z.string().min(1, "First name is required"),
  last: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => val.replace(/\D/g, "").length >= 10,
      "Please enter a valid phone number"
    ),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(200, "Message must be 200 characters or less"),
});

/**
 * Type used in React Hook Form, components, etc.
 */
export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Server-side / DB model for a stored client/contact.
 * This lines up with your Client List table.
 */
export const clientSchema = contactFormSchema.extend({
  _id: z.string(),
  createdAt: z.string().optional(), // or z.coerce.date() if you prefer Dates
  updatedAt: z.string().optional(),
});

/**
 * Type for clients you get back from the API (/clients, etc.).
 */
export type Client = z.infer<typeof clientSchema>;

export const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  client: clientSchema.optional(),
});

export type ContactResponse = z.infer<typeof contactResponseSchema>;
