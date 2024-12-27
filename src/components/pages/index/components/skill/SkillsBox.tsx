import { ReactNode } from "react";
import "./skillsBox.css";

export const SkillsBox = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <ul className="skillsBox">
        { children }
    </ul>
  )
}