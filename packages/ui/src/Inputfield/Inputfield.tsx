"use client";

import clsx from "clsx";
import "./Inputfield.scss";
import { ComponentProps, useId } from "react";

type INPUTFIELD_TYPES = "text" | "email" | "password" | "tel";

export interface Props extends Omit<ComponentProps<"input">, "type"> {
  type: INPUTFIELD_TYPES;
  id?: string;
  isHidden?: boolean;
  label?: string;
  error?: string;
}

export default function Inputfield({ ref, error, isHidden, label, id, ...props }: Props) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const classes = clsx("Inputfield", {
    "Inputfield--isHidden": isHidden,
  });

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={inputId}>
          {label}
          {props.required && <span className="Inputfield--required"> *</span>}
        </label>
      )}
      {isHidden ? (
        <input
          className="Inputfield__input"
          id={inputId}
          ref={ref}
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          {...props}
        />
      ) : (
        <input className="Inputfield__input" id={inputId} ref={ref} {...props} />
      )}
      {error && <span className="Inputfield__errorMessage">{error}</span>}
    </div>
  );
}
