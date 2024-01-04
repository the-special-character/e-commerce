import React, { HTMLAttributes, HTMLProps } from "react";
import clsx from 'clsx'

type Props = {
  label: string;
  helperText?: string;
  error?: string;
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"]
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, id, helperText, error, labelClassName, className, ...props }: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={clsx("block text-sm font-medium leading-6 text-gray-900", {
            [labelClassName || '']: labelClassName
        })}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          id={id}
          className={clsx("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-wait invalid:ring-red-400 invalid:focus:ring-red-600", {
            [className || ''] : className
          })}
          {...props}
        />
      </div>
      {helperText && <p className="text-gray-500">
        {helperText}
      </p>}
      {error && <p className="text-red-500">
        {error}
      </p>}
    </div>
  );
};

export default Input;
