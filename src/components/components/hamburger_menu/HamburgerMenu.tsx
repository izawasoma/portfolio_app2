import React, { useState, useContext, useEffect, ReactNode } from "react";
import "./hamburgerMenu.css";
import { RootContext } from "../../providers/RootProviders";

export const HamburgerMenu = ({ children }: { children: ReactNode }) => {
    //コンテキスト
    const { hamburgerMenuState } = useContext(RootContext);
    //ハンバーガーメニューの表示・非表示のスタイルクラス
    const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState("close");

    /**
     * contextの値によって、ハンバーガーメニューの表示・非表示を切り替える
     */
    useEffect(() => {
        if (hamburgerMenuState) {
            setHamburgerMenuStyle("open");
        }
        else {
            setHamburgerMenuStyle("close");
        }
    }, [hamburgerMenuState]);

    return (
        <nav className={`hamburgerMenu ${hamburgerMenuStyle}`}>
            {children}
        </nav>
    );
}