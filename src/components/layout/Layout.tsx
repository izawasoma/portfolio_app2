/* CSS */
import "./Destyle.css"
import "./Layout.css";
/* コンテンツファイル */
import logo from "./../../assets/svg/logo.svg";
/* コンポーネント */
import { Router } from "./../routes/Router";
import { RootProvider } from "./../providers/RootProviders";
import { faIdCardClip, faImage } from "@fortawesome/free-solid-svg-icons";
import { HamburgerMenuMainLink } from "../components/hamburger_menu/HamburgerMenuMainLink";
import { HamburgerMenuMain } from "../components/hamburger_menu/HamburgerMenuMain";
import { HamburgerMenu } from "../components/hamburger_menu/HamburgerMenu";
import { HamburgerButton } from "../components/hamburger_menu/HamburgerButton";

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
      <HamburgerButton />
      <HamburgerMenu>
        <HamburgerMenuMain>
          <HamburgerMenuMainLink _icon={faIdCardClip} _title="Profile" _subtitle="手前味噌ですが自己紹介" _link="/" />
          <HamburgerMenuMainLink _icon={faImage} _title="Works" _subtitle="制作・作品紹介" _link="/works" />
          {/* <HamburgerMenuMainLink _icon={faPuzzlePiece} _title="Play Puzzle" _subtitle="パズルと謎解きに挑戦しよう" _link="/test" /> */}
          {/* <HamburgerMenuMainLink _icon={faEnvelope} _title="Contact" _subtitle="お仕事の依頼はこちらから" _link="/contact" /> */}
        </HamburgerMenuMain>
      </HamburgerMenu>
      <main>
        <Router />
      </main>
      <footer>
        <a href="/">Home</a>
        <a href="/works">Works</a>
      </footer>
    </RootProvider>
  )
}