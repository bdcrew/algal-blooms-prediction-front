import { PropsWithChildren } from "react";
import { DEFAULT_TEXT_COLOR } from "@/constants/tailwindcss";

const getFontWeightWihtTheme = (theme: TypographyTheme) => {
  if (theme.includes("400")) {
    return "font-base";
  }
  if (theme.includes("500")) {
    return "font-medium";
  }
  if (theme.includes("700")) {
    return "font-bold";
  }
  if (theme.includes("900")) {
    return "font-black";
  }
};

const getFontSizeWihtTheme = (theme: TypographyTheme) => {
  if (theme.includes("micro")) {
    return "text-micro";
  }
  if (theme.includes("small")) {
    return "text-small";
  }
  if (theme.includes("base")) {
    return "text-base";
  }
  if (theme.includes("medium")) {
    return "text-medium";
  }
  if (theme.includes("large")) {
    return "text-large";
  }
  if (theme.includes("xlarge")) {
    return "text-xlarge";
  }
};

const getTypographyTheme = (theme?: TypographyTheme) => {
  if (theme) {
    return `${getFontSizeWihtTheme(theme)} ${getFontWeightWihtTheme(theme)}`;
  }
  return "text-black";
};

interface P extends PropsWithChildren, TypographyProps {
  theme?: TypographyTheme;
  fontSize?: FontSize;
  align?: TypographyAlign;
  tailwindcss?: string;
}

const getFontSize = (fontSize: number) => {
  if (fontSize === 12) {
    return "text-xs";
  }
  if (fontSize === 14) {
    return "text-sm";
  }
  if (fontSize === 16) {
    return "text-base";
  }
  if (fontSize === 18) {
    return "text-lg";
  }
  if (fontSize === 32) {
    return "text-3xl";
  }
};

const getTextAlign = (align: TypographyAlign) => {
  if (align === "center") {
    return "text-center";
  }
  if (align === "justify") {
    return "text-justify";
  }
  if (align === "left") {
    return "text-left";
  }
  if (align === "right") {
    return "text-right";
  }
  return "text-inherit";
};

const Typography: React.FC<P> = ({
  children,
  theme,
  fontSize = 16,
  align = "inherit",
  tailwindcss,
  color,
  ...props
}) => {
  return (
    <p
      className={`
        ${getTypographyTheme(theme)} 
        ${getFontSize(fontSize)} 
        ${getTextAlign(align)}
        ${color}
        ${tailwindcss}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export default Typography;
