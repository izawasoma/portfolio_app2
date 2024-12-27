/* ライブラリ */
import React from "react";
/* CSS */
import "./Destyle.css"
import "./Layout.css";
/* コンテンツファイル */
import logo from "./../../assets/svg/logo.svg";
/* コンポーネント */
import { Router } from "./../routes/Router";
import { RootProvider } from "./../providers/RootProviders";

export const Layout = () => {
  return (
    <RootProvider>
      <header>
        <div>
          <img className="logo" src={logo} alt="logo" />
          <h1>Izawa's Portfolio</h1>
        </div>
        {/* <div id="headerButton">
          <i class="fa-solid fa-bars"></i>
        </div> */}
      </header>
      <main>
        <Router />
      </main>
      <footer>© 2022 izawasoma</footer>
    </RootProvider>
  )
}