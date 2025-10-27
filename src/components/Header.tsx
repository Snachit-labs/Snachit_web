import headerStyle from "../css/components/headerStyle.module.css";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.inner}>
        <div
          className={headerStyle.headerLogoDiv}
          onClick={() => {
            navigate("/");
          }}
        >
          <span className={headerStyle.snach}>SNACH</span>
          <span className={headerStyle.it}>IT</span>
        </div>
        <ul className={headerStyle.navbar}>
          <li>테크</li>
          <li>쇼핑</li>
          <li>라이프스타일</li>
          <li>소셜</li>
          <li>금융</li>
        </ul>
      </div>
    </header>
  );
}
