import { ReactNode } from "react";
import "./hamburgerMenuMain.css";

export const HamburgerMenuMain = ({ children }: { children: ReactNode }) => {
    return (
        <ul>
            { children }
        </ul>
    );
}