import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, ...props }, ref) => {
    return (
      // Assuming the container is positioned relatively in your layout:
      <div className="relative flex flex-col items-start">
        <input
          type={type}
          ref={ref}
          name={name}
          {...props}
          className={`h-[33px] w-[466px] border-b border-[#1C1C1C] bg-transparent px-3 py-2 font-poppins text-[18px] text-sm leading-[108%] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#1C1C1C] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
