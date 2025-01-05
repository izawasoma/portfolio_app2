import { Route, Routes } from "react-router-dom";
import { PageIndex } from "../pages/index/PageIndex";
import { PageWorks } from "../pages/works/PageWorks";

export const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<PageIndex />} />
      <Route path={`/works`} element={<PageWorks />} />
    </Routes>
  )
}