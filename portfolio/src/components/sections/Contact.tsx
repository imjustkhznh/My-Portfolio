"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { social } from "@/data/content";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { SpinningIcon } from "@/components/SpinningIcon";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});
 type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      setStatus('idle');
      
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_email: 'phamgiakhanhlc@gmail.com', // Email nhận
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center"
      >
        <SpinningIcon />
        Contact
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column - Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200 bg-white/60 p-5 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
        >
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Get In Touch
          </h3>
          
          <p className="mb-4 text-sm leading-relaxed">
            I'm currently available for freelance work and open to discussing exciting opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                Email
              </p>
              <a 
                href={`mailto:${social.email}`}
                className="text-sm underline hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {social.email}
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                Location
              </p>
              <p className="text-sm">Hanoi, Vietnam</p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                Connect
              </p>
              <div className="flex gap-3 text-sm">
                <a className="underline hover:text-zinc-900 dark:hover:text-zinc-100" href={social.github} target="_blank">
                  GitHub
                </a>
                <span>•</span>
                <a className="underline hover:text-zinc-900 dark:hover:text-zinc-100" href={social.linkedin} target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                Availability
              </p>
              <p className="text-sm">Open for freelance projects</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-zinc-200 bg-white/60 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-400">Name</label>
              <input
                {...register("name")}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-800 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-400">Email</label>
              <input
                {...register("email")}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-800 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-400">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-800 outline-none ring-0 transition placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                placeholder="How can I help?"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white disabled:opacity-70 dark:bg-zinc-100 dark:text-zinc-900"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400">
                ✓ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400">
                ✗ Failed to send. Please try again or email directly.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}


