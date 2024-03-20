import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        gray: {
          custom: "rgba(125, 125, 125, 0.5)",
        },
        blue: {
          600: "#0F58B7",
          700: "#0a3c7a",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        // Base font sizes
        "h1-desktop": ["70px", "130%"], // 70px font size with 130% line-height
        "h1-mobile": ["36px", "130%"],
        h2: ["60px", { lineHeight: "130%", letterSpacing: "-1%" }],
        h3: ["48px", "130%"], // Assuming 130% line-height for consistency
        h4: ["35px", "130%"], // Assuming 130% line-height for consistency
        h5: ["30px", "130%"], // Assuming 130% line-height for consistency
        h6: ["25px", "130%"], // Assuming 130% line-height for consistency
        button: ["20px", "130%"], // Assuming 130% line-height for consistency
        text: ["18px", "130%"], // Assuming 130% line-height for consistency
        "bold-text": ["16px", "130%"], // Assuming 130% line-height for consistency
        "small-text": ["14px", "130%"], // Assuming 130% line-height for consistency
        "tiny-text": ["12px", "130%"], // Assuming 130% line-height for consistency
      },
      letterSpacing: {
        tightest: "-1%", // Custom value, adjust based on requirements
      },
      // If specific leading values needed, define them here
      lineHeight: {
        custom: "130%", // Example custom line height
      },
      boxShadow: {
        custom: "2px 2px 10px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
