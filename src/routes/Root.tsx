import { Header } from "@components";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100%" }}
    >
      <Header />
      <Outlet />
    </div>
  );
};
