import "./skillsCard.css";

export const SkillsCard = ({
  _skillName = "",
  _skillLevel = 1,
} :{
  _skillName: string;
  _skillLevel: number
}) => {

  const star = "★";
  const yellowStar = star.repeat(_skillLevel);
  const greyStar = star.repeat(5 - _skillLevel);

  return (
    <li className="skillsCard">
      <dl>
        <dt>{ _skillName }</dt>
        <dd><span>{ yellowStar }</span><span>{ greyStar }</span></dd>
      </dl>
    </li>
  )
}