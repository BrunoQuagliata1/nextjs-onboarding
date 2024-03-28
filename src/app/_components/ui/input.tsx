import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, ...props }, ref) => {
    return (
      <div className=" flex flex-col items-center">
        <input
          type={type}
          ref={ref}
          name={name}
          {...props}
          className={`h-8 w-full border-b border-black bg-transparent px-3 py-2 text-sm  placeholder:text-muted-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
