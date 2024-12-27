import { Route, Routes } from "react-router-dom";
import { PageIndex } from "../pages/index/PageIndex";

export const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<PageIndex />} />
    </Routes>
  )
}