import {useState} from "react";
import "./indexPuzzle.css";
import correct from "@/assets/pages/index/correct.png";

export const IndexPuzzle = ({
  _answer = "",
  _puzzleImgSrc = "",
  _puzzleHint = "",
  _placeholder = "",
}: {
  _answer: string,
  _puzzleImgSrc: string,
  _puzzleHint: string,
  _placeholder: string,
}) => {
  const [answer,setAnswer] = useState("");
  const [styleInCorrect,setStyleInCorrect] = useState("");
  const [statePuzzle,setStatePuzzle] = useState("first");
  const img = new Image();
  //プリロード
  img.src = correct;

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  }

  const judgeAnswer = () => {
    if(answer == _answer){
      console.log("正解です");
      setStatePuzzle("correct");
      setTimeout(function(){
        setStatePuzzle("displayHint");
      },2500)
    }
    else{
      console.log("不正解です");
      setStyleInCorrect("inCorrect");
      setTimeout(function(){
        setStyleInCorrect("");
      },1000);
    }
  }

  const PuzzleDisplay = () => {
    if(statePuzzle == "first"){
      return (
        <div className="imgWrap">
          <img src={_puzzleImgSrc} />
        </div>
      );
    }
    else if(statePuzzle == "correct"){
      return (
        <div className="imgWrap boing">
          <img src={correct} alt="" />
        </div>
      );
    }
    else if(statePuzzle == "displayHint"){
      return (
        <div className="hintBox">
          { _puzzleHint }
        </div>
      );
    }
  }

  return (
    <article className="indexPuzzle">
      <PuzzleDisplay />
      { statePuzzle == "first" ? (
        <div className="formWrap">  
          <input type="text" value={answer} onInput={handleChangeAnswer} className={styleInCorrect} placeholder={_placeholder} />
          <button onClick={judgeAnswer}>回答</button>
        </div>
      ) : "" }
    </article>
  )
}