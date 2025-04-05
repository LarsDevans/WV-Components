import { ReactNode } from "react";

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  icon?: ReactNode;
  label?: string;
  outlined?: boolean;
  shadow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
