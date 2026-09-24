import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiCheck, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { profile, socials } from "../data/profile";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config/emailjs";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

const fieldClass =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelClass = "mb-2 block text-sm font-medium text-ink";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: profile.name,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
    {
      icon: FiPhone,
      label: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: FiMapPin, label: profile.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      intro="Have a project in mind, or a role you think I'd fit? Send a message and I'll get back to you."
      className="border-t border-line"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Contact details */}
        <div>
          <ul className="space-y-4">
            {details.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent">
                  <Icon aria-hidden="true" />
                </span>
                {href ? (
                  <a
                    href={href}
                    className="break-all text-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-muted">{label}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
              Find me on
            </h3>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-lg border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Message form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-line bg-surface p-6 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label className={labelClass} htmlFor="name">
                Your name
              </label>
              <input
                className={fieldClass}
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Jane Doe"
                required
                value={form.name}
                onChange={update("name")}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Your email
              </label>
              <input
                className={fieldClass}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="jane@example.com"
                required
                value={form.email}
                onChange={update("email")}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                className={`${fieldClass} h-36 resize-y`}
                id="message"
                name="message"
                placeholder="Tell me a little about what you need"
                required
                value={form.message}
                onChange={update("message")}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-6 w-full"
            size="lg"
            disabled={status === "sending"}
          >
            {status === "sending" && "Sending..."}
            {status === "sent" && (
              <>
                <FiCheck aria-hidden="true" />
                Message sent
              </>
            )}
            {(status === "idle" || status === "error") && (
              <>
                <FiSend aria-hidden="true" />
                Send message
              </>
            )}
          </Button>

          {/* Previously the result was only ever logged to the console. */}
          <p aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm">
            {status === "sent" && (
              <span className="text-accent">
                Thanks, I&rsquo;ll reply as soon as I can.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-400">
                That didn&rsquo;t send. You can email me directly at{" "}
                {profile.email}.
              </span>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
