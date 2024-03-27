import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  [
    // Base styles for all buttons
    "inline-flex items-center justify-center font-poppins font-medium transition ease-in-out duration-150",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-400",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        // Primary button styles
        primary: [
          "py-[9.5px] h-[36px] bg-gradient-to-r from-[#0F58B7] to-[#62D9FF]",
          "text-white text-[16px] leading-[108%] tracking-tighter shadow-lg rounded-md w-full",
        ],
        // Help button styles
        help: [
          "w-[223px]  h-[32px]",
          "rounded-[10px]",
          "bg-[#0F58B7] text-white text-[16px] leading-[108%] tracking-tighter",
          "justify-center items-center",
          "rounded-md-[10px] shadow-[5px 5px 30px rgba(0, 0, 0, 0.1)]",
        ],
      },
      size: {
        default: "px-4 py-2",
        small: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, ...props }, ref) => {
    if (variant === "help") {
      return (
        <button ref={ref} className={buttonVariants({ variant })} {...props}>
          <span className=" top-1 ml-3 h-2.5 w-2.5 rounded-full bg-white"></span>
          <span className="w-full text-center">{children}</span>
        </button>
      );
    }

    return (
      <button ref={ref} className={buttonVariants({ variant })} {...props}>
        <div className="w-max">{children}</div>
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
