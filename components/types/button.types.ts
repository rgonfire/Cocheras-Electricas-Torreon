export type TypeButton = {
  text?: string;
  iconLeft?: string;
  iconRight?: string;
  alt?: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: any;
  color: "black" | "white" | "green";
  size: "default" | "small" | "normal";
};
