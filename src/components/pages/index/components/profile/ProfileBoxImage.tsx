import "./profileBoxImage.css";

export const ProfileBoxImage = ({
  clickHand,
  _src = "",
  _alt = "",
}: {
  clickHand: () => void;
  _src :string;
  _alt :string;

}) => {
  return (
    <div className="profileBoxImageWrapper">
      <div className="hand" onClick={clickHand}></div>
      <img className="profileBoxImage" src={_src} alt={_alt} />
    </div>
  )
}