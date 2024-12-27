import { ReactNode } from "react";
import "./profileBox.css";

export const ProfileBox = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <dl className="profileBox">
        { children }
    </dl>
  )
}