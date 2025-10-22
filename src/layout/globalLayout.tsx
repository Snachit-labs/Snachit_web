import { Outlet } from "react-router";
import style from "../css/pages/globalLayout.module.css";
import Header from "../components/Header";

export default function GlobalLayout() {
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
    </div>
  );
}
