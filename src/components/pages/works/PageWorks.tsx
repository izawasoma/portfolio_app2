import { PageHead } from "../../components/PageHead";
import { WorksBox } from "./components/works/WorksBox";
import { WorksCard } from "./components/works/WorksCard";
/* CSS */
import "./works.css";

export const PageWorks = () => {
  
  return (
    <div className="PageWorks">
      <PageHead _title="Works" _subtitle="制作記録" />
      <WorksBox>
        <WorksCard
          _title="MusicWolf"
        />
      </WorksBox>
    </div>
  );
};
