import { Header } from "@components";
import { Outlet } from "react-router-dom";
import { useHistory } from "@hooks";

export const Root = () => {
  useHistory();

  return (
    <div
      style={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100%" }}
    >
      <Header />
      <Outlet />
    </div>
  );
};
