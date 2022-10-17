import React from "react";
import { Button as MantineButton } from "@mantine/core";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <MantineButton
      // type="button"
      className={[
        "storybook-button",
        "rounded-full ring-2 ring-orange-800",
        `storybook-button--${size}`,
      ].join(" ")}
      // style={{ backgroundColor }}
      // {...props}
      color="cyan"
      size="lg"
    >
      {label}
    </MantineButton>
  );
};
