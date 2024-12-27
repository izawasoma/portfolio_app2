import "./profileBoxListS.css";
import profileIcon from "@/assets/pages/index/profileIcon.svg"

export const ProfileBoxListS = ({
  _title = "",
  _discription = "",
}: {
  _title: string;
  _discription: string;
}) => {
  return (
    <div className="profileBoxListS">
      <img src={profileIcon} alt="プロフィール欄アイコン" />
      <dt>{ _title }</dt>
      <dd>{ _discription }</dd>
    </div>
  )
}