import { PropsWithChildren, memo } from "react";
import Typography from "../Typography";

interface P extends PropsWithChildren {}

const MonthlyDayWeekLabel: React.FC<P> = ({ children }) => {
  return (
    <Typography
      theme="micro400"
      color="text-grey-700"
      tailwindcss="w-6 text-center"
    >
      {children}
    </Typography>
  );
};

export default MonthlyDayWeekLabel;
