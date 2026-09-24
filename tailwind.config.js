/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Every colour resolves through a CSS variable, so a single
      // data-theme swap on <html> re-themes the whole app.
      colors: {
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        raised: "rgb(var(--c-raised) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        faint: "rgb(var(--c-faint) / <alpha-value>)",
        // `accent` is tuned for text/icons, `accent-solid` for filled
        // surfaces — they differ so both keep AA contrast.
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        "accent-solid": "rgb(var(--c-accent-solid) / <alpha-value>)",
        "accent-ink": "rgb(var(--c-accent-ink) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.03em",
      },
      maxWidth: {
        content: "76rem",
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.18)",
        lift: "0 2px 4px rgb(0 0 0 / 0.06), 0 18px 40px -16px rgb(0 0 0 / 0.28)",
        glow: "0 0 0 1px rgb(var(--c-accent) / 0.25), 0 12px 40px -8px rgb(var(--c-accent) / 0.35)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -8%) scale(1.12)" },
          "66%": { transform: "translate(-6%, 6%) scale(0.94)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 1.6s infinite",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "spin-slow": "spinSlow var(--spin-duration, 28s) linear infinite",
        "spin-reverse": "spinReverse var(--spin-duration, 36s) linear infinite",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["dark", "light"], logs: false },
};
