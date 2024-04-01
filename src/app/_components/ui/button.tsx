import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center transition ease-in-out duration-150",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-400",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "py-2 h-9 bg-custom-gradient",
          "text-white tracking-tighter shadow-lg rounded-md w-full",
        ],
        help: [
          "w-56 h-8",
          "rounded-[0.625rem]",
          "bg-blue-600 text-white tracking-tighter",
          "rounded-md-[0.625rem] shadow-lg",
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
          <span className="top-1 ml-3 h-2.5 w-2.5 rounded-full bg-white"></span>
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
