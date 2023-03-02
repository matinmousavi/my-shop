import { TextField, textFieldClasses } from "@mui/material";
import { FC } from "react";

type Props = {
  name: string;
  label?: string;
  value?: any;
  type: "text" | "number" | "password";
  error?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  inputProps?: {};
  multiline?: boolean;
  rows?: number;
  className?: string;
  classes?: {};
  styles?: React.CSSProperties;
  disabled?: boolean;
  placeholder?: string;
  margin?: "none" | "normal" | "dense";
  variant?: "outlined" | "standard" | "filled";
};
export const Input: FC<Props> = ({
  name,
  label,
  type,
  value = null,
  error,
  onChange,
  helperText = "",
  fullWidth = false,
  size = "medium",
  inputProps = {},
  multiline = false,
  rows = 1,
  className = "",
  classes = textFieldClasses,
  styles = {},
  disabled = false,
  placeholder = "",
  margin = "dense",
  variant = "standard",
}) => {
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      type={type}
      error={error}
      helperText={helperText}
      onChange={onChange}
      fullWidth={fullWidth}
      size={size}
      InputProps={inputProps}
      multiline={multiline}
      rows={rows}
      className={className}
      classes={classes}
      style={styles}
      disabled={disabled}
      placeholder={placeholder}
      margin={margin}
      variant={variant}
    />
  );
};
