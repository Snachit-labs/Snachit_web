import { Outlet } from "react-router";
import style from "../css/pages/globalLayout.module.css";

export default function GlobalLayout() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerLogoDiv}>
          <span className={style.snach}>SNACH</span>
          <span className={style.it}>IT</span>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
