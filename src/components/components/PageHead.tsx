/* CSS */
import "./pageHead.css";
/* コンテンツファイル */
import topSharpsSVG from "@/assets/svg/top-sharps.svg";

export const PageHead = ({
        _title = "",
        _subtitle = "",
    }:{
        _title: string,
        _subtitle: string,
    }
) => {
  return (
    <section className="sectionPageHead">
      <div className="topSharpWrapper">
        <img src={topSharpsSVG} alt="トップのカラフルな図形" />
      </div>
      <div>
        <h2>{ _title }</h2>
        <p>{ _subtitle }</p>
      </div>
    </section>
  );
};
