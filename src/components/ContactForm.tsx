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
    <div className="mx-auto my-4 w-full rounded-lg border-2 border-zinc-300 bg-zinc-200 p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
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
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary-500 px-4 py-2 font-semibold transition duration-200 hover:scale-105 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-110 active:duration-100 disabled:opacity-50"
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
