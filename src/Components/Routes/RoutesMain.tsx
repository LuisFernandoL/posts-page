import { Route, Routes } from "react-router-dom";
import { ListPost } from "../ListPosts";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route>
        <Route path="/posts" element={<ListPost />} />
      </Route>
    </Routes>
  );
};
