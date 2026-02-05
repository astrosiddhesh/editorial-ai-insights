import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        headline: "hsl(var(--headline))",
        subheadline: "hsl(var(--subheadline))",
        ornament: "hsl(var(--ornament))",
        cream: "hsl(var(--cream))",
        ivory: "hsl(var(--ivory))",
        charcoal: "hsl(var(--charcoal))",
        gold: "hsl(var(--gold))",
        "gold-light": "hsl(var(--gold-light))",
        "gold-dark": "hsl(var(--gold-dark))",
        amber: "hsl(var(--amber))",
        copper: "hsl(var(--copper))",
        ink: "hsl(var(--ink))",
        "royal-blue": "hsl(var(--royal-blue))",
        "bright-blue": "hsl(var(--bright-blue))",
        "deep-blue": "hsl(var(--deep-blue))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        editorial: ["Spectral", "Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          from: { width: "0" },
          to: { width: "100%" },
        },
         "cinematic-reveal": {
           "0%": { opacity: "0", transform: "translateY(60px) scale(0.95)", filter: "blur(12px)" },
           "100%": { opacity: "1", transform: "translateY(0) scale(1)", filter: "blur(0)" },
         },
         "mask-up": {
           from: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
           to: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
         },
         "scale-reveal": {
           "0%": { opacity: "0", transform: "scale(0.9)" },
           "100%": { opacity: "1", transform: "scale(1)" },
         },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "draw-line": "draw-line 1s ease-out forwards",
         "cinematic-reveal": "cinematic-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
         "mask-up": "mask-up 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) forwards",
         "scale-reveal": "scale-reveal 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
