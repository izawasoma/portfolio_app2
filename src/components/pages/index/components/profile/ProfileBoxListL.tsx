import "./profileBoxListL.css";
import profileIcon from "@/assets/pages/index/profileIcon.svg"

export const ProfileBoxListL = ({
  _title = "",
  _discription = "",
}: {
  _title :string;
  _discription: string;
}) => {
  return (
    <div className="profileBoxListL">
      <img src={profileIcon} alt="プロフィール欄アイコン" />
      <dt>{ _title }</dt>
      <dd>{ _discription }</dd>
    </div>
  )
}