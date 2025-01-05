import { ReactNode } from "react";
/* CSS */
import "./worksBox.css";

export const WorksBox = ({ children }: { children: ReactNode }) => {
  return <section className="worksBox">{children}</section>;
};
