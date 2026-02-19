import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1, "First name is required"),
  last: z.string().min(1, "Last name is required"),
  email: z.email(`Please enter a valid email`).min(1, "Email is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => val.replace(/\D/g, "").length >= 10,
      "Please enter a valid phone number",
    ),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(200, "Message must be 200 characters or less"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

type ContactFormProps = {
  // onSubmit: (values: ContactFormValues) => Promise<void> | void;
  defaultValues?: Partial<ContactFormValues>;
  /** If true, resets the form after successful submit. Default: true */
  resetOnSubmit?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  // onSubmit,
  defaultValues,
  // resetOnSubmit = true,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      last: "",
      email: "",
      phone: "",
      message: "",
      ...defaultValues,
    },
  });

  const messageValue = getValues("message") ?? "";

  return (
    <form
      // onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 rounded-md bg-white p-6 text-slate-800 shadow-md"
    >
      <input type="hidden" name="form-name" value="contactForm" />
      {/* First Name */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-700">
          First Name
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <span className="material-icons text-base">account_box</span>
          </span>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-[11px] text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-700">
          Last Name
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <span className="material-icons text-base">perm_identity</span>
          </span>
          <input
            type="text"
            placeholder="Last"
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            {...register("last")}
          />
        </div>
        {errors.last && (
          <p className="mt-1 text-[11px] text-red-600">{errors.last.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-700">
          Email
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <span className="material-icons text-base">alternate_email</span>
          </span>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-[11px] text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-700">
          Phone Number
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <span className="material-icons text-base">phone</span>
          </span>
          <input
            type="tel"
            placeholder="e.g. 3145869304"
            maxLength={20}
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            {...register("phone")}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-[11px] text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-slate-700">
          Message
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-2 text-slate-400">
            <span className="material-icons text-base">mail</span>
          </span>
          <textarea
            rows={8}
            placeholder="How can we help you?"
            maxLength={200}
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-8 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            {...register("message")}
          />
          <div className="absolute bottom-1 right-3 text-[10px] text-slate-400">
            {messageValue.length}/200
          </div>
        </div>
        {errors.message && (
          <p className="mt-1 text-[11px] text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand/80 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
