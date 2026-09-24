// EmailJS browser credentials. The public key is designed to be exposed
// client-side, but these live here so they can be swapped per environment
// without touching component code.
export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_3tc3p99";

export const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_kr4gohr";

export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "B9G_EgR6kzlvxVU2U";
