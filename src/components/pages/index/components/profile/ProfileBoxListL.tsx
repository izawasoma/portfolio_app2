import "./profileBoxListL.css";
import pointIcon from "@/assets/svg/point-icon.svg"

export const ProfileBoxListL = ({
  _title = "",
  _discription = "",
}: {
  _title :string;
  _discription: string;
}) => {
  return (
    <div className="profileBoxListL">
      <img src={pointIcon} alt="プロフィール欄アイコン" />
      <dt>{ _title }</dt>
      <dd>{ _discription }</dd>
    </div>
  )
}