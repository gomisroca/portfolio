import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

interface ContactFormProps {
  serviceId: string;
  templateId: string;
  publicKey: string;
  nameField: string;
  emailField: string;
  messageField: string;
  sendButton: string;
  sending: string;
  successMessage: string;
  errorMessage: string;
}

export default function ContactForm({
  serviceId,
  templateId,
  publicKey,
  nameField,
  emailField,
  messageField,
  sendButton,
  sending,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      alert(successMessage);
      formRef.current.reset();
    } catch (error) {
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto my-4 w-full bg-zinc-50 p-4 shadow-md dark:bg-zinc-950">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="mb-1 block text-sm font-medium">
            {nameField}
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full border border-zinc-200 bg-zinc-50 px-3 py-2 focus:ring-2 focus:ring-blue-400/50 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-blue-400/40"
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="mb-1 block text-sm font-medium"
          >
            {emailField}
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full border border-zinc-200 bg-zinc-50 px-3 py-2 focus:ring-2 focus:ring-blue-400/50 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-blue-400/40"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            {messageField}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full border border-zinc-200 bg-zinc-50 px-3 py-2 focus:ring-2 focus:ring-blue-400/50 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-blue-400/40"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full cursor-pointer items-center justify-center gap-2 border-2 border-zinc-300 px-4 py-2 font-semibold transition duration-200 ease-in-out hover:scale-110 hover:border-blue-400/60 hover:text-blue-400/80 focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:outline-none active:scale-90 active:duration-100 disabled:opacity-50 dark:border-zinc-700 dark:hover:border-blue-400/40 dark:hover:text-blue-400/60"
        >
          {isSubmitting ? (
            sending
          ) : (
            <>
              {sendButton}
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
