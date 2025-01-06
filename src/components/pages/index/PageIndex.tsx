/* ライブラリ */
/* CSS */
import "./index.css";
/* コンテンツファイル */
import topSharpSVG from "@/assets/pages/index/top-sharp.svg";
import doorPhoneSVG from "@/assets/pages/index/door-phone.svg";
import doorWebSVG from "@/assets/pages/index/door-web.svg";
import indexPuzzle1PNG from "@/assets/pages/index/index-puzzle1.png";
import indexPuzzle2PNG from "@/assets/pages/index/index-puzzle2.png";
import indexPuzzle3PNG from "@/assets/pages/index/index-puzzle3.png";
import myPictureJPEG from "@/assets/pages/index/my_picture.jpeg"
import myPicture2JPG from "@/assets/pages/index/my_picture2.jpg"
import myPicture3JPEG from "@/assets/pages/index/my_picture3.jpeg"
import clearPNG from "@/assets/pages/index/clear.png"

/* コンポーネント */
import { IndexPuzzle } from "./components/IndexPuzzle";
import { ProfileBox } from "./components/profile/ProfileBox";
import { ProfileBoxImage } from "./components/profile/ProfileBoxImage";
import { useState } from "react";
import { ProfileBoxListS } from "./components/profile/ProfileBoxListS";
import { ProfileBoxListL } from "./components/profile/ProfileBoxListL";
import { SkillsBox } from "./components/skill/SkillsBox";
import { SkillsCard } from "./components/skill/SkillsCard";
import { MindBox } from "./components/MindBox";
import { Modal } from "./components/Modal";

