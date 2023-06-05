type Size = "small" | "medium" | "large";
type Theme = "primary" | "secondary" | "cancel";
type FontSize = 12 | 14 | 16 | 18 | 32;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
type ButtonTheme = Theme;
type ButtonSize = Size;

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {}
type MicroSize = "micro400" | "micro500" | "micro700" | "micro900";
type SmallSize = "small400" | "small500" | "small700" | "small900";
type BaseSize = "base400" | "base500" | "base700" | "base900";
type MediumSize = "medium400" | "medium500" | "medium700" | "medium900";
type LargeSize = "large400" | "large500" | "large700" | "large900";
type XlargeSize = "xlarge400" | "xlarge500" | "xlarge700" | "xlarge900";

type TypographyTheme =
  | MicroSize
  | SmallSize
  | BaseSize
  | MediumSize
  | LargeSize
  | XlargeSize;
type TypographyAlign = "center" | "inherit" | "justify" | "left" | "right";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