export const PageIndex = () => {

  // 画像のプリロード
  const imgObjMeWithKey = new Image()
  imgObjMeWithKey.src = myPicture2JPG;
  const imgObjMeClear = new Image();
  imgObjMeClear.src = myPicture3JPEG;
  const imgObjClear = new Image();
  imgObjClear.src = clearPNG;

  const [clickCount,setClickCount] = useState(0);
  const clickHand = () => {
    let count = clickCount;
    console.log(clickCount);
    if(clickCount < 6){
      setClickCount(clickCount + 1);
      count++;
    }

    if(count == 5){
      setMyPhoto(myPicture2JPG);
    }
    else if(count == 6){
      setMyPhoto(myPicture3JPEG);
      setStateClearModal(true);
    }
  }

  const [myPhoto,setMyPhoto] = useState<string>(myPictureJPEG);

  const starFillColor = ["","fill_red","fill_yellow","fill_blue"];
  const [starCount,setStarCount] = useState(0);
  const [styleStarFill,setStyleStarFill] = useState(starFillColor[starCount]);
  const colorChangeStar = () => {
    let count = starCount;  
    if(starCount === 3){
      setStarCount(0);
      count = 0;
    }
    else{
      setStarCount(starCount + 1);
      count++
    }
    setStyleStarFill(starFillColor[count]);
  }

  const hexagonFillColor = ["","fill_yellow","fill_blue","fill_red"];
  const [hexagonCount,setHexagonCount] = useState(0);
  const [styleHexagonFill,setStyleHexagonFill] = useState(hexagonFillColor[hexagonCount]);
  const colorChangeHexagon = () => {
    let count = hexagonCount;  
    if(hexagonCount === 3){
      setHexagonCount(0);
      count = 0;
    }
    else{
      setHexagonCount(hexagonCount + 1);
      count++
    }
    setStyleHexagonFill(hexagonFillColor[count]);
  }

  const pentagonFillColor = ["","fill_blue","fill_red","fill_yellow"];
  const [pentagonCount,setPentagonCount] = useState(0);
  const [stylePentagonFill,setStylePentagonFill] = useState(pentagonFillColor[pentagonCount]);
  const colorChangePentagon = () => {
    let count = pentagonCount;  
    if(pentagonCount === 3){
      setPentagonCount(0);
      count = 0;
    }
    else{
      setPentagonCount(pentagonCount + 1);
      count++
    }
    setStylePentagonFill(pentagonFillColor[count]);
  }

  const [stateClearModal,setStateClearModal] = useState<boolean>(false);
  const modalClose = () => {
    setStateClearModal(false);
  }

  return (
    <>
      <section className="sectionTop">
        <div className="topSharpWrapper">
          <img src={topSharpSVG} alt="トップのカラフルな図形" />
        </div>
        <div>
          <h2>hELLO!!!!</h2>
          <p>Welcome to MyRoom !!</p>
          <p>
            こんにちは。
            <br />
            伊澤聡真のポートフォリオへようこそ。
            <br />
            このページは自己紹介のページです。
          </p>
        </div>
      </section>
      <section className="sectionLetsPuzzle">
        <h2>Let's Puzzle !!!</h2>
        <p>
        ようこそ、
        伊澤聡真のポートフォリオへ。<br/>
        <br/>
        このポートフォリオの１ページの中にはたくさんの謎が仕掛けられています。<br/>
        <br/>
        全ての謎を解き明かして、鍵を見つけだしてください。（別ページに遷移する必要はありません）<br/>
        </p>
        <div className="doorPhone">
          <img src={doorPhoneSVG} alt="開かずの扉" />
        </div>
        <div className="doorWeb">
          <img src={doorWebSVG} alt="開かずの扉" />
        </div>
      </section>
      <section className="sectionPuzzles">
        <IndexPuzzle _puzzleImgSrc={indexPuzzle1PNG} _answer="こんぶ" _placeholder="ひらがな３文字で回答" _puzzleHint="たごのこか" />
        <IndexPuzzle _puzzleImgSrc={indexPuzzle2PNG} _answer="07734" _placeholder="半角数字５桁で回答" _puzzleHint="たかなぶぎ" />
        <IndexPuzzle _puzzleImgSrc={indexPuzzle3PNG} _answer="なすび" _placeholder="ひらがな３文字で回答" _puzzleHint="けいかしは"/>
      </section>
      <section className="sectionAboutMe">
        <h2>About Me</h2>
        <ProfileBox>
          <div>
            <ProfileBoxImage
              _src={myPhoto}
              _alt="alt"
              clickHand={clickHand}
            ></ProfileBoxImage>
          </div>
          <div>
            <ProfileBoxListS
              _title="名前"
              _discription="伊澤聡真"
            />
            <ProfileBoxListS
              _title="年齢"
              _discription="25歳"
            />
            <ProfileBoxListS
              _title="出身地"
              _discription="和歌山県"
            />
            <ProfileBoxListS
              _title="住み所"
              _discription="東京都目黒区"
            />
            <ProfileBoxListL
              _title="趣味"
              _discription="「リアル脱出ゲーム」「スイーツ作り」「ゲーム制作」"
            />
            <ProfileBoxListL
              _title="特技"
              _discription="「謎・パズル制作」が得意です。「パズル通信ニコリ」や「SCRAP」への問題提供も行っております"
            />
          </div>
          <div>
            <ProfileBoxListL
              _title="好きなもの・コト"
              _discription="音楽（サカナクション・スキマスイッチ・秦基博）、漫画（映像研には手を出すな・宇宙兄弟・ブルージャイアント）、プログラム言語（PHP）、好きなパズル（ナンバーリンク）、好きな芸人（バカリズム、オードリー、霜降り明星）"
            />
            <ProfileBoxListL
              _title="大事なモノ"
              _discription="愛犬の芝犬。おとぼけだけど、いつもそばにいてくれる大切な相棒です。"
            />
          </div>
        </ProfileBox>
      </section>
      <section className="sectionMySkill">
        <h2>Skills</h2>
        <SkillsBox>
          <SkillsCard _skillName="PHP" _skillLevel={5} />
          <SkillsCard _skillName="Laravel" _skillLevel={5} />
          <SkillsCard _skillName="Go" _skillLevel={4} />
          <SkillsCard _skillName="Node.js" _skillLevel={3} />
          <SkillsCard _skillName="C#" _skillLevel={3} />
          <SkillsCard _skillName="Java" _skillLevel={2} />
          <SkillsCard _skillName="HTML,CSS" _skillLevel={5} />
          <SkillsCard _skillName="React" _skillLevel={3} />
          <SkillsCard _skillName="Angular" _skillLevel={2} />
          <SkillsCard _skillName="Git,Github" _skillLevel={5} />
          <SkillsCard _skillName="Linux" _skillLevel={3} />
          <SkillsCard _skillName="Docker" _skillLevel={3} />
          <SkillsCard _skillName="Heroku" _skillLevel={3} />
          <SkillsCard _skillName="MySQL" _skillLevel={5} />
          <SkillsCard _skillName="PostgreSQL" _skillLevel={3} />
          <SkillsCard _skillName="PhotoShop" _skillLevel={3} />
          <SkillsCard _skillName="Illustrator" _skillLevel={3} />
          <SkillsCard _skillName="Swift" _skillLevel={1} />
        </SkillsBox>
      </section>
      <section className="sectionVision">
        <div className="frontBlock">
          <h2>Vision</h2>
          <h3>
            人に知られ、誇れる作品を<br/>生み出したい。
          </h3>
          <p>
            謎解き制作やWebシステムを用いたイベントを通して、「面白い」「すごい」「楽しい」などの評価をいただいてきました。これから先も、自分が面白い・楽しいと考えるものと真摯に向き合い、多くの人の評価と共に作品を伸ばし、作品と共に自分の成長がある人生にしたいと考えています。
          </p>
          <h3>
            人を笑顔にするものを<br/>作りたい。
          </h3>
          <p>
            「便利さ」「面白さ」「新しさ」は人の感情に直接訴えかけ、Web制作や謎制作を使えば、遠く離れた見知らぬ人を笑顔にすることができます。「便利さ」「面白さ」「新しさ」をより直接届けるために、日々様々な技術やエンタメに触れて知見を増やしていきたいです。
          </p>
          <h3>
            Webシステムで人を集めて<br/>イベントを開きたい。
          </h3>
          <p>
            今まで、謎解きカフェやクイズ大会など、オンライン・オフライン問わず、様々なイベントを開催してきました。しかしながら、インフラの知識が乏しく、自作のシステムを用いたWebイベントの開催には至っておりません。今後は、コミュニケーション〜ゲームまでを包括したWebシステム開発にも挑戦していきたいと考えています。現在はWebサイトをレンタルサーバで公開したりしながら少しずつ経験を積んでおります。
          </p>
        </div>
        <div className="backImagesWrapperFront">
          <div className="star" onClick={colorChangeStar}></div>
          <div className="pentagon" onClick={colorChangePentagon}></div>
          <div className="hexagon" onClick={colorChangeHexagon}></div>
        </div>
        <div className="backImagesWrapper">
          <svg className="star" xmlns="http://www.w3.org/2000/svg" width="86.18" height="84.487" viewBox="0 0 86.18 84.487">
            <path className={styleStarFill} id="star" data-name="多角形 6" d="M31.292,5.646a3,3,0,0,1,5.411,0l6.966,14.537a3,3,0,0,0,2.3,1.676l15.911,2.189a3,3,0,0,1,1.675,5.13L51.926,40.4a3,3,0,0,0-.869,2.687l2.854,15.942A3,3,0,0,1,49.53,62.2l-14.106-7.63a3,3,0,0,0-2.855,0L18.464,62.2a3,3,0,0,1-4.38-3.167l2.854-15.942a3,3,0,0,0-.869-2.687L4.443,29.178a3,3,0,0,1,1.675-5.13l15.911-2.189a3,3,0,0,0,2.3-1.676Z" transform="translate(22.286) rotate(20)" fill="#c1c1c1"/>
          </svg>
          <svg className="pentagon" xmlns="http://www.w3.org/2000/svg" width="82.753" height="82.753" viewBox="0 0 82.753 82.753">
            <path className={stylePentagonFill} id="pentagon" data-name="多角形 4" d="M32.679,1.391a3,3,0,0,1,3.642,0L67.337,25.085a3,3,0,0,1,1.045,3.27L56.476,66.886A3,3,0,0,1,53.609,69H15.391a3,3,0,0,1-2.866-2.114L.618,28.355a3,3,0,0,1,1.045-3.27Z" transform="translate(0 15.522) rotate(-13)" fill="#c1c1c1"/>
          </svg>
          <svg className="hexagon" xmlns="http://www.w3.org/2000/svg" width="81.833" height="75.91" viewBox="0 0 81.833 75.91">
            <path className={styleHexagonFill} id="hexagon" data-name="多角形 5" d="M48.675,0a3,3,0,0,1,2.6,1.5l15.063,25.99a3,3,0,0,1,0,3.009L51.27,56.485a3,3,0,0,1-2.6,1.5H18.53a3,3,0,0,1-2.6-1.5L.872,30.495a3,3,0,0,1,0-3.009L15.934,1.5A3,3,0,0,1,18.53,0Z" transform="matrix(0.951, 0.309, -0.309, 0.951, 17.917, 0)" fill="#c1c1c1"/>
          </svg>
        </div>
      </section>
      <section className="sectionMind">
        <h2>Mind</h2>
        <MindBox
          _no="01"
          _title1="常にアソビゴ"
          _target="コ"
          _title2="ロを。"
          _discription="子供も大人も熱中できるものには必ず「楽しい」「面白い」と思う要素がどこかにあると思います。作品を作る時には、できる限りそういった要素を詰め込められないかを考えるようにしています。"
        />
        <MindBox
          _no="02"
          _title1="常にチャレ"
          _target="ン"
          _title2="ジを。"
          _discription="「実現したいこと」に対して、不足している知識や技術は常に調べて解決するように心がける。作品制作の時に「できる・できない」はなるべく考えずに制作を行う。"
        />
        <MindBox
          _no="03"
          _title1="常に学"
          _target="ぶ"
          _title2="姿勢を。"
          _discription="まだまだ未熟な自分。「学ぶ」は「真似ぶ」に由来すると言いますが、多くのWeb制作の業務委託を通して、結局はこの「真似ぶ」が一番大切だと学ぶました。現場では常にわからないことは質問し続け、模範を探る動きで学び続けるようにしています。"
        />
      </section>
      {stateClearModal ? (
        <Modal close={modalClose}>
          <div className="sectionGameclear">
            <img src={clearPNG} alt="クリア" />
            <h2>GAMECLEAR!</h2>
            <p>
              お見事！
              あなたはこのポートフォリオに隠された全ての謎を解き明かしました！<br/>
              <br/>
              どうだったしょうか？
              離れていても、画像にちょっとした仕掛けをするだけで、「僕から直接鍵を受け取る」という疑似体験ができたのではないでしょうか？<br />
              僕はあなたがどこの誰かなのかは分かりません。そんな顔も知らないあなたに、ちょっとした感動体験を届けられたでしょうか？<br />
              この１ページの体験から、少しでも僕に興味をもっていただければ幸いです。<br />
              <br />
            </p>
          </div>
        </Modal>
      ) : ""}
    </>
  );
};
